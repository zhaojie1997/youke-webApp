<template>
    <div style="">
        <div style="height: 40px;font-size: 20px;display: flex;text-align: center;align-items: center; background-color: #f8f8f8">
            <div style="width: 40px;display: flex;justify-content: space-between; align-items: center;">
                <img src="../../public/images/xx_03.jpg" alt="" style="width: 30px;height: 30px"></div>
            <div style="width: 400px">请购买</div>

        </div>
        <div style="font-size: 0.12rem;color: red;height: 30px;">{{this.msg}}</div>
        <div><img src="../../public/images/789ads.png" alt="" style="width: 90px;height: 88px;margin-top: 10px;margin-left: 150px"></div>
        <div style="font-size: 20px;height: 30px; text-align: center;">
            柚币支付 <span style="display: none;">{{paymenType}}</span> </div>
        <div style="font-size: 20px;height: 30px;text-align: center;">消费 <span style="display: none">{{transType}}</span></div>
        <div style="font-size: 60px;text-align: center;align-items: center;height: 40px">￥{{money}}</div>

        <van-password-input
                :value="value"
                info="请输入密码"
                :focused="showKeyboard"
                @focus="showKeyboard = true"
                style="margin-top: 60px"
        />
        <!--<div v-show="errorText" style="color: red;width: 3.75rem;height: 0.3rem;font-size: 0.14rem;display: flex;justify-content: flex-end">密码输入错误</div>-->
        <!-- 数字键盘 -->
        <van-number-keyboard
                :show="showKeyboard"
                @input="onInput"
                @delete="onDelete"
                style="font-size: 5vw"

        />

    </div>
</template>

<script>
    // import cartsend from '../api/cartsend'

    export default {
        name: "zhizhi",
        data() {
            return {
                value: '',
                showKeyboard: true,
                paymenType:3,//支付方式
                transType:1, //消费方式
                money:'',//价格
                msg:'',
                from:'',
                pid:[],
                code:''
            };
        },

        methods: {
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
                if(this.value.length==6){
                    window.console.log(this.value)
                    window.console.log(this.paymenType)
                    window.console.log(this.transType)
                    window.console.log(this.money)
                    // this.$router.push('/awa?pwd='+this.value)
                    // this.$router.push({name:'Z_payment_CodePagea',params:{pwd:this.value}})
                    this.$axios({
                        method: 'POST',
                        url:this.HOST+'/youke/auth/recharge/',
                        data: {
                            'pay_pwd':this.value,
                            'paymenType':this.paymenType,
                            'transType':this.transType,
                            'money':this.money,
                            'token': window.localStorage.getItem('token')
                        },
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(result=>{
                            window.console.log(result.data)
                            this.msg= result.data.msg
                            this.code=result.data.code
                            if(this.code==200){
                                window.console.log(1,this.money)
                                if(this.from=='cart'){
                                    this.$router.push({ path:'/cart?code=200' })
                                }

                            }
                        })
                        .catch((err=>{
                            window.console.log(err)
                        }))

                }
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);

            }
        },
        beforeMount(){
            this.money=this.$route.query.cost
            this.pid=this.$route.query.pid.split("-")
            this.from=this.$route.query.from
        },
        mounted(){
            window.console.log(this.money,this.pid,this.from)
        }
    }
</script>

<style scoped>

</style>
