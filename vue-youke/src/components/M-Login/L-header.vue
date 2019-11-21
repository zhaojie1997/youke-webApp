<template>
    <div class="back">
        <img src="../../assets/L-img/back.png" >
        <p>登录</p>
    </div>
</template>

<script>
    export default {
        name: "L-header",
    }
</script>

<style scoped>
    .back{
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
    }
    .back img{
        width: 7%;
    }
    .back p{
        font-size: 0.2rem;
        width: 51%;
    }
</style>