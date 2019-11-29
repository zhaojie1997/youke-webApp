<template>
    <form @submit.prevent="login" style="    display: grid;">
        <div style="    background: #FF9800;
    height: 5px;
    width: 75px;
    margin-top: -7px;
    margin-left: 213px;
    border: 3px;"></div>
        <input type="tel" class="phone" placeholder="用户名" v-model="name">
        <input class="phone" type="password" placeholder="密码" v-model="pwd">
        <input type="password" class="phone" placeholder="确认密码" v-model="pwd_code">

        <button class="subLogin" @click="submit" :disabled="!isagree">注册</button>
        <div class="loginf_deal">
            <label for="agree">
                <input type="checkbox" id="agree" v-model="isagree">注册即代表你同意<span>用户协议</span>和<span>隐私政策</span>
            </label>
            <a @click="tiaozhuan" class="infoo">已有账号请直接登录</a>
        </div>
    </form>
</template>

<script>
    import { Dialog } from 'vant';


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
                name:'', //用户名
                computeTime:0,// 计时的时间
              pwd_code:'', //确认密码
                pwd:'', //密码
                data:'',
            }
        },
        methods: {
            tiaozhuan(){
                this.$router.push({path:'/Down'})
            },
            getCode() {
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
                }
            },
            async login(){

             await this.$axios.post(this.HOST+'/youke/auth/register_/',{'name':this.name,'pwd':this.pwd,'pwd_code':this.pwd_code})
                .then(res=>{
                  window.console.log(res.data)
                  window.console.log(this.name)
                  if(res.data.code ===200){
                    this.msg = res.data.data.msg
                    this.$router.push({path:'/login'})
                  }else (this.msg = res.data.msg)
                })


              if(!/^[a-zA-Z0-9_-]{4,16}$/.test(this.name)){

                return}
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

              else if(this.pwd_code != this.pwd) {
                //两次密码必须相同
                this.$dialog.alert({
                  // title:'标题呀',
                  message:'密码请输入一致'
                }).then(()=>{
                  window.console.log('点击了确认')
                })
                return
              }




              this.$dialog.alert({
                // title:'标题呀',
                message:this.msg
              }).then(()=>{
                window.console.log('点击了确认')
              })





            },






            async submit(){

                if(!/^[a-zA-Z0-9_-]{4,16}$/.test(this.name)){

                    this.$dialog.alert({
                        // title:'标题呀',
                        message:'请输入合法的用户名4到16位（字母，数字，下划线，减号）'
                    }).then(()=>{
                        window.console.log('点击了确认')
                    })
                    return
                }
                // else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.pwd)) {
                //
                //     this.$dialog.alert({
                //         // title:'标题呀',
                //         message:'密码至少包含 数字和英文，长度6-20'
                //     }).then(()=>{
                //         window.console.log('点击了确认')
                //     })
                //     return
                // }
                else if(this.pwd_code != this.pwd) {
                  //两次密码必须相同

                  this.$dialog.alert({
                        // title:'标题呀',
                        message:'密码请输入一致'
                    }).then(()=>{
                        window.console.log('点击了确认')
                    })
                    return
                }
              // this.$axios.post(this.HOST+'/youke/auth/register_/',{'name':this.name,'pwd':this.pwd,'pwd_code':this.pwd_code})
              //   .then(res=>{
              //     window.console.log(res.data)
              //     window.console.log(this.name)
              //     this.msg = res.data.msg
              //   })

            }
        }
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
