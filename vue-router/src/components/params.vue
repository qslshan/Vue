<template>
  <div class="params">
    <h2>{{msg}}</h2>
    <p>newId:{{$route.params.newsId}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Params',
    data () {
      return {
        msg: 'Welcome to Params'
      }
    },
    beforeRouteEnter: (to, form, next) => {
      console.log('准备进入')
      next()
    },
    beforeRouteLeave: (to, form, next) => {
      console.log('准备退出')
      next()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
