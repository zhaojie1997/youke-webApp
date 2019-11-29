<template>
    <div>
        <header>
            <!--<div class="head" @click="switchTo('/Login')">-->
                <!--<i class="iconfont">&#xe611;</i>-->
            <!--</div>-->
            <div class="circle" >
                <van-uploader :after-read="onRead" accept="image/*" multiple>
                    <img :src="head" ref="goodsImg" class="head-img"/>
                </van-uploader>
            </div>
            <div class="name" @click="gointo()">{{a}}</div>
            <div class="vip">
                <img src="../../assets/img/rank.png">
                <span>会员等级</span>
            </div>
        </header>
    </div>
</template>

<script>
export default{
    name:'head',
    props:['msg'],
    data(){
        return{
            a:'',
            head:require('../../assets/img/head.jpg'),
        }
    },
    methods: {
        //选择图片后执行
        onRead(file) {
            //console.log(file);
            //将原图片显示为选择的图片
            this.$refs.goodsImg.src = file.content;
            this.$axios({
                url:'http://47.92.132.161:8000/youke/auth/head_img/',
                method:'POST',
                data:{
                    "head":this.head,
                    "content":file.content,
                    // "token":localStorage.getItem('token')
                },
                headers: {'Content-Type': 'application/json'},
            }).then(res=>{
                // this.head =require(res.data.data.head)
                window.console.log(res.data.data.head)
            })
        },
        switchTo(path){
            if (localStorage.getItem("token") == null) {
                //自定义代码
                this.$router.replace(path)
            }
        },
        gointo(){
            if (localStorage.getItem("token") != null) {
                //自定义代码
                this.$router.push({path:'/mine/person'})
            }
            if (localStorage.getItem("token") == null) {
                //自定义代码
                this.$router.push({path:'/login'})
            }
        }
    },

    beforeMount(){
        let b=localStorage;
        if(b.token){
            this.a=this.msg
        }else{
            this.a='未登录'
        }
    }
}
</script>

<style scoped>
    .circle{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        background-color: #efefef;
        text-align: center;
        line-height: 0.8rem;
    }
    .circle img{
        width: 0.8rem;
        border-radius: 50%;
    }
    header{
        display: flex;
        justify-item: center;
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
        width: 1.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.16rem;
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