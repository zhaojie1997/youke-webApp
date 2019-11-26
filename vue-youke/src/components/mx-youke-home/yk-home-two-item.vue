<template>
    <div class="yk-home-two-item">
        <img :src="data.class_img" alt="">
        <p>{{data.class_name}}</p>
        <p>已购买人数:{{data.class_watch}}</p>
    </div>
</template>

<script>
    export default {
        name: "yk-home-two-item",
        props:['data']
    }
</script>

<style scoped>
    .yk-home-two-item{
        width: 47%;
    }
    .yk-home-two-item img{
        width: 100%;
        display: block;
    }
</style>