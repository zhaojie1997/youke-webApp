<template>
    <div class="yk-home-two">
        <div class="two-title">
            <h3>{{data.moduleName}}</h3>
        </div>
        <div class="two-detail">
            <!--            {{data.lesson_list}}-->
            <yk-two-item :key="i" v-for="(n,i) in data.lessonList" :data="n"></yk-two-item>
        </div>
    </div>
</template>

<script>
    import ykTwoItem from "./yk-home-two-item"
    export default {
        name: "yk-home-module2",
        props:['data'],
        components:{
            ykTwoItem
        }
    }
</script>

<style scoped>
    .yk-home-two{
        width: 95%;
        margin: 0 auto;
    }
    .two-detail{
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .two-title h3{
        margin: 0.1rem auto;
    }
</style>