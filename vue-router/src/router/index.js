import Vue from 'vue'   //引入vue
import Router from 'vue-router'  //引入vue-router
import HelloWorld from '@/components/HelloWorld'   //引入根目录下的HelloWorld.vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)  //vue全局使用Router

// export default new Router({
//   routes: [    //配置路由，这里是个数组,每一个链接都是一个对象
//     {
//       path: '/',  //链接路径
//       name: 'HelloWorld',   //路由名称
//       components: HelloWorld
//     },
//     {
//       path: '/params/:newsId/:newsTitle',
//       component: Params
//     },{
//       path: '/goHome/:newsId/:newsTitle',
//       redirect: '/params/:newsId/:newsTitle'
//     }
//
//   ]
// })



//路由、子路由、参数传递
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/Hi',
//       component: Hi,
//       children:[
//         {path: '/',name: 'Hi',component: Hi},
//         {path: 'hi1',name: 'Hi1',component: Hi1},
//         {path: 'hi2',name: 'Hi2',component: Hi2}
//       ]
//     }
//   ]
// })

//单页面多路由区域
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       components: {
//         default:HelloWorld,
//         left:Hi1,
//         right:Hi2
//       }
//     },{
//       path: '/qsls',
//       name: 'HelloWorld',
//       components: {
//         default:HelloWorld,
//         left:Hi2,
//         right:Hi1
//       }
//     },
//   ]
// })

//通过url传参
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias: '/qsls'
    },
    {
      path: '/params/:newsId/:newsTitle',
      component: Params,
      beforeEnter: (to,form,next)=>{
        console.log(to);
        console.log(form);
        next();
      }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId/:newsTitle',
      redirect: '/params/:newsId/:newsTitle'
    },
    {
      path: '*',     //找不到页面时的配置
      component: Error  //我们新建的一个Error.vue文件
    }
  ]
})



//重定向
// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//       alias: '/home1'
//     }, {
//       path: '/params/:newsId/:newsTitle',
//       component: Params,
//       // beforeEnter:(to,form,next)=>{
//       //   console.log(to);
//       //   console.log(form);
//       //   console.log(next);
//       //   next({path: '/'});
//       // }
//     },{
//       path: '/goHome',
//       redirect: '/'
//     },{
//       path: '/goParams/:newsId/:newsTitle',
//       redirect: '/params/:newsId/:newsTitle',
//     },{
//       path: '/hi1',
//       component: Hi1,
//       alias: '/qsls'
//     },{
//       path: '*',
//       component: Error
//     }
//   ]
// })
//
//
//
//
//
//


































