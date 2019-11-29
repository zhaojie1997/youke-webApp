<template>
<div>

        <div style="font-size: 0.12rem;color: red;height: 30px">{{this.msg}}</div>
        <ul class="msg-box">
            <li>
                <div class="Z-ZHMay-div">
                    <div>充值金额</div>
                </div>
            </li>


            <li style="">

                <el-radio-group v-model="amountVal" @change="amountChange" style="width: 3.75rem;height: 1.5rem;display: flex;justify-content: space-around;flex-wrap: wrap;align-items: center; ">
                    <el-radio border :label="''+ 100" >充值100柚币</el-radio>
                    <el-radio border :label="''+ 500">充值500柚币</el-radio>
                    <el-radio border :label="''+ 1000" class="el-radio">充值1000柚币</el-radio>
                    <el-radio border :label="''+ 2000">充值2000柚币</el-radio>

                </el-radio-group>
            </li>
            <li>
                <van-popup v-model="show" position="bottom" :style="{ height: '30%'}"  class="Z-ZH-tan">
                    <div class="Z-ZHtan-q">请选择支付方式</div>
                    <!--<van-radio-group v-model="radio" class="Z-ZHtan-div"  @change="paymentTypeChange">-->
                        <!--&lt;!&ndash;v-model="rechargeParams.paymentType"&ndash;&gt;-->
                        <!--<van-radio name="1" class="Z-ZHtan-ZF"  border :label="''+ 0"><div class="Z-ZHtandiv-div">支付宝支付<img src="../../../../../public/ZHimg/zfb.png" class="Z-ZHtan-img"></div></van-radio>-->
                        <!--<van-radio name="2" class="Z-ZHtan-ZF"  border :label="''+ 1"><div class="Z-ZHtandiv-div">微信支付<img src="../../../../../public/ZHimg/wx.png" class="Z-ZHtan-img"></div></van-radio>-->
                    <!--</van-radio-group>-->
                    <el-radio-group v-model="rechargeParams.paymentType" @change="paymentTypeChange">
                        <el-radio border :label="''+ 0">微信</el-radio>
                        <el-radio border :label="''+ 1">支付宝</el-radio>
                    </el-radio-group>
                    <div style="width: 3.75rem;height: 0.3rem;font-size: 0.14rem;display: flex;justify-content: center;align-items: center">
                        请输入支付密码：<input type="password" v-model="pay_pwd" style="font-size: 0.14rem;width: 0.8rem;border-radius: 0.2rem;text-align: center"/>
                    </div>
                    <div class="Z-ZHtan-que">
                        <!-- <div>确认支付</div> -->
                        <el-button type="primary" @click="surePay">确认支付</el-button>
                    </div>

                </van-popup>
            </li>
            <!--<li>-->

                <!--&lt;!&ndash;<input type="text" v-model="pay_pwd" />&ndash;&gt;-->

            <!--</li>-->
            <!--<li>-->
            <!--<h4 style="margin-bottom: 15px;font-size: 0.14rem">充值金额</h4>-->
            <!--<el-input :disabled="disabled" clearable v-model="rechargeParams.totalAmt" placeholder="请输入金额" style="width: 150px;"></el-input>-->
            <!--</li>-->
            <li>
                <div style="height: 0.5rem"></div>
                <div style="width: 3.75rem;display: flex;justify-content: center">

                    <div class="Z-ZH-button2" @click="showPopup">确认充值</div>
                </div>
            </li>
        </ul>
        <!--<div style="text-align: center; margin-top: 30px;">-->
             <!--<el-button type="primary" @click="surePay">确认支付</el-button>-->
         <!--</div>-->
        <!--<h4 style="margin-bottom: 15px;">充值方式</h4>-->
         <!--<el-radio-group v-model="rechargeParams.paymentType" @change="paymentTypeChange">-->
             <!--<el-radio border :label="''+ 0">微信</el-radio>-->
             <!--<el-radio border :label="''+ 1">支付宝</el-radio>-->
         <!--</el-radio-group> -->



</div>
</template>

<script>
    export default {
        name: "Z_payment_Recharge",

        data() {
            return {
                amountVal: '',
                disabled: false,
                //充值参数
                rechargeParams: {
                    // "totalAmt": '', //金额
                    "paymentType": "0", //支付方式[0:微信,1:支付宝,2:余额,3:活动]
                    "transType": "0" //交易类型[0:充值,1:消费]
                },
                show: false,
                // radio: '1',
                pay_pwd:'123456',
                msg:'',

            }
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            //充值金额
            amountChange(val) {
                this.rechargeParams.totalAmt = val;
                if (val == '') {
                    this.disabled = false
                } else {
                    this.disabled = true
                }
            },
            //支付方式
            paymentTypeChange(val) {
                this.rechargeParams.paymentType = val
            },
            //确认支付
            async surePay() {

                // if (this.rechargeParams.totalAmt == '') {
                //     this.$message.warning('请输入金额');
                //     return;
                // }
                window.console.log(this.amountVal)
                // window.console.log(this.rechargeParams.totalAmt)
                window.console.log(this.rechargeParams.paymentType)
                window.console.log(this.rechargeParams.transType)
                window.console.log(this.pay_pwd)
                // const res = await this.$http.post('orderInfo/createOrderInfo', this.rechargeParams)
                this.$axios({
                    method: 'POST',
                    url:this.HOST+'/youke/auth/recharge/',
                    data: {
                        'token': window.localStorage.getItem('token'),
                        'money':this.amountVal,	//jin额
                        'paymenType':this.rechargeParams.paymentType,
                        'transType':this.rechargeParams.transType,
                        // 	//支付方式（0：微信，1：支付宝，3：柚币）
                        'pay_pwd':this.pay_pwd,

                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                    .then(result=>{
                        window.console.log(result.data)
                        this.msg= result.data.msg
                        location.reload()
                    })
                    .catch((err=>{
                        window.console.log(err)
                    }))



            },


        }

    }
</script>

<style scoped>
    .Z-ZH-tan{
        width: 3.75rem;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .Z-ZHtan-q{
        width: 3.75rem;
        display: flex;
        justify-content: center;
        font-size: 0.12rem;
        color: darkgray;
    }
    .Z-ZHtan-div{
        width: 3rem;
    }
    .Z-ZHtan-ZF{
        height: 0.4rem;
        color: black;
        font-size: 0.14rem;
        display: flex;
        justify-content: space-between;
    }
    .Z-ZHtandiv-div{
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Z-ZHtan-img{
        width: 0.3rem;
        height: 0.3rem;
    }
    .Z-ZHtan-que{
        width: 3.75rem;
        display: flex;
        justify-content: center;

    }
</style>
