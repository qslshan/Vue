<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <div>
    <button @click="goBack()">后退</button>
    <button @click="goGo()">前进</button>
    <button @click="goHome()">返回首页</button>
    </div>
    <p>导航：
      <router-link to="/">Home</router-link> |
      <router-link to="/params/88/welcome qslshan">Params</router-link> |
      <router-link to="/goHome">goHome</router-link>  |
      <router-link to="/goParams/367/qsls world">goParams</router-link>  |
      <router-link to="/qsls">qsls</router-link>  |
      <router-link to="/tttt">我是瞎写的</router-link> |
    </p>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!--<div>-->
    <!--<router-link to="/">首页</router-link> |-->
    <!--<router-link :to="{name:'Hi',params:{username:'HHH',id:'888'}}">Hi页面</router-link>|-->
    <!--<router-link :to="{name:'Hi1',params:{username:'HHH1',id:'888'}}">Hi页面1</router-link>|-->
    <!--<router-link :to="{name:'Hi2',params:{username:'HHH2',id:'888'}}">Hi页面2</router-link>|-->
    <!--</div>-->
    <!--<p>{{$route.name}}</p>-->
    <!--<div>-->
    <!--<button @click="goBack()">后退</button>-->
    <!--<button @click="goGo()">前进</button>-->
    <!--<button @click="goHome()">返回首页</button>-->

    <!--</div>-->
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/params/37/qslshan">Params</router-link> |-->
    <!--<router-link to="/goHome">goHome</router-link> |-->
    <!--<router-link to="/goParams/88/welcome qslshan">goParams</router-link> |-->
    <!--<router-link to="/hi1">Hi1</router-link> |-->
    <!--<router-link to="/qsls">qsls</router-link> |-->
    <!--<router-link to="/home1">Home1</router-link> |-->
    <!--<router-link to="/tttt">我是瞎写的</router-link> |-->
    <!--<router-view name="left" style="float:left;width: 50%;height: 300px;background-color: #ccc"></router-view>-->
    <!--<router-view name="right" style="float:left;width: 50%;height: 300px;background-color: yellowgreen"></router-view>-->
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'
  import Statement from './components/Statement.vue'
  import Monitor from './components/Monitor.vue'
  import Vue from 'vue'
  import Router from 'vue-router'

  Vue.use(Router)

  export default {
    name: 'App',
    components: {Hello, Statement, Monitor},
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      goGo () {
        this.$router.go(1)
      },
      goHome () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
