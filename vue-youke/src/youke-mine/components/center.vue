<template>
    <div class="center">
        <div @click="switchTo('/courses')">
            <i class="iconfont">&#xe621;</i>
            <p>我的上传</p>
        </div>
        <div @click="goback()">
            <i class="iconfont">&#xe607;</i>
            <p>订单管理</p>
        </div>
        <div @click="goto()">
            <i class="iconfont">&#xe725;</i>
            <p>下载管理</p>
        </div>
        <div>
            <i class="iconfont">&#xe62f;</i>
            <p>最近浏览</p>
        </div>
    </div>
</template>

<script>
export default{
    methods: {
        switchTo(path){
            if (localStorage.getItem("token") != null) {
                //自定义代码
                this.$router.replace(path)
            }
        },
        goback(){
            if (localStorage.getItem("token") != null) {
                //自定义代码
                this.$router.push({path:'/Order'})
            }
        },
        goto(){
            if (localStorage.getItem("token") != null) {
                //自定义代码
                this.$router.push({path:'/Down'})
            }
        }
    }
}
</script>

<style scoped>
    .center{
        width: 100%;
        height: 0.8rem;
        font-size: 0.16rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding-top: 0.1rem;
        box-sizing: border-box;
        border-top: 0.02rem solid #efefef;
        border-bottom: 0.02rem solid #efefef;
    }
    .iconfont{
        font-size: 0.24rem;
    }
    p{
        font-size: 0.14rem;
        margin-top: 0.06rem;
    }
</style>