<template>
    <div>
        <div id="btn"  :class="isFixed?'fix':''">
<!--            模块名循环-->
            <span @click="goOne(i)" :key="i" v-for="(n,i) in data">{{n.lessonType}}</span>
        </div>
        <div class="swiper-container" ref="s2">
            <div class="swiper-wrapper" id="s2">
                <div class="swiper-slide" data-hash="slide1" :key="i" v-for="(n,i) in data">
<!--                    每一个模块内容的循环-->
                    <div>
                        <p style="margin: 0.15rem auto" class="yk-home-module-title"><span></span>{{n.lessonType}}<span></span></p>
                    </div>
                    <yk-home-module-item :data="n.LessonList"></yk-home-module-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import ykHomeModuleItem from "./yk-home-module-item"
    export default {
        name: "yk-home-module",
        props:['data'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            ykHomeModuleItem
        },
        data(){
          return {
              more:true,
              isFixed: false,
              tag:'',
              op2: {
                  female: true
              },
              mySwp2:{}
          }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
            this.initSwiper()
        },
        methods:{
            initSwiper(){
               this.mySwp2 = new Swiper(this.$refs.s2,this.op2)
            },
            goOne(i){
                this.mySwp2.slideTo(i, 500, false);//切换到第一个slide，速度为1秒
                // this.$emit('cli',index)
            },
            handleScroll () {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    if(scrollTop > 267){
                        this.isFixed=true;
                    }else{
                        this.isFixed=false;
                    }
            },
            searchMore(){
                //点击之后加载更多消失，
                this.more = false;
                //新内容显示

            }
        },

    }
</script>

<style scoped>
    .yk-home-more{
        width: 100%;
        height: 4rem;
        background-color: pink;
    }
    .click-more{
        text-align: center;
        margin: 0.2rem 0;
    }
    .yk-home-module-title{
        text-align: center;
    }
    .yk-home-module-title span{
        display: inline-block;
        width: 0.4rem;
        height: 0.1rem;
        background-image: url("../../assets/img/guessTitle-icon.png");
        background-position: 0rem 0rem;
        background-repeat: no-repeat;
        background-size: 0.4rem;
    }
    .yk-home-module-title span:nth-child(2){
        transform: rotate3d(0,0,1,180deg);
        margin-left: 0.1rem;
    }
    .yk-home-module-title span:nth-child(1){
        margin-right: 0.1rem;
    }
    #s2 div{
        /*width: 97%;*/
        /*!*height: 4rem;*!*/
        /*!*padding: 0.05rem;*!*/
        /*box-sizing: border-box;*/
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*justify-content: space-between;*/
        /*background-color: white;*/
        /*margin: 0 auto;*/
    }
    #btn{
        width: 100%;
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling:touch;
        background-color: #eee;
        border-bottom: 0.01rem solid #8C999F;
    }
    #btn span{
        display: inline-block;
        width: 1rem;
        height: 0.5rem;
        /*border: 0.01rem solid darkseagreen;*/
        text-align: center;
        line-height: 0.5rem;
        border-right: 0.01rem solid white;
    }
    .yk-module{
        width: 100%;
    }
    .module-name{
        width: 100%;
        height: 0.5rem;
        display: flex;
        background-color: white;
        border-bottom: 0.01rem solid lightgray;

    }
    .module-name a{
        border-right: 0.01rem solid gainsboro;
    }
    .module-name a{
        flex: 1;
        text-align: center;
        line-height: 0.5rem;
    }
    .fix{
        position: fixed;
        top: 0rem;
        z-index: 10;
    }
    .clicking{
        background-color: darkseagreen;
        color: white;
    }
</style>