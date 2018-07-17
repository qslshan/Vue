<template>
  <div class="Statement">
    <div v-html="msg"></div>
    <hr>
    <div :style="{color:activeColor,fontSize:fontSize+'px'}">青珊绿水</div>
    <div :style="styleObject">青珊绿水</div>
    <div :style="[styleObject,styleJect]">青珊绿水</div>
    <div class="static" :class="{active:isActive,'text-danger':hasError}"></div>
    <div class="static" :class="classObject"></div>
    <div>
      <ul v-for="site in sites">
        <li>{{site.name}}</li>
      </ul>
      <ul v-for="(value,key,index) in object">
        <li>{{index}}.{{key}}:{{value}}</li>
      </ul>
    </div>
    <div>
      <p>原始字符串:{{message}}</p>
      <p>计算后反转字符串：{{reverseMessage}}</p>
      <p>使用方法后反转字符串：{{reverseMessage2()}}</p>
    </div>
    <div v-if="Math.random()>0.5">
      heheheheh
    </div>
    <div v-else>
      ttttttt
    </div>
    <hr>
    <div>
      <label for="r1">change the color</label>
      <input type="checkbox" v-model="seen" id="r1">
      <div :class="{'class1':seen}">hide/show</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Statement",
    data() {
      return {
        styleJect: {
          'font-weight': 'bold'
        },
        styleObject: {
          color: "green",
          fontSize: "30px"
        },
        activeColor: "red",
        fontSize: 30,
        classObject: {
          active: true,
          'text-danger': true
        },
        isActive: true,
        hasError: false,
        name: "Google",
        url: "http://www.baidu.com",
        message: "Runboob",
        msg: "<h1>Hello qsls</h1>",
        seen: true,
        sites: [
          {name: 'Runoob'},
          {name: 'Google'},
          {name: 'Taobao'}
        ],
        object: {
          name: "qsls",
          age: 20,
          school: "xihua"
        }
      }
    },
    computed: {
      site: {
        get() {
          return this.name + '' + this.url;
        },
        set(newValue) {
          var names = newValue.split('');
          this.name = names[0];
          this.url = names[names.length - 1];
        }

      },

      reverseMessage() {
        return this.message.split('').reverse().join('');
      }
    },
    filters: {},
    methods: {
      reverseMessage2() {
        return this.message.split('').reverse().join('');
      }

    }
  }
</script>
<style>
  .active {
    margin-left: 700px;
    width: 100px;
    height: 100px;
    background: green;
  }

  .text-danger {
    background: red;
  }

  .class1 {
    background: gray;
    color: yellowgreen;
  }
</style>
