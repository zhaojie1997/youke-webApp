<template>

    <div class="Z-ZH-DA">
        <div class="Z-ZH-top">
            <div class="Z-ZHtop-img" @click="getpush()"><img src="../../public/ZHimg/229f347eb12e6ecef3db84784f0172c.png" ></div>
            <div class="Z-ZHtop-div">我的账户</div>

        </div>
        <div class="Z-ZH-top2"></div>
        <Z_payment_wallets></Z_payment_wallets>
        <div class="Z-ZH-text">
            <div class="Z-ZHtext-div">
                <div>充值说明</div>
            </div>
            <div class="Z-ZHtext-div2">
                <div>1.因政策限制，充值仅限部分指定价格</div>
                <div>2.柚币可用于直接购买App内虚拟内容</div>
                <div>3.android系统里充值的柚币无法在ios系统内使用</div>
                <div>4.柚币为虚拟币，充值后的柚币不会过期，但无法退款、提现或转赠别人</div>
            </div>
        </div>
        <div style="width: 3.75rem;height: 1rem"></div>
        <div class="Z-ZHbottom-div">
           <div>柚课钱包</div>
            <div>-柚课服务专属平台-</div>
        </div>
    </div>

</template>

<script>
    import Z_payment_wallet from './Z_payment_wallet/Z_payment_wallet'
    export default {
        name: 'Z_payment',
        components:{
            'Z_payment_wallets':Z_payment_wallet
        },
        methods:{
            getpush(){
                this.$router.push({path:'/mine'})
            }
        }
       }
</script>

<style scoped>
    @import "../assets/ZH_css/Z-ZH.css";

    .Z-ZHtop-div2{
        width: 0.5rem;
        height: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.14rem;
        color: black;
    }


    .Z-ZHtan-que div{
        width:1.5rem;
        height: 0.3rem;
        background-color: red;
        border-radius: 0.8rem;
        font-size: 0.14rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 0.02rem solid gainsboro;
    }

</style>
