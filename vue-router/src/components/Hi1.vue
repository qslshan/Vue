<template>
  <div class="hi1">
   <!--<h2>{{msg}}&#45;&#45;{{$route.params.username}}</h2>-->
     <h2>{{msg}}</h2>
     <!--<p>username:{{$route.params.username}}</p>-->
     <!--<p>username:{{$route.params.id}}</p>-->
  </div>
</template>

<script>
  export default {
    name: 'Hi1',
    data() {
      return {
        msg: 'Welcome to  Hi1'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
