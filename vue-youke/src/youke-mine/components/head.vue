<template>
    <div>
        <header>
            <div class="head" @click="switchTo('/Login')">
                <i class="iconfont">&#xe611;</i>
            </div>
            <div class="name">未登录</div>
            <div class="vip">
                <img src="../../assets/img/rank.png">
                <span>会员等级</span>
            </div>
        </header>
    </div>
</template>

<script>
export default{
    methods: {
        switchTo(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style scoped>
    header{
        margin-top: 0.2rem;
        width: 100%;
        height: 1rem;
        padding: 0.1rem 0.2rem;
        box-sizing: border-box;
    }
    .head{
        font-size: 0.16rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #efefef;
        line-height: 0.8rem;
        text-align: center;
        float: left;
    }
    .iconfont{
        font-size: 0.48rem;
    }
    .name{
        width: 1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.2rem;
        float: left;
        text-align: left;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .vip{
        width: 1rem;
        float: left;
        line-height: 0.8rem;
    }
     .vip img{
        vertical-align: -0.04rem;
        width: 0.24rem;
    }
     .vip span{
        padding-left: 0.06rem;
    }
</style>