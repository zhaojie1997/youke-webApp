<template>
   <div style="width: 3.75rem;display: flex; justify-content: center">
      <div style="width: 3.5rem;height: 0.5rem;display: flex;justify-content: center;align-items: center;position: fixed;bottom: 0;
       border: 0.01rem solid red;border-radius: 0.1rem;">
          <img src="../../../../../public/ZHimg/12aa.png" alt="" style="width: 0.2rem;height: 0.2rem;">
          <van-cell  @click="showPopup"  style="width: 2.5rem;height: 0.5rem;display: flex;align-items: center"> 添加银行卡</van-cell>

          <van-popup v-model="show" round closeable
                     close-icon-position="top-left">
              <yous></yous>
          </van-popup>

      </div>
   </div>

</template>

<script>
    import you from './Z_payment_BankCardYa'
    export default {
        name:"Z_payment_BankCardY",
        components:{
            'yous':you
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
    };
</script>

<style scoped>

</style>
