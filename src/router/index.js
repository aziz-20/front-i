// import { createRouter, createWebHashHistory } from 'vue-router'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Layout from "@/Layout"



// const constantRoutes = [
//   {
//     path: '/redirect',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: '/redirect/:path(.*)',
//         component: () => import('@/views/redirect')
//       }
//     ]
//   },
//   {
//     path: '/login',
//     // component: () => import('@/views/login'),
//     hidden: true
//   },
//   {
//     path: '/register',
//     // component: () => import('@/views/register'),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/error/404'),
//     hidden: true
//   },
//   {
//     path: '/401',
//     component: () => import('@/views/error/401'),
//     hidden: true
//   },
//   {
//     path: '',
//     component: Layout,
//     redirect: 'index',
//     children: [
//       {
//         path: 'index',
//         // component: () => import('@/views/index'),
//         name: 'Index',
//         meta: { title: 'homePage', icon: 'dashboard', affix: true }
//       }
//     ]
//   },

 
// ]



// const routes = [

//   {
//     path: '/redirect',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: '/redirect/:path(.*)',
//         component: () => import('@/views/redirect')
//       }
//     ]
//   },
//   {
//     path: '',
//     component: Layout,
//     redirect: 'index',
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/index'),
//         name: 'Index',
//         meta: { title: 'homePage', icon: 'dashboard', affix: true }
//       }
//     ]
//   },

//   {
//     path: '/',
//     name: 'home',
//     component: Layout,
//   },
// ]

// // const router = createRouter({
// //   mode: 'history',
// //   routes
// // })
import Layout from "@/Layout"
import path from 'path-browserify'

 export const dynamicRoutes = [ ]
 export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    // component: () => import('@/views/login'),
    hidden: false
  },
  {
    path: '/register',
    // component: () => import('@/views/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path : '/about',
    component : Layout,
   
    children : [
      {
        path : 'about',
        name : 'about',
        component : () => import('@/views/about'),
        meta : {title : 'about', icon : 'dashboard'}
      }
    ]
  } ,
  {
    path: '/products',
    component : Layout,
    hidden : false,
    children:[
      {  
          path : 'products',
          name : 'products',
          component :() =>import('@/views/system/dept'),
          meta : {title : 'product', icon : 'dashboard', affix : false ,"noCache": true,
          "link": null},
          
      }

    ]
  }
]


export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

// let routerPush = Router.prototype.push;
// let routerReplace = Router.prototype.replace;
// // push
// router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(err => err)
// }
// // replace
// router.prototype.replace = function push(location) {
//   return routerReplace.call(this, location).catch(err => err)
// }


// export default router
