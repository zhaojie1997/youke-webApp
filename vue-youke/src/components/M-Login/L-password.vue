<template>
    <form @submit.prevent="plogin">
        <section class="login_account">
            <input type="text"  placeholder="手机号/用户名" v-model="name">
        </section>
        <section class="login_pwd">
            <input type="password"  placeholder="密码" v-if="showPwd == false"  v-model="pwd">
            <input type="text"  placeholder="密码" v-if="showPwd == true"  v-model="pwd">
            <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                <div class="switch_circle" :class="{right: showPwd}"></div>
                <span class="switch_text">{{showPwd ? '显示' : '...'}}</span>
            </div>
        </section>
        <section class="login_verify">
            <input type="text"  placeholder="验证码" v-model="captcha">
           <div class="login-code" @click="refreshCode">
            <L-Sidentify :identifyCode="identifyCode" ></L-Sidentify>
           </div>
        </section>
        <section class="login_link">
            <p>温馨提示:未注册柚课App账号,请先点击进入注册页面进行注册  </p>
            <a @click="goback()">点击注册</a>
        </section>
        <button class="login_btn" @click="TipDialog">点击登录</button>
    </form>
</template>

<script>
    import login from '../../api/login'
    import Sidentify from './L-Sidentify'
    export default {
        name: "L-password",
        components:{
            'L-Sidentify':Sidentify,
        },
        data(){
            return{
                showPwd:false, //是否显示密码
                name: '', // 用户名
                pwd: '', // 密码
                captcha: '', //图像验证码
                identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
                identifyCode: '',
                data:'',
                flag:'',
                // rules: {
                //     username: [
                //         { required: true, message: "请输入用户名", trigger: "blur" }
                //     ],
                //     password: [{ required: true, message: "请输入密码", trigger: "blur" }],
                //     code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
                // }
            }
        },
        methods:{
            //验证码
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            goback(){
                this.$router.push({path:'/Reger'})
            },
            refreshCode() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                        ];
                }
            },
            async Home(){
                this.data= await login.xixi()
            },
           plogin(){
                //表单验证
              this.$dialog.alert({
                  // title:'标题呀',
                  message:this.msg
              }).then(()=>{

              })
              // if(this.name != this.data.name && this.name != this.data.phone){
              //       //用户必须指定
              //       return
              //   }
              // else if(this.captcha!= this.identifyCode){
              //     //验证码必须指定
              //     return
              // }
              //
              // else if(this.pwd != this.data.pwd){
              //       //密码必须指定
              //       return
              //   }
          },
          async  TipDialog(){

              if(this.captcha != this.identifyCode){
                  this.flag = false
              }else if(this.captcha == this.identifyCode){
                  this.flag = true
              }

              await this.$axios.post(this.HOST+'/youke/auth/login/',{'phone':this.phone,'pwd':this.pwd,'name':this.name,"flag":this.flag})
                    .then(res=>{
                        window.console.log(res.data)
                        if(res.data.code==200){
                            this.msg = res.data.data.msg
                            this.$router.push({path:'/mine'})
                            // Token
                            window.localStorage.setItem('token', res.data.data.token)

                        }else{
                            this.msg = res.data.msg
                        }
                    })
              this.$dialog.alert({
                  // title:'标题呀',
                  message:this.msg
              }).then(()=>{

              })




              if(this.name==""){
                  //手机号不正确
                  this.$dialog.alert({
                      // title:'标题呀',
                      message:'用户名不能为空'
                  }).then(()=>{

                  })
              }

              else if(this.pwd =="") {

                  this.$dialog.alert({
                      // title:'标题呀',
                      message:'密码不能为空'
                  }).then(()=>{
                      window.console.log('点击了确认')
                  })
              }
              else if(this.captcha != this.identifyCode){
                 this.$dialog.alert({
                      message:"验证码不正确"
                  }).then(()=>{

                  })
              }


          }
        },
        created() {
            //初始化验证码
            this.refreshCode();
        },
        mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        beforeMount(){
            this.Home()
        }
    }
</script>

<style scoped>
    form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 0.2rem;
    }

    form input{
        width: 100%;
        height: 100%;
        padding-left: 0.1rem;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: 0;
        font: 400 0.14rem Arial;
    }
    .login_link{
        font-size: 0.12rem;
        width: 80%;
        line-height: 0.2rem;
        color: #999;
        margin-top: 0.1rem;
        display: flex;
        flex-wrap: wrap;
    }
    .login_link a{
        display: flex;
        width: 100%;
        position: relative;
        top: -30%;
        justify-content: flex-end;
        color: #536ebb;

    }
    .login_btn{
        width: 80%;
        height: 0.5rem;
        border-radius: 0.05rem;
        background: #4cd96f;
        color: #fff;
        display: block;
        font-size: 0.16rem;
        line-height: 0.5rem;
        border: 0;
        outline:none;
    }
    .login_account{
        width: 80%;
        height: 0.48rem;
        font-size: 14px;
        background: #fff;
    }
    .login_verify{
        width: 80%;
        margin-top: 0.2rem;
        height: 0.48rem;
        font-size: 14px;
        background: #fff;
    }
    .login_pwd{
        width: 80%;
        margin-top: 0.2rem;
        height: 0.48rem;
        font-size: 14px;
        background: #fff;
    }
    .login_forget{
        font-size: 0.12rem;
        width: 80%;
        display: flex;
        justify-content: flex-end;
        margin-top: 0.05rem;
    }
    .login_forget a{
        color: #536ebb;
    }
    .switch_button{
        font-size: 0.12rem;
        border: 0.01rem solid #ddd;
        border-radius: 0.08rem;
        padding: 0 0.06rem;
        width: 0.3rem;
        height: 0.16rem;
        line-height: 0.16rem;
        color: #fff;
        position: relative;
        top: -42%;
        right: -2.5rem;
        transform :translateY(-50%);
        transition: background-color.3s,border-color .3s;
    }
    .off{
        background-color: #fff;
    }
    .swith_text{
        float: right;
        color: #ddd;
    }
    .on{
        background-color: #02a774;
    }
    .switch_circle{
        position: absolute;
        top: -0.01rem;
        left: -0.01rem;
        width: 0.16rem;
        height: 0.16rem;
        border: 0.01rem solid #ddd;
        border-radius :50%;
        background: #fff;
        box-shadow :0 0.02rem 0.04rem 0 rgba(0,0,0,.1);
        transition: transform .3s;
    }
    .right{
        transform: translateX(30px)
    }
    .login-code{
        width: 1.12rem;
        position: relative;
        top: -43%;
        right: -2.1rem;
        transform :translateY(-50%);
    }


</style>