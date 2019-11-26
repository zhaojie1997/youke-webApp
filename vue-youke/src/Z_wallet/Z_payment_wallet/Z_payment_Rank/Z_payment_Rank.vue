<template>
    <div>
        <van-cell title="积分等级" is-link  style="width: 3.75rem"  @click="showPopup"/>

        <div>
            <van-popup v-model="show" position="right" :style="{ height: '100%',width:'100%'}" closeable close-icon="close" close-icon-position="top-left">
                <Z_payment_RankPages></Z_payment_RankPages>
            </van-popup>

        </div>
    </div>
</template>

<script>
    import Z_payment_RankPage from './Z_payment_RankPage/Z_payment_RankPage'
    export default {
        name: "Z_payment_Rank",
        components:{
          'Z_payment_RankPages':Z_payment_RankPage
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
