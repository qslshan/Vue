<template>
  <div class="monitor">
    <div :style="styleObject">
      <div v-html="msg"></div>
    </div>
    <hr>
    <div>
      <button @click="count +=1">click it</button>
      <p>It was clicked {{count}} times!</p>
    </div>
    <hr>
    <!--<input>是一个单行输入框，有value属性，但是它不能自动换行。-->

    <!--<textarea>是一个多行输入框，，没有value属性，但是它能自动换行。-->
    <!--<p>-->
    <!--<router-link to="/foo">Go to fo</router-link>-->
    <!--<router-link to="/bar">Go to Bar</router-link>-->
    <!--</p>-->
    <!--<router-view></router-view>-->
    <div>
      <h1 @click="info" :class="color">{{msgg}}</h1>
      <h3>{{title}}</h3>
      <router-view></router-view>
    </div>
    <div>
      <p>全选：</p>
      <input type="checkbox" id="checkbox" v-model="checked" @click="checkAllChecked()">
      <label for="checkbox">check all：{{checked}}</label>
      <p>多个个复选框：</p>
      <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
      <label for="runoob">Runoob</label>
      <input type="checkbox" id="google" value="Google" v-model="checkedNames">
      <label for="google">Google</label>
      <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
      <label for="taobao">Taobao</label>
      <br>
      <span>选择的值是：{{checkedNames}}</span>
    </div>
    <hr>
    <div>
      <p>单个按钮的双向绑定：</p>
      <input type="radio" id="runoob" value="Runoob" v-model="picked">
      <label for="runoob">Runoob</label>
      <input type="radio" id="google" value="Google" v-model="picked">
      <label for="google">Google</label>
      <input type="radio" id="taobao" value="Taobao" v-model="picked">
      <label for="taobao">Taobao</label>
      <br>
      <span>选择的值是：{{picked}}</span>
    </div>
    <hr>
    <div>
      <select name="fruit" v-model="selected">
        <option value="">选择一个网站</option>
        <option value="www.runoob.com">Runoob</option>
        <option value="www.baidu.com">baidu</option>
        <option value="www.Google.com">Google</option>
      </select>
      <div>
        选择的网站是：{{selected}}
      </div>

    </div>
    <hr>
    <div>

      <div v-runoob="{ color: 'green', text: '菜鸟教程!' }"></div>
    </div>
    <hr>
    <div>
      <p>input元素：</p>
      <input type="text" v-model="message" placeholder="多行文本输入...">
      <p>消息是：{{message}}</p>
      <p style="white-space: pre">textarea元素：{{message2}}</p>
      <textarea v-model="message2" placeholder="多行文本输入..." cols="30" rows="10"></textarea>
    </div>
    <hr>
  </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Router from 'vue-router'

  Vue.use(Router)

  export default {
    name: 'monitor',
    data () {
      return {
        title:"我是项目主入口",
        msgg: 'qsls',
        checkedArr: ['Runoob', 'Google', 'Taobao'],
        selected: '',
        picked: 'Runoob',
        checked: false,
        checkedNames: [],
        message: 'qsls',
        message2: 'welcome',
        msg: '<h1>青珊绿水</h1>',
        color: 'color',
        styleObject: {
          color: 'green',
          fontSize: '30px',
          'font-weight': 'bold'
        },
        count: 0
      }
    },

    filters: {}
    ,
    watch: {},
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      },
      runoob: {
        inserted: function (el, binding) {

          el.innerHTML = binding.value.text
          el.style.backgroundColor = binding.value.color

        }
      }
    },
    methods: {
      info () {
        alert('hello')

      },
      checkAllChecked () {
        if (this.checked) {
          this.checkedNames = []

        } else {

          this.checkedNames = this.checkedArr

        }

      }
    }
  }
</script>
<style>
  .class1 {
    background: gray;
    color: yellowgreen;
  }

  .color {
    color: yellowgreen;
  }
</style>
