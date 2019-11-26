<template>
    <div class="yk-home-one-item" @click="detail(sid,mid)">
        <img :src="data.lessionImg" alt="">
        <p>{{data.lessionName}}</p>
    </div>
</template>

<script>
    export default {
        name: "yk-home-one-item",
        props:['data','sid','mid'],
        methods:{
            detail(sid,mid){
                this.$router.push('/detail?sid='+sid+'&mid='+mid)
                // alert(sid+mid)
            }
        }
    }
</script>

<style scoped>
    .yk-home-one-item{
        width: 48%;
        margin-bottom: 0.1rem;
    }
    .yk-home-one-item img{
        width: 100%;
        display: block;
    }
</style>