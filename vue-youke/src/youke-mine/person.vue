<template>
    <div class="person">
        <div class="head">
            <i class="iconfont" @click="switchTo('/minerd/setting')">&#xe62d;</i>
            <span>个人信息</span>
        </div> 
        <div class="circle">
            <img :src="head">
        </div>
        <div class="item">
            <div>昵称<span>{{ nickname }}</span></div>
            <div>性别<span>{{ sex }}</span></div>
            <div>年龄<span>{{ age }}</span></div>
            <div>职业<span>{{ career }}</span></div>
            <div>真实姓名<span>{{ name }}</span></div>
            <div>身份证号<span>{{ idnumber }}</span></div>
            <div>兴趣爱好<span>{{ hobby }}</span></div>
            <div>个性签名<span>{{ signature }}</span></div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            head: require('../assets/img/head.jpg'),
            nickname: "youke",
            sex: "女",
            age: "18",
            career: "学生",
            name: "Youke",
            idnumber: "610222********6789",
            hobby: "学习、打羽毛球",
            signature: "最爱柚课",
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
    .person{
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
        margin-left: 1.2rem;
    }
    .circle{
        margin: 0.1rem 0.2rem;
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
    .item{
        padding-left: 0.2rem;
    }
    .item div{
        text-align: left;
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: 0.01rem solid #e0e0e0;
    }
    .item span{
        margin-left: 0.3rem;
    }
</style>