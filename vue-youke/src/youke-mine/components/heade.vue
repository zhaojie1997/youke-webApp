<template>
    <div>
        <header>
            <div class="head">
                <div>上传<br>头像</div>
            </div>
            <div class="name">{{ nickname }}</div>
            <div class="vip">
                <img src="../../assets/img/rank.png">
                <span>{{ rank }}</span>
            </div>
        </header>
    </div>
</template>

<script>
export default{
    data(){
        return{
            nickname: "youke",
            rank: "普通会员"
        }
    },
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
        padding-top: 0.16rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #efefef;
        text-align: center;
        float: left;
    }
    .head div{
        color: #717171;
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
        width: 1.2rem;
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