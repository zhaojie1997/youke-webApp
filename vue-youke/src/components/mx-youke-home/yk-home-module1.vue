<template>
    <div class="yk-home-one">
        <div class="one-title">
            <h3><span></span>IT互联网热门内容<span></span></h3>
        </div>
        <div class="one-detail">
<!--            {{data.lesson_list}}-->
            <yk-one-item :key="i" v-for="(n,i) in data.lesson_list" :data="n" :sid="i" :mid="mid"></yk-one-item>
        </div>
    </div>
</template>

<script>
    import ykOneItem from "./yk-home-one-item"
    export default {
        name: "yk-home-module1",
        props:['data','mid'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            ykOneItem
        },
    }
</script>

<style scoped>
    .yk-home-one{
        width: 95%;
        margin: 0 auto;
    }
    .one-detail{
        width: 100%;
        /*height: 3rem;*/
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .one-title{
        position: relative;
    }
    .one-title h3{
        margin: 0.2rem 0;
        text-align: center;
        font-weight: 500;
        color: grey;
    }
    .one-title h3 span{
        display: inline-block;
        width: 0.5rem;
        height: 0.1rem;
        background-image: url("../.././assets/img/titlebg.png");
        background-size: 0.3rem 0.2rem;
        background-position: 0.1rem -0.05rem;
        background-repeat: no-repeat;
    }
</style>