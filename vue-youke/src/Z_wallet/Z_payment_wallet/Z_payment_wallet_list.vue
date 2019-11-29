<template>
    <div>
        <!--<a :href="'#/Cashwithdrawal'" style="width:3.75rem "></a>-->
        <div class="z-vant2">
            <!--零钱-->
            <Z_payment_Cashwithdrawals></Z_payment_Cashwithdrawals>
            <!--支付密码-->
            <Z_payment_Codes></Z_payment_Codes>

        </div>
        <div class="z-vant">
            <!--银行卡-->
            <Z_payment_BankCards></Z_payment_BankCards>
            <!--积分-->
            <Z_payment_Integrals></Z_payment_Integrals>
        </div>
        <div class="z-vant">
            <!--积分等级-->
            <Z_payment_Ranks></Z_payment_Ranks>
            <!--积分折扣-->
            <Z_payment_Discounts></Z_payment_Discounts>
        </div>
        <div style="width: 3.75rem;height: 2.3rem"></div>
        <div class="Z-ZHbottom-div">
            <div>柚课钱包</div>
            <div>-柚课服务专属平台-</div>
        </div>
    </div>
</template>

<script>
import Z_payment_Cashwithdrawal from './Z_payment_Cashwithdrawal/Z_payment_Cashwithdrawal'
import Z_payment_Code from './Z_payment_Code/Z_payment_Code'
import Z_payment_BankCard from './Z_payment_BankCard/Z_payment_BankCard'
import Z_payment_Integral from  './Z_payment_Integral/Z_payment_Integral'
import Z_payment_Rank from  './Z_payment_Rank/Z_payment_Rank'
import Z_payment_Discount from './Z_payment_Discount/Z_payment_Discount'
    export default {
        name: "Z_payment_wallet_list",
       components:{
            'Z_payment_Cashwithdrawals':Z_payment_Cashwithdrawal,
           'Z_payment_Codes':Z_payment_Code,
           'Z_payment_BankCards':Z_payment_BankCard,
           'Z_payment_Integrals':Z_payment_Integral,
           'Z_payment_Ranks':Z_payment_Rank,
           'Z_payment_Discounts':Z_payment_Discount
       },
    }
</script>

<style scoped>

</style>
