<template>
    <div>
        <div style="width: 3.45rem; height: 0.5rem;
            font-size: 0.16rem;display: flex;justify-content: center;align-items: center;">
            设置修改支付密码
        </div>

        <van-password-input
                :value="value"
                info="请确认密码"
                :focused="showKeyboard"
                @focus="showKeyboard = true"
        />
        <div v-show="errorText" style="color: red;width: 3.75rem;height: 0.3rem;font-size: 0.14rem;display: flex;justify-content: flex-end">两次密码不一致</div>
        <!-- 数字键盘 -->
        <van-number-keyboard
                :show="showKeyboard"
                @input="onInput"
                @delete="onDelete"
                @blur="showKeyboard = false"
                style="width: 3.75rem;height: 5rem"
        />

    </div>
</template>

<script>
    export default {
        name: "Z_payment_CodePagea",
        data() {
            return {
                value: '',
                showKeyboard: true,
                pad:this.$route.params.pwd,
                psd:'',
                errorText:false
            };
        },

        methods: {
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
                if(this.value.length==6){
                    this.psd=this.value;
                    if (this.pad==this.psd) {
                        window.console.log(this.value)
                        // this.$axios.post(this.HOST+'/youke/auth/paypwd/',{
                        //     params:{
                        //         'pay_pwd':this.value
                        //     }
                        // })
                        this.$axios({
                            method: 'POST',
                            url:this.HOST+'/youke/auth/paypwd/',
                            data: {
                                'pay_pwd':this.value,
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
                        this.$router.push({name:'/Z_payment'})

                    }else if(this.pad!==this.psd){
                        this.errorText=true
                    }

                }

            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
                this.errorText=false
            }
        },
    }
</script>

<style scoped>

</style>
