<template>
    <div class="yk-home-more">
        <div class="yk-more-prompt">
            <span>更多热门推荐</span>
        </div>
        <div class="yk-more-content">
                <yk-more-content-item :key="i" v-for="(n,i) in data" :data="n" @click.native="goDetail(n.lessonId)"></yk-more-content-item>
        </div>
    </div>
</template>

<script>
    import ykMoreContentItem from "./yk-more-content-item"

    export default {
        name: "yk-home-more",
        components:{
            ykMoreContentItem
        },
        props:['data'],
        methods:{
            goDetail(sid){
                // window.console.log(sid)
                this.$router.push('/gd?pid='+sid)
            }
        }

    }
</script>

<style scoped>
    .yk-more-content{
        width: 100%;
        background-image: url("../../assets/img/推荐 (2).png");
        background-repeat: no-repeat;
        background-size: 0.3rem;
        overflow: hidden;
    }
    .yk-more-prompt{
        width: 95%;
        margin: 0.3rem auto 0;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        /*background-color: green;*/
    }
    .yk-home-more{
        width: 100%;
        background-color: #FAFAFA;
    }
</style>