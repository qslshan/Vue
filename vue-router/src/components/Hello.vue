<template>
  <div class="hello">
    <p>HTML</p>
    <div v-html="msg"></div>
    <hr>
    <p>属性</p>
    <div>
      <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
      <br><br>
      <div :class="{'class1': class1}">
        change color
      </div>
    </div>
    <hr>
    <p>表达式</p>
    <div>
      {{5 + 5}}<br>
      {{ok ? 'YES' : 'NO'}}<br>
      {{message.split('').reverse().join('')}}
      <div :id="'list-'+id">青珊绿水</div>
    </div>
    <hr>
    <p>指令</p>
    <div>
      <p v-if="seen">现在你看到我了</p>
    </div>

    <hr>
    <p>字符串反转</p>
    <div>
      <p>{{message}}</p>
      <button v-on:click="reverseMessage">反转</button>
    </div>

    <hr>
    <p>过滤器</p>
    <div>
      {{message | capitalize}}
    </div>


  </div>
</template>
<script>
  export default {
    name: "Hi",
    data() {
      return {
        msg: "<h1>Hello qsls</h1>",
        class1: false,
        ok: true,
        message: "rubbob",
        id: 1,
        seen: true
      }
    },
    filters: {
      capitalize(value) {
        if (!value) {
          return ''
        }
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);


      }

    },
    methods: {
      reverseMessage() {
        this.message = this.message.split('').reverse().join('');
      }
    }
  }
</script>
<style>
  .class1 {
    background: gray;
    color: yellowgreen;
  }
</style>
