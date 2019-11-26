<template>
    <div>
        <van-cell title="积分折扣" is-link  style="width: 3.75rem"  @click="showPopup"/>

        <div>
            <van-popup v-model="show" position="right" :style="{ height: '100%',width:'100%'}" closeable close-icon="close" close-icon-position="top-left">
                <Z_payment_DiscountPages></Z_payment_DiscountPages>
            </van-popup>

        </div>
    </div>
</template>

<script>
    import Z_payment_DiscountPage from './Z_payment_DiscountPage/Z_payment_DiscountPage'
    export default {
        name: "Z_payment_Discount",
        components:{
          'Z_payment_DiscountPages':Z_payment_DiscountPage
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
