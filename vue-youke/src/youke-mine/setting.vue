<template>
    <div class="set">
        <div class="head">
            <i class="iconfont" @click="switched('/mine')">&#xe62d;</i>
            <span>设置</span>
        </div>
        <div class="items">
            <div @click="switchda('/mine/person')">
                <span>修改个人信息</span>
                <i class="iconfont">&#xe62d;</i>
            </div>
            <div>
                <span>修改密码</span>
                <i class="iconfont">&#xe62d;</i>
            </div>
            <div>
                <span>解绑</span>
                <span class="mar"></span>
                <i class="iconfont">&#xe62d;</i>
            </div>
             <div>
                <span>优先下载路径</span>
                <span class="mar">手机存储</span>
            </div>
             <div>
                <span>优先下载清晰度</span>
                <span class="mar">超清</span>
            </div>
             <div class="dis">
                <span>软件升级</span>
                <i class="iconfont">&#xe62d;</i>
            </div>
             <div @click="settinga('/settinga')">
                <span >关于</span>
                <i class="iconfont">&#xe62d;</i>
            </div>
            <div class="dis" @click="change">
                <span>清除缓存</span>
                <span class="mar">{{ num }}KB</span>
            </div>
        </div>

        <div class="foot" @click="switchTo('/mine')">
            <p>退出登录</p>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            num: "87.68"
        }
    },
    methods: {
        settinga(path){
            // this.$router.push({name:'/settinga'})
            this.$router.replace(path)
        },
        switchTo(path){
            this.$router.replace(path)
            window.localStorage.removeItem('token');
        },
        switched(path){
            this.$router.replace(path)
        },
        switchda(path){
            this.$router.replace(path)
        },
        change(){
            this.num = "0"
        }
    }
}
</script>

<style scoped>
    @import '../assets/css/common.css';
    @import '../assets/css/iconfont.css';
    .set{
        font-size: 0.16rem;
    }
    .head{
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #efefef;
    }
    .head i{
        transform: rotateZ(180deg);
        font-size: 0.24rem;
        float: left;
        margin-left: 0.06rem;
    }
    .head span{
        margin-left: 1.5rem;
    }
    .items{
        margin-top: 0.16rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .items div{
        height: 0.4rem;
        line-height: 0.4rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #e0e0e0;
    }
    .items .iconfont{
        padding-right: 0.1rem;
    }
    .iconfont{
        font-size: 0.24rem;
    }
    .foot{
        margin-top: 1rem;
        color: rgb(51, 164, 209);
        display: flex;
        justify-content: center;
    }
    .foot p{
        width: 40%;
        height: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.01rem solid yellow;
        background-color: #ee6700;
        color: white;
        border-radius: 0.2rem;
    }
    .mar{
        margin-right: 0.2rem;
    }
    .dis{
        margin-top: 0.2rem;
    }
</style>>