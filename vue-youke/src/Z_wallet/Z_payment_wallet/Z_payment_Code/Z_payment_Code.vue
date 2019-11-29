<template>
 <div>

         <van-cell title="支付密码" is-link  style="width: 3.75rem"  @click="showPopup"/>

     <div>
         <van-popup v-model="show" position="right" :style="{ height: '100%',width:'3.75rem'}" closeable close-icon="close" close-icon-position="top-left">
             <Z_payment_CodePages></Z_payment_CodePages>
         </van-popup>

     </div>
 </div>
</template>

<script>
    import Z_payment_CodePage from './Z_payment_CodePage/Z_payment_CodePage'
    export default {
        name: "Z_payment_Code",
        components:{
          'Z_payment_CodePages':Z_payment_CodePage
        },
        data() {
            return {
                show: false,
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
