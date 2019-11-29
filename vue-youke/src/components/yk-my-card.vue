<template>
<!--
    只有登录成功才可以查看银行卡信息，没有则提示登录，
-->

    <div class="yk-my-card-info">
        <div class="yk-card-top">
            <!--<span class="yk-card-back" @click="goBack"></span>-->
            <span>银行卡详情</span>
        </div>
        <div class="tk-my-card-logo" :key="i" v-for="(n,i) in cardSta">
            <div class="card-logo">
                <img :src="n.card_logo" alt="">
            </div>
            <div class="card-name">
                <p>{{n.card_id.slice(0,6)+'*********'+n.card_id.slice(14,)}}</p>
                <p>{{n.card_name}}</p>
            </div>
            <p class="card-type">类型:{{n.card_type}}</p>
        </div>
        <!--<div  class="yk-card-prompt" v-else>-->
        <!--未绑定任何银行卡-->
        <!--</div>-->

    </div>
</template>

<script>
    export default {
        name: "yk-my-card",
        data(){
          return{
              cardSta:[],
              token:localStorage.getItem('token')//在本地获取token，然后发送到后端
          }
        },
        methods:{
            getCardInfo(){
                this.$axios.get('http://47.92.132.161:8000/youke/auth/bank/?token='+this.token)
                .then(res=>{
                        this.cardSta = res.data.data.data
                        window.console.log(this.cardSta)
                    })
            },
        },
        mounted() {
            this.getCardInfo()
        }

    }
</script>

<style scoped>
    .yk-card-prompt{
        font-size: 0.16rem;
        text-align: center;
        line-height: 2rem;
    }
    .card-type{
        position: absolute;
        bottom: 0.1rem;
        right: 0.7rem;
    }
    .card-name{
        font-weight: 700;
        font-size: 0.16rem;
        text-align: center;
    }
    .card-logo{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
    }
    .card-logo img{
        width: 100%;
    }
    .tk-my-card-logo{
        width: 90%;
        height: 1.5rem;
        background: linear-gradient(lightgray, dimgrey);
        margin: 0.5rem auto 0;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0.1rem 0 0 0.1rem;
        position: relative;
    }
    .yk-my-card-info{
        font-size: 0.14rem;
    }
    .yk-card-top{
        width: 100%;
        height: 0.5rem;
        background-color: #F8F8F8;
        text-align: center;
        line-height: 0.5rem;
        position: relative;
    }
    .yk-card-back{
        display: inline-block;
        position: absolute;
        width: 0.15rem;
        height: 0.15rem;
        border-left: 0.01rem solid #9A9A9A;
        border-bottom: 0.01rem solid #9A9A9A;
        transform: rotate3d(0,0,1,45deg);
        left: 0.2rem;
        top: 0.15rem;
    }
    .yk-card-top span:nth-child(2){
        font-size: 0.16rem;
        font-weight: 500;
    }
</style>