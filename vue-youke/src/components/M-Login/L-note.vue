<template>
    <form @submit.prevent="login">
        <section class="login_message">
            <input type="text"  placeholder="手机号" v-model="phone">
            <button :disabled="!rightPhone" class="validation" :class="{right_phone:rightPhone}" @click.prevent="getCode">
                {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
            </button>
        </section>
        <section class="login_verification">
            <input type="text"  placeholder="验证码" v-model="code">
        </section>
        <section class="login_link">
            <p>温馨提示:未注册柚课App账号,请先点击进入注册页面进行注册  </p>
            <a>点击注册</a>
        </section>
        <button class="login_btn" @click="TipDialog">点击登录</button>
    </form>
</template>

<script>
    import index from '../../api/index'
    import { Dialog } from 'vant';
    export default {
        name: "L-note",
        components: {
            [Dialog.name]:Dialog,
        },
        data(){
            return{
                phone:'', //手机号
                computeTime:0,// 计时的时间
                code:'', //短信验证码
                data:'',
            }
        },
        computed:{
            rightPhone(){
                return /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.phone)
            }
        },
        methods:{
            async Home(){
                this.data= await index.xixi(),
                window.console.log(this.data)
            },
            //异步获取短信验证码
            getCode(){
            //如果当前没有计时
            if(!this.computeTime){
                //启动倒计时
                this.computeTime = 60
                this.intervalId = setInterval(() => {
                    this.computeTime--
                    if(this.computeTime<=0){
                        //停止计时
                        clearInterval(this.intervalId)
                    }
                },1000)
                //发送ajax请求(向指定手机号发送验证码短信)

                }

            },
            async login(){
                if(!this.rightPhone){
                    //手机号不正确
                    return
                } else if(this.code != this.data.code) {
                    //验证码必须是6位数字
                    return
                }
                if(this.computeTime) {
                    this.computeTime = 0
                    clearInterval(this.intervalId)
                    this.intervalId = undefined
                }
                this.$dialog.alert({
                    // title:'标题呀',
                    message:'登录成功'
                }).then(()=>{

                })
            },

             TipDialog(){
                // login(){
                    //表单验证
                    if(!this.rightPhone){
                        //手机号不正确
                        this.$dialog.alert({
                            // title:'标题呀',
                            message:'手机号不正确'
                        }).then(()=>{
                            window.console.log('点击了确认')
                        })
                    } else if(this.code != this.data.code) {
                        //验证码必须是6位数字
                        this.$dialog.alert({
                            // title:'标题呀',
                            message:'请检查验证码'
                        }).then(()=>{
                        })
                    }
                // },

            }

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
.login_message{
    position: relative;
    width: 80%;
    height: 0.48rem;
    font-size: 14px;
    background: #fff;
}
.validation{
    position: absolute;
    top: 30.5%;
    right: 0%;
    border: 0;
    color: #ccc;
    font-size: 0.14rem;
    background: transparent;
    outline:none;
}
.right_phone{
     color: black;
 }
.login_verification{
    width: 80%;
    position: relative;
    margin-top: 0.2rem;
    height: 0.48rem;
    font-size: 14px;
    background: #fff;
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
</style>