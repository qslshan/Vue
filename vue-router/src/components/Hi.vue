<template>
  <div class="hi">
   <h2>{{msg}}--{{$route.params.username}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Hi',
    data() {
      return {
        msg: 'Welcome to Hi page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
