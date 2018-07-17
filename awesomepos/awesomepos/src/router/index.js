import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import Pos from "../components/page/Pos.vue"
import leftNav from "../components/common/leftNav.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    }
  ]
})
