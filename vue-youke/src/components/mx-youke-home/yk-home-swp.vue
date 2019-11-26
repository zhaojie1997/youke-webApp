<template>
    <div class="swiper-container" ref="s1" v-if="ykHomeSwp">
        <div class="swiper-wrapper">
            <div  :key="i" class="swiper-slide" v-for="(n,i) in data">
                <img :src="n.lessonImg" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import api from "../../api/mx-youke-apis/api";
    import Swiper from "swiper"
    export default {
        name: "yk-home-swp",
        props:['data'],
        updated(){
            this._initswp()
        },
        data(){
            return{
                ykHomeSwp:[]
            }
        },
        methods:{
            _initswp(){
                new Swiper (this.$refs.s1, {
                    loop: true, // 循环模式选项
                    autoplay: {
                        disableOnInteraction: false
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable:true
                    }

                })
            },
            //轮播图图片
            async _ykHomeSwpData(){
                this.ykHomeSwp = await api.ykHomeData();
            }
        },
        beforeMount() {
            this._ykHomeSwpData()
        }
    }
</script>

<style scoped>
    @import "../../../node_modules/swiper/css/swiper.css";
    .swiper-container{
        width: 90%;
        height: 1.5rem;
        margin: 0.2rem auto 0;
        border-radius: 0.1rem;
    }
    .swiper-wrapper{
        width: 100%;
    }
    .swiper-slide{
        width: 100%;
    }
    .swiper-slide img{
        width: 100%;
        height: 1.5rem;
    }
</style>