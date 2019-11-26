<template>
    <div class="yk-home-module">
        <div class="yk-home-list-item" :key="i" v-for="(n,i) in data" @click="goDetail(n.lessonId)">
                <img :src="n.lessonImg" alt="">
                <p class="item-name">{{n.lessonName}}</p>
                <p class="item-buy">{{n.buyAmount}}人已学</p>
                <p class="item-price" v-if="n.priceType!='免费'"><i class="item-type">{{n.priceType}}</i>￥<span>{{n.lessonPrice}}</span></p>
                <p v-else><span class="item-free">免费</span></p>
        </div>
    </div>
</template>

<script>
    import ykHomeModuleTwo from "./yk-home-module2"
    import ykHomeModuleOne from "./yk-home-module1"
    import ykHomeReco from "./yk-home-recommen"
    import Swiper from 'swiper'
    export default {
        name: "yk-home-module-item",
        props:['data'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            ykHomeReco,ykHomeModuleOne,ykHomeModuleTwo
        },
        data(){
            return{
               tag:0,
            }
        },
        mounted() {
            this.$bus.$on('module',(i)=>{
                this.tag = i
            })
            new Swiper ('.swp', {

            })
        },
        methods:{
            // http://47.92.132.161:8001/youke/lesson/detail?lessonId=1
            goDetail(sid){
                window.console.log(sid)
                // this.$axios.get('http://47.92.132.161:8001/youke/lesson/detail?lessonId='+sid)
                //     .then(res=>{
                //         window.console.log(res.data)
                //     })


                //跳转详情页路由，并传当前id
                this.$router.push('/gd?pid='+sid);


            }
        }
    }
</script>

<style scoped>
    .item-type{
        margin-right: 0.1rem;
    }
    .yk-home-module{
        width: 97%;
        /*height: 4rem;*/
        /*padding: 0.05rem;*/
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: white;
        margin: 0 auto;
    }
    .free-price{
        font-size: 0.12rem;
        color: #8C999F;
        margin-left: 0.1rem;
    }
    .yk-home-list-item{
        width: 48%;
        /*height: 3rem;*/
        background-color: white;
        margin-bottom: 0.1rem;
        border-radius: 0.05rem;
    }
    .yk-home-list-item img{
        width: 100%;
        display: block;
        border-radius: 0.05rem;
    }
    .item-free{
        display: inline-block;
        background-color:orangered;
        color: white;
        padding:0 0.1rem;
        border-radius: 0.1rem;
        font-size: 0.12rem;
    }
    .item-name{
        font-family: "Microsoft YaHei UI";
        font-size: 0.14rem;
        margin: 0.05rem 0;
        width: 1.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .item-buy{
        font-size: 0.12rem;
        color: #8C999F;
    }
    .item-price{
        margin: 0.05rem 0;
        color: orangered;
        font-size: 0.12rem;
        font-weight: 700;
    }
    /*.item-price span{*/
    /*    font-size: 0.14rem;*/
    /*}*/
</style>