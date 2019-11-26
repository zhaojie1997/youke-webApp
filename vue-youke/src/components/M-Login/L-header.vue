<template>
    <div class="back">
        <img src="../../assets/L-img/back.png"  @click="switchTo('/mine')">
        <p>登录</p>
    </div>
</template>

<script>
    export default {
        name: "L-header",
        methods: {
        switchTo(path){
            this.$router.replace(path)
        }
    }
    }
</script>

<style scoped>
    .back{
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
        text-align: center;
    }
    .back img{
        width: 7%;
    }
    .back p{
        font-size: 0.2rem;
        width: 100%;
    }
</style>