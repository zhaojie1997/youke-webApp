<template>


    <div class="Z-DF">
        <form @submit.prevent="login">
            <section><span>持卡人：</span><input type="text" v-model="name" /></section>
            <section><span>银行卡号：</span><input type="text" v-model="cardID"/></section>
            <section >
                <span>手机号：</span><input type="text" v-model="phone"/><br>
            </section>
            <section>
                <button :disabled="!rightPhone" class="validation" :class="{right_phone:rightPhone}" @click.prevent="getCode" >
                    {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
                </button>
            </section>

            <section class="login_verification">
                <span> 验证码：</span><input type="text"   v-model="code">
            </section>
            <section class="Z-section-btn"><button class="Z-btn" @click="TipDialog" type="submit">点击设置</button></section>

        </form>
    </div>

</template>

<script>

    import { Dialog } from 'vant';
    export default {
        name: "Z_payment_BankCardYa",
        components: {
            [Dialog.name]:Dialog,
        },
        data(){
            return{
                phone:'', //手机号
                computeTime:0,// 计时的时间
                code:'', //短信验证码
                cardID:'',//银行卡
                name:''
            }
        },
        computed:{
            rightPhone(){
                return /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.phone)
            }
        },

        methods:{

            //异步获取短信验证码
            async getCode(){
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
                    // 发送ajax请求(向指定手机号发送验证码短信)
                    this.$axios.post(this.HOST+'/youke/auth/card/',{'phone':this.phone})
                        .then(res=>{
                            window.console.log(res.data)
                            this.msg = res.data.msg
                        })
                }
            },

            async login(){
                if(!this.rightPhone){
                    //手机号不正确
                    return
                }
                if(this.computeTime) {
                    this.computeTime = 0
                    clearInterval(this.intervalId)
                    this.intervalId = undefined
                }
                this.$dialog.alert({
                    // title:'标题呀',
                    message:this.msg
                }).then(()=>{

                })


            },

            async TipDialog(){
                window.console.log(this.phone)
                window.console.log(this.computeTime)
                window.console.log(this.code)
                window.console.log(this.cardID)
                window.console.log(this.name)

                this.$axios({
                    method: 'POST',
                    url:this.HOST+'/youke/auth/card/',
                    data: {
                        'phone':this.phone,
                        'name':this.name,
                        'cardID':this.cardID,
                        'code':this.code,
                        'token': window.localStorage.getItem('token')
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })

                    .then(result=>{
                        window.console.log(result.data)
                        this.msg= result.data.msg
                    })
                    .catch((err=>{
                        window.console.log(err)
                    }))
        },

    }
    }
</script>

<style scoped>
@import "../../../../assets/ZH_css/you.css";
form {
    width: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.14rem;
    background-color: #f0fff3;
}
section{
    width: 3rem;
    height: 0.5rem;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 0.01rem solid gainsboro;
}
section span{
    width: 1rem;
    height: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
section input{
    width: 1.5rem;
    height: 0.3rem;
    border: 0.01rem solid gainsboro;
    border-radius: 0.1rem;
}
section button{
    width: 0.9rem;
    height: 0.3rem;
    border: 0.01rem solid yellow;
    border-radius: 0.8rem;
    background-color: dodgerblue;
    color: white;
}
.Z-section-btn{
    width: 3rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    border-bottom:none;
}

.Z-btn{
    width: 1.5rem;
    height: 0.4rem;
    border: 0.01rem solid yellow;
    border-radius: 0.8rem;
    background-color: #c70909;
    color: white;
    font-size: 0.16rem;
    font-weight: 500;
}

</style>
