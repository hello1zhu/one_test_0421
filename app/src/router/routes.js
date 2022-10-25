/*
 * @Author: your name
 * @Date: 2022-03-08 11:13:50
 * @LastEditTime: 2022-03-13 13:44:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\router\routes.js
 */
//引入一级路由


import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

//引入二级路由
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";
//配置路由信息
export default [
    {
        path: "/center",
        component: Center,
        meta: { show: true },
        //二级路由
        children: [
            {
                path: "myorder",
                component: MyOrder,
            },
            {
                path: "grouporder",
                component: GroupOrder,
            }, {
                path: "/center",
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == "/trade") {
                next();
            } else {
                next(false);
                //中断当前导航，从哪里来会哪里去       
            }
        }
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == "/shopcart") {
                next();
            } else {
                next(false);
                //中断当前导航，从哪里来会哪里去       
            }
        }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuId?",
        component: () => import("@/pages/Detail"),
        meta: { show: true }
    },
    {
        path: "/home",
        component: () => import("@/pages/Home"),
        meta: { show: true }
    },
    {
        path: "/search/:keyword?",
        component: () => import('@/pages/Search'),
        meta: { show: true },
        name: "search",
        //函数的写法才是重要的
    },
    {
        path: "/login",
        component: () => import('@/pages/Login'),
        meta: { show: false }

    },
    {
        path: "/register",
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    {
        path: '*',
        redirect: "/home"
    },

]