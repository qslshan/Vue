<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}--{{count}}</h3>
    <p>
      <button @click="add(n)">+</button>
      <button @click="reduce(n)">-</button>
    </p>
  </div>

</template>

<script>
  import store from "../vuex/store";
  import { mapState,mapMutations,mapGetters } from "vuex";
  export default {
    data(){
      return {
        msg:'hello vuex'
      }
    },
   // computed:mapState({
//      count(){
//        return this.$store.state.count;
//      }
      //count:state=>state.count

   // }),
    computed: {
      ...mapState(['count']),
      ...

    },
    methods:mapMutations(['add','reduce']),
    store
  }


</script>
