<template>
    <div>
        <van-cell title="银行卡号" is-link style="width: 3.75rem" @click="showPopup"/>
        <div>
            <van-popup v-model="show" position="right" :style="{ height: '100%',width:'100%'}" closeable close-icon="close" close-icon-position="top-left">
                <Z_payment_BankCardPages></Z_payment_BankCardPages>
            </van-popup>
        </div>
    </div>
</template>

<script>
    import Z_payment_BankCardPage from './Z_payment_BankCardPage/Z_payment_BankCardPage'
    export default {
        name: "Z_payment_BankCard",
        components:{
            'Z_payment_BankCardPages':Z_payment_BankCardPage
        },
        data() {
            return {
                show: false
            }
        },

        methods: {
            showPopup() {
                this.show = true;
            }
        }
    }
</script>

<style scoped>

</style>
