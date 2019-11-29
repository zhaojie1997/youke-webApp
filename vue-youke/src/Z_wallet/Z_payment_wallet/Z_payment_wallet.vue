<template>
   <div>
       <div class="Z-ZH-box">
           <div class="Z-ZHbox-div" @click="showPopup">
              <span style="width: 1.2rem;display: flex;justify-content: center"> <img src="../../../public/ZHimg/789.png" alt="" style="width: 0.5rem;height: 0.5rem"></span>
               <span>{{money}}<i>柚币</i></span>

           </div>
           <div class="Z-ZHbox-div2" @click="showZD">
               <span style="width: 1.2rem;display: flex;justify-content: center"> <img src="../../../public/ZHimg/1235.png" alt="" style="width: 0.6rem;height: 0.6rem"></span>
               <span>购买记录</span>
           </div>
       </div>

           <div>
               <van-popup v-model="show" position="right" :style="{ height: '100%',width:'100%'}" closeable close-icon="close" close-icon-position="top-left">
                    <div class="z-van">钱包</div>
                   <Z_payment_wallet_lists></Z_payment_wallet_lists>
               </van-popup>
           </div>

   </div>
</template>

<script>
    import Z_payment_wallet_list from './Z_payment_wallet_list'
    export default {
        name: "Z_payment_wallet",
        components:{
            'Z_payment_wallet_lists':Z_payment_wallet_list
        },
        data() {
            return {
                show: false,
                token:window.localStorage.getItem('token'),
                money:''
            }
        },

        methods: {
            showZD(){
                this.$router.push({name:'Z_payment_Purchaserecord'})
            },

            showPopup() {
                this.show = true;
            },
            getYb(){
                this.$axios.get('http://47.92.132.161:8000/youke/auth/wallet/?token='+this.token).then(res=>{
                    this.money = res.data.data.data.money
                    window.console.log(res.data)
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
