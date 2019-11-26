import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login/Login'
import Courses from '../views/My-courses/Courses'
import Z_payment from '../Z_wallet/Z_payment'
import Z_payment_Cashwithdrawal from '../Z_wallet/Z_payment_wallet/Z_payment_Cashwithdrawal/Z_payment_Cashwithdrawal'
import Mine from '../youke-mine/mine.vue'
import Miner from '../youke-mine/mine-upload.vue'
import Minerd from '../youke-mine/mine-login.vue'
import Setting from '../youke-mine/setting.vue'
import Person from '../youke-mine/person.vue'
import Reger from '../views/Reger/Reger'
import Order from '../views/Order/Order'
import Down from '../views/Down/Down'
import Xiangqing from '../views/Down/Xiangqing'
import cart from '../components/cart.vue'
import goodsdetail from '../components/goodsdetail.vue'
import Search from "../components/mx-youke-home/yk-home-search-page"
import ykHomeDetail from "../components/mx-youke-home/yk-home-detail"
import yk_Classification from "../views/yk_Classification"

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: '',
        redirect:"/home"

    },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/miner',
    component: Miner
  },
  {
    path: '/minerd',
    component: Minerd
  },
  {
    path: '/minerd/setting',
    component: Setting
  },
  {
    path: '/minerd/person',
    component: Person
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {path:'/Login',component:Login},
    {path:'/Courses',
        component:Courses,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {path:"/payment",component:Z_payment,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {path:"/Cashwithdrawal",component:Z_payment_Cashwithdrawal},
    {path:"/Reger",component:Reger},
    {path:"/Order",component:Order,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {path:"/Down",component:Down,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {path:"/Xiangqing",component:Xiangqing},
    {
        path: '/cart',
        name: 'cart',
        component: cart,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {
        path: '/gd',
        name: 'goodsdetail',
        component: goodsdetail
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path:'/detail',
        component:ykHomeDetail
    },
    {path:"/Classification",component:yk_Classification}
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
