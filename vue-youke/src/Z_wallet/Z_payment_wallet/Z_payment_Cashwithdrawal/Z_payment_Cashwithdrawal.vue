<template>
    <div>
        <van-cell title="零钱" is-link   @click="showPopup" style="width: 3.75rem"></van-cell>

          <div>
              <van-popup v-model="show" position="right" :style="{ height: '100%',width:'100%'}" closeable close-icon="close" close-icon-position="top-left">
                  <div class="z-van">钱包</div>
                  <div style="height: 2.2rem;display: flex;justify-content: center;align-items: center;flex-wrap: wrap">
                      <img src="../../../../public/ZHimg/14747.png" alt="" style="width: 1.3rem;height: 1.3rem">
                     <div style="width: 3.75rem;display: flex;flex-wrap: wrap;font-size: 0.3rem;color: black;font-weight: 600">
                         <!--<span style="width: 3.75rem;display: flex;justify-content: center">{{money}}</span>-->
                         <input style="width: 3.75rem;text-align: center;border: none;outline: none" v-model="money" readonly/>
                         <i style="width: 3.75rem;display: flex;justify-content: center">柚币</i>
                     </div>
                  </div>
                  <Z_payment_Recharges></Z_payment_Recharges>

              </van-popup>

          </div>

    </div>
</template>

<script>
    import Z_payment_Recharge from './Z_payment_Recharge/Z_payment_Recharge'
    export default {
        name: "Z_payment_Cashwithdrawal",
        components:{
            'Z_payment_Recharges':Z_payment_Recharge
        },
        data() {
            return {
                show: false,
                money:'',
                token:window.localStorage.getItem('token')
            }
        },

        methods: {
            showPopup() {
                this.show = true;

            },
            getYb(){
                this.$axios.get('http://47.92.132.161:8000/youke/auth/wallet/?token='+this.token).then(res=>{
                    window.console.log(res.data)
                    this.money = res.data.data.data.money
                })
            }
        },
        mounted(){
            this. getYb()
        }
    }
</script>

<style scoped>
    .z-van{
        width: 3.45rem;
        height: 0.5rem;
        font-size: 0.16rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
