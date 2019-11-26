<template>
    <div>
        <van-cell title="积分" is-link  style="width: 3.75rem"  @click="showPopup"/>

        <div>
            <van-popup v-model="show" position="right" :style="{ height: '100%',width:'100%'}" closeable close-icon="close" close-icon-position="top-left">
                <Z_payment_IntegralPages></Z_payment_IntegralPages>
            </van-popup>

        </div>
    </div>
</template>

<script>
    import Z_payment_IntegralPage from './Z_payment_IntegralPage/Z_payment_IntegralPage'
    export default {
        name: "Z_payment_Integral",
        components:{
            'Z_payment_IntegralPages':Z_payment_IntegralPage
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
