import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import uploader from 'vue-simple-uploader'
import axios from 'axios'
import Vant from '../node_modules/vant';
import 'vant/lib/index.css';
import 'swiper/css/swiper.css'
import "swiper/js/swiper"
import { loading } from "vant"
let bus = new Vue()
Vue.prototype.$bus = bus
Vue.prototype.$axios = axios
Vue.prototype.$eventBus = new Vue()
Vue.config.productionTip = false
Vue.use(uploader)
Vue.use(ElementUI)
Vue.use(loading)
Vue.use(Vant);
Vue.prototype.HOST = 'http://47.92.132.161:8000'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' // 引入样式
import 'vue-video-player/src/custom-theme.css' // 引入样式
import 'videojs-flash'
Vue.use(VueVideoPlayer)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next)=>{

    let token = localStorage.getItem('token')

    next()

    if (to.meta.requireAuth) {//如果需要跳转 ，往下走（1）
        if (token) {//判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
            if (to.path === '/cart') {//判断下一个路由是否为要验证的路由（3）
                next();// 如果是直接跳到首页，
            } else {//如果该路由不需要验证，那么直接往后走
                next();
            }
        } else {
            // eslint-disable-next-line no-console
            //alert('请登录');//如果没有登陆过，或者token 过期， 那么跳转到登录页
            next('/login');
        }
    } else {                           //不需要跳转，直接往下走
        next();
    }

})