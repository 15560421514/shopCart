import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";

//  center的子路由
import myOrder from "@/pages/Center/myOrder";
import groupOrder from "@/pages/Center/groupOrder";


export default [
  {
    path: '/center',
    component:()=>import ('@/pages/Center'),
    meta: { show: true },
    children: [
      {
        path: 'myorder',
        component:()=>import ('@/pages/Center/myOrder'),
      },
      {
        path: 'grouporder',
        component:()=>import ('@/pages/Center/groupOrder'),
      },
      {
        path: '/center',
        redirect: "/center/myorder"
      }
    ]
  },
  {
    path: '/paySuccess',
    component:()=>import('@/pages/PaySuccess'),
    meta: {show:true}
  },
  {
    path: '/pay',
    component:()=>import('@/pages/Pay'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next();
      } else {
        //这句表示从哪来 回哪去  停留在当前路由
        next(false);
      }
    }
  },
  {
    path: '/trade',
    // name:'Trade',
    component:()=>import('@/pages/Trade'),
    meta: { show: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      if (from.path == '/shopCart') {
        next();
      } else {
        //这句表示从哪来 回哪去  停留在当前路由
        next(false);
      }
    }
  },
  {
    path: '/shopCart',
    name:'shopCart',
    component:()=>import('@/pages/ShopCart'),
    meta: {show:true}
  },
  {
    path: '/addcartsuccess',
    name:'addcartsuccess',
    component:()=>import('@/pages/AddCartSuccess'),
    meta: {show:true}
  },
  {
    path: '/detail/:skuid',
    component:()=>import('@/pages/Detail'),
    meta: {show:true}
  },
  {
    path: '/home',
    component: ()=>import('@/pages/Home'),
    meta: {show:true}
  },
  {
    path: '/search/:keyword?',
    component:()=>import('@/pages/Search'),
    meta: { show: true },
    name:"search"
  },
  {
    path: '/register',
    component:()=>import('@/pages/Register'),
    meta: {show:false}
  },
  {
    path: '/login',
    component:()=>import('@/pages/Login'),
    meta: {show:false}
  },
  {
    path: '/',
    redirect: "/home"
  }
]