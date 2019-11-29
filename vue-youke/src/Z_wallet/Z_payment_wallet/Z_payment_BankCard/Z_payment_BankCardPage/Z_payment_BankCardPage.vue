<template>
    <div>
        <card></card>
        <Z_payment_BankCardY></Z_payment_BankCardY>
    </div>
</template>

<script>
    import card from "../../../../components/yk-my-card"
    import Z_payment_BankCardY from './Z_payment_BankCardY'
    export default {
        name: "Z_payment_BankCardPage",
        components:{
            card,
            Z_payment_BankCardY
        }
    }
</script>

<style scoped>

</style>
