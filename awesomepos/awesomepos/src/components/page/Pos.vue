<template>
  <div class="pos">
    <el-row>
      <el-col :span="10" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%;">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="goodsRemove(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>

                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>￥{{totalMoney}}元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="deleteAll()">删除</el-button>
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>

      </el-col>
      <el-col :span="14">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>

        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Pos',
    data() {
      return {
        tableData: [],
        oftenGoods: [],
        type1Goods:[],
        type2Goods:[],
        type3Goods:[],
        type0Goods:[],
        totalCount:0,
        totalMoney:0
      }

    },
    created:function(){
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response=>{
          this.oftenGoods=response.data;
        })
        .catch(error=>{
          alert('网络错误，不能访问');
        }),
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response=>{
          this.type0Goods=response.data[0];
          this.type1Goods=response.data[1];
          this.type2Goods=response.data[2];
          this.type3Goods=response.data[3];
        })
        .catch(error=>{
          alert('网络错误，不能访问');
        })
  },
    mounted: function () {
      var orderHeight = document.body.clientHeight;
      console.log(orderHeight);
      document.getElementById('order-list').style.height = orderHeight + 'px';
    },
    methods:{
      //模拟结账
      checkout(){
        if(this.totalCount!==0){
          this.tableData=[];
          this.totalCount=0;
          this.totalMoney=0;
          this.$message({
            message:"结账成功！",
            type:"success"
          });
        }else{
          this.$message.error("不能空结！");
        }

      },

      /***
       * 商品订单列表添加
       **/
      addOrderList(goods){
        this.totalCount=0;
        this.totalMoney=0;
        //商品是否存在于商品列表中
        let isHave=false;
        for(let i=0;i<this.tableData.length;i++)
        {
          if(this.tableData[i].goodId===goods.goodsId ||this.tableData[i].goodId===goods.goodId)
          {
            isHave=true;
          }
        }
        //根据判断的值编写业务逻辑
        if(isHave)
        {
          //改变列表中商品数量
          let arr=this.tableData.filter(o=>o.goodId===goods.goodsId || o.goodId===goods.goodId );
          console.log(arr);
          arr[0].count++;
        }else
        {
          let newGoods={goodId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
          this.tableData.push(newGoods);
        }
        this.tableData.forEach((element)=>{
          this.totalCount+=element.count;
          this.totalMoney+=element.price*element.count;
        })
      },
      //删除单个商品
      goodsRemove(goods){
        for(let i=0;i<this.tableData.length;i++)
        {
          if(this.tableData[i].goodId===goods.goodId)
          {
            this.tableData=this.tableData.filter(o=>o.goodId!==goods.goodId);
            this.totalCount-=goods.count;
            this.totalMoney-=goods.price*goods.count;
          }
        }
      },
      //删除全部商品
      deleteAll(){
        this.tableData=[];
        this.totalCount=0;
        this.totalMoney=0;
      }

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .totalDiv{
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3dce6;

  }
  .pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
    height: 100%;
  }

  .div-btn {
    margin-top: 10px;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    background-color: #F9FAFC;
    padding: 10px;
    text-align: left;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 10px;
    background-color: #FFF;
    cursor: pointer;
  }

  .o-price {
    color: #58B7FF;
  }

  .goods-type {
    clear: both;
  }
  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
       cursor: pointer;

   }
   .cookList li span{

        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;

   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }

  .often-goods {

  }

</style>
