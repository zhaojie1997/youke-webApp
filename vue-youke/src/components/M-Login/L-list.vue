<template>
    <div>
        <div class="iamg">
            <img src="../../assets/L-img/Logo.png" alt="">
        </div>
        <div class="menu">
            <ul class="login_ul">
                <li :class="{on: !loginWay}"  @click.prevent="loginWay=false"><a>短信登录</a></li>
                <li :class="{on: loginWay}"  @click.prevent="loginWay=true"><a>密码登录</a></li>
            </ul>
            <L-note v-if="loginWay==false"></L-note>
            <L-password v-if="loginWay==true"></L-password>
            <div class="login_deal">
                <p>登录即代表你同意<span @click="gotoback()">用户协议</span>和<span>隐私政策</span></p>
                <p>遇到问题?<span>查看帮助</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import note from './L-note'
    import password from './L-password'
    export default {
        name: "L-list",
        components:{
            'L-note':note,
            'L-password':password
        },
        data () {
            return {
                loginWay: true, // true代表短信登陆, false代表密码
                // computeTime: 0, // 计时的时间
                // showPwd: false, // 是否显示密码
                // phone: '', // 手机号
                // code:'', // 短信验证码
                // name: '', // 用户名
                // pwd: '', // 密码
                // captcha: '', // 图形验证码
                // alertText: '', // 提示文本
                // alertShow: false, // 是否显示警告框
            }
        },
        methods:{
            gotoback(){
                this.$router.push({path:'/xieyi'})
            }
        }
    }
</script>

<style scoped>
.iamg{
display: flex;
justify-content: center;
margin-top: 0.5rem;
}
.iamg img{
width: 40%;
}
ul{
font-size: 0.14rem;
display: flex;
justify-content: center;
margin-top: 0.2rem;
}
.login_deal{
font-size: 0.12rem;
text-align: center;
}
.login_deal p{
color: #999;
margin-top: 0.1rem;
}
.login_deal span{
color: #536ebb;
}
.login_ul >li{
    font-size: 0.14rem;
    margin: 0 0.2rem;
    height: 0.25rem;
}
.on{
color: rgb(244,160,27);
font-weight :700;
border-bottom :0.04rem solid rgb(244,160,27);
}
</style>