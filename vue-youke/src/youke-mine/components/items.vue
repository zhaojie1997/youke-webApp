<template>
    <div class="items">
        <div @click="getpush()">
            <div>
                <i class="iconfont one" >&#xe649;</i>
                <span>钱包</span>
            </div>
            <i class="iconfont">&#xe62d;</i>
        </div>
        <div>
            <div>
                <i class="iconfont two">&#xe617;</i>
                <span>积分</span>
            </div>
            <i class="iconfont">&#xe62d;</i>
        </div>
        <div class="advice">
            <div>
                <i class="iconfont three">&#xe600;</i>
                <span>反馈建议</span>
            </div>
            <i class="iconfont">&#xe62d;</i>
        </div>
        <div class="set" @click="switchTo('/minerd/setting')">
            <div>
                <i class="iconfont four">&#xe64e;</i>
                <span>设置</span>
            </div>
            <i class="iconfont">&#xe62d;</i>
        </div>
    </div>
</template>

<script>
export default{
    methods: {
        switchTo(path){
            this.$router.replace(path)
        },
        getpush(){
            if (localStorage.getItem("token") != null) {
                //自定义代码
                this.$router.push({path:'/payment'})
            }
        }

    }
}
</script>

<style scoped>
    .items{
        font-size: 0.16rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        margin-top: 0.4rem;
        width: 100%;
        height: 0.81rem;
        line-height: 0.4rem;
    }
    .items>div{
        padding-right: 0.06rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        height: 0.4rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #e0e0e0;
    }
    span{
        margin-left: 0.1rem;
    }
    .iconfont{
        font-size: 0.24rem;
    }
    .one{
        color: #D81E06;
    }
    .two{
        color: #FEB633;
    }
    .three{
        color: #ff6700;
    }
    .four{
        color: #2FC0FF;
    }
    .advice{
        margin-top:0.2rem;
    }
    .set{
        margin-top:0.2rem;
    }
</style>