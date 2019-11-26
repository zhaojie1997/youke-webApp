<template>
    <form @submit.prevent="login" style="    display: grid;">
        <div style="    background: #FF9800;
    height: 5px;
    width: 60px;
    margin-top: -7px;
    margin-left: 90px;
    border: 3px;"></div>
        <input type="tel" class="phone" placeholder="手机号" v-model="phone">
        <input class="phone" type="number" placeholder="验证码" v-model="code">
        <button class="close_tel2" v-show="!show" > 重新获取({{count}}s)</button>
        <button class="close_tel" v-show="show" @click.prevent="getCode">获取验证码</button>
        <input type="password" class="phone" placeholder="密码" v-model="pwd">

        <button class="subLogin" @click="submit" :disabled="!isagree">注册</button>
        <div class="loginf_deal">
          <label for="agree">
            <input type="checkbox" id="agree" v-model="isagree">注册即代表你同意<span>用户协议</span>和<span>隐私政策</span>
          </label>
            <!--<p></p>-->
            <a @click="tiaozhuan" class="infoo">已有账号请直接登录</a>
        </div>
    </form>
</template>

<script>
    import { Dialog } from 'vant';
    // import number from '../../api/number'
    // import numbersent from '../../api/numbersent'
    export default {
        components: {
            [Dialog.name]:Dialog,

        },

        name: 'Rtele',
        data() {
            return {

              isagree:false,
                show: true,
                count: '',
                timer: null,
                phone:'', //手机号
                computeTime:0,// 计时的时间
                code:'', //短信验证码
                pwd:'', //密码
                data:'',
            }
        },
        methods: {


          // async Homer(){
          //   this.data= await number.dahuang(),
          //     window.console.log(this.data)
          // },


            tiaozhuan(){
                this.$router.push({path:'/Order'})
            },
          async  getCode() {
                const TIME_COUNT = 30
                if (!this.timer) {
                    this.count = TIME_COUNT
                    this.show = false
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--
                        } else {
                            this.show = true
                            clearInterval(this.timer)
                            this.timer = null
                        }
                    }, 1000)
                  this.$axios.post('http://47.92.132.161:8000/youke/auth/code/?phone='+this.phone)
                    .then(res=>{
                      window.console.log(res.data)
                      this.msg = res.data.msg
                    })



                  // this.msg = await numbersent.fun1({
                  //   "phone": "this.phone"
                  // });
                  //
                  //
                  //
                  //
                  // window.console.log(this.msg)



                }
                if(this.phone==""){

            this.$dialog.alert({
                    // title:'标题呀',
                    message:'请输入手机号'
                  }).then(()=>{
                    window.console.log('点击了确认')
                  })
                  return
                }

            },
            async login(){

              await this.$axios.post(this.HOST+'/youke/auth/register/',{'phone':this.phone,'code':this.code,'pwd':this.pwd})
                .then(res=>{
                  window.console.log(res.data)
                  window.console.log(this.phone)
                  if(res.data.code ===200){
                    this.msg = res.data.data.msg
                      this.$router.push({path:'/login'})
                  }else (this.msg = res.data.msg)
                })



              if(!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.phone)){
                    //手机号不正确
                    return
                } else if(!/^\d{6}$/.test(this.code)) {
                    //验证码必须是6位数字
                    this.$dialog.alert({
                        // title:'标题呀',
                        message:'请检查验证码'
                    }).then(()=>{
                        window.console.log('点击了确认')
                    })
                    return
                }
                // else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.pwd)) {
                //
                //
                //     this.$dialog.alert({
                //         // title:'标题呀',
                //         message:'密码至少包含 数字和英文，长度6-20'
                //     }).then(()=>{
                //         window.console.log('点击了确认')
                //     })
                //     return
                // }
                this.$dialog.alert({
                    // title:'标题呀',
                    message:this.msg
                }).then(()=>{
                    window.console.log('点击了确认')
                })

            },




            async submit(){
                // login(){
                //表单验证
                if(!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.phone)){
                    //手机号不正确
                    this.$dialog.alert({
                        // title:'标题呀',
                        message:'手机号不正确'
                    }).then(()=>{
                        window.console.log('点击了确认')
                    })
                    return
                }
                else if(!/^\d{6}$/.test(this.code)) {
                    //验证码必须是6位数字
                    this.$dialog.alert({
                        // title:'标题呀',
                        message:'请检查验证码'
                    }).then(()=>{
                        window.console.log('点击了确认')
                    })
                    return
                }
                else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.pwd)) {

                    this.$dialog.alert({
                        // title:'标题呀',
                        message:'密码至少包含 数字和英文，长度6-20'
                    }).then(()=>{
                        window.console.log('点击了确认')
                    })
                    return
                }
              // this.$axios.post(this.HOST+'/youke/auth/register/',{'phone':this.phone,'code':this.code,'pwd':this.pwd})
              //   .then(res=>{
              //     window.console.log(res.data)
              //     window.console.log(this.phone)
              //     this.msg = res.data.msg
              //   })

            }
        },
      // beforeMount(){
      //   this.Homer()
      // },

    }
</script>


<style scoped>
    * {
        margin: 0;
        padding: 0;
        margin-top: 20px;
    }

    .close_tel {
        font-size: 12px;
        width: 100px;
        height: 23px;
        line-height: 25px;
        border-radius: 5px;
        background-color: #FF9800;
        color: white;
        position: absolute;
        right: 20%;
        top: 247px;
        outline: none;
        border: 0;
        font-weight: 400;
        cursor: pointer;
    }

    .infoo {
        color: #536ebb;
        letter-spacing: 0.2px;
        font-size: .12rem;
        text-align: center;
        display: block;
    }
    .close_tel2 {
        font-size: 12px;
        width: 100px;
        height: 23px;
        line-height: 25px;
        border-radius: 5px;
        background-color: rgb(211, 211, 211);
        color: white;
        position: absolute;
        right: 20%;
        top: 247px;
        outline: none;
        border: 0;
        font-weight: 400;
        cursor: pointer;
    }
    .close_tel3 {
        font-size: 12px;
        width: 100px;
        height: 23px;
        line-height: 25px;
        border-radius: 5px;
        background-color: rgb(211, 211, 211);
        color: white;
        position: absolute;
        right: 20%;
        top: 247px;
        outline: none;
        border: 0;
        font-weight: 400;
        cursor: pointer;
    }

    .phone {
        width: 67%;
        height: 42px
    ;
        padding-left: 0.1rem;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: 0;
        font: 400 0.14rem Arial;
        margin-left: 61px;
    }

    .subLogin {
        display: block;
        margin: 0 auto;
        width: 240px;
        height: 50px;
        margin-top: 40px;
        background-color: #FF9800;
        color: white;
        border-radius: 10px;
        font-size: 18px;
        outline: none;
        border: 0;
        cursor: pointer;
        letter-spacing: 10px;
        text-align: center;
        line-height: 47px;
    }
    .loginf_deal{
        font-size: 0.12rem;
        text-align: center;
    }
    .loginf_deal p{
        color: #999;
        margin-top: 0.1rem;
    }
    .loginf_deal span{
        color:#536ebb;
    }


</style>
