<template>
    <div class="yk-home-top">
        <div class="yk-home-top-search">
<!--            <img src="../../assets/img/logon.png" alt="" class="yk-home-logo">-->
            <a href="/search"><input type="text" placeholder="搜索课程"></a>
        </div>
        <yk-home-swp :data="data"></yk-home-swp>
<!--        模块切换-->
    </div>
</template>

<script>
    import ykHomeSwp from "./yk-home-swp"

    export default {
        name: "youke-home-top",
        props:['data'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            ykHomeSwp
        },

    }
</script>

<style scoped>
    .yk-home-logo{
        width: 0.7rem;
        position: absolute;
    }
    .yk-home-top{
        width: 100%;
        height: 2.5rem;
        background-image: url("../../assets/img/u=2040981463,3113011841&fm=26&gp=0.jpg");
        background-repeat: no-repeat;
        overflow: hidden;
        position: relative;
    }
    .yk-home-top:before{
        width: 100%;
        height: 2.5rem;
        background-color: rgba(0,0,0,0.2);
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }
    .yk-home-top-search{
        width: 90%;
        height: 0.4rem;
        margin: 0.2rem auto 0;
    }
    .yk-home-top-search input{
        /*width: 100%;*/
        /*height: 100%;*/
        width: 90%;
        height: 0.4rem;
        border: none;
        outline: none;
        border-radius: 0.1rem;
        background-image: url("../../assets/img/157105701015391606.png");
        background-repeat: no-repeat;
        background-position:0.1rem 0.06rem;
        background-size: 0.25rem ;
        box-sizing: border-box;
        padding-left: 0.4rem;
        position: absolute;
        right: 0.2rem;
    }
</style>