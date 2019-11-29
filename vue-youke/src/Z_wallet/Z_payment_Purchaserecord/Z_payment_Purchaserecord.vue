<template>
    <div style="font-size: 0.14rem;width: 100%;height: 100%;background-color: white;">
        <div style="height: 40px;font-size: 20px;display: flex;justify-content: center;align-items: center; background-color: #f8f8f8">
            <div style="width: 40px;display: flex;justify-content: space-between; align-items: center;" @click="routZD">
                <img src="../../../public/ZHimg/xx_03.jpg" alt="" style="width: 30px;height: 30px"></div>
            <div style="width: 400px;text-align: center">充值购买记录</div>
        </div>
        <van-tabs v-model="active" style="background-color: white">
            <van-tab title="充值" >
                <div style="width: 3.75rem;border-bottom: 0.01rem solid skyblue"></div>
                <div style="width: 3.75rem;display: flex;flex-wrap: wrap;justify-content: center;">
                    <div v-for="(payF,pa) in pay" :key="pa" style="height: 0.8rem;border-bottom: 0.01rem solid gainsboro;">
                        <div style="width: 3rem;height:0.2rem;margin-top: 0.05rem">获得积分：<span style="color: #f4c004;">{{payF.integral}}</span></div>
                        <div style="width: 3rem;height:0.3rem;font-size: 0.16rem;line-height: 0.3rem">充值：<span style="color: red;">￥</span><span style="color: deepskyblue">{{payF.amount}}</span></div>
                        <div style="width: 3rem;height:0.2rem;font-size: 0.12rem;">时间：<span style="font-size: 0.12rem">{{payF.bill_time}}</span></div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="消费">
                <div style="width: 3.75rem;border-bottom: 0.01rem solid skyblue"></div>
                <div style="width: 3.75rem;display: flex;flex-wrap: wrap;justify-content: center;">
                    <div v-for="(spendF,sp) in spend" :key="sp" style="width: 3rem;height: 0.7rem;border-bottom: 0.01rem solid gainsboro;line-height: 0.5rem">
                        <div style="width: 3rem;height:0.2rem;font-size: 0.16rem">消费：<span style="color: red;">￥</span><span style="color: deepskyblue">{{spendF.amount}}</span></div>
                        <div style="width: 3rem;height:0.2rem;font-size: 0.12rem">时间：<span style="font-size: 0.12rem">{{spendF.bill_time}}</span></div>
                    </div>
                </div>
            </van-tab>

        </van-tabs>


    </div>
</template>

<script>
    export default {
        name: "Z_payment_Purchaserecord",
        data(){
            return{
                data:"",
                spend:[],
                pay:[],
                // list: [],
                loading: false,
                finished: false,
                active: 2

            }
        },
        methods: {
            routZD(){
                this.$router.push({name:'/Z_payment'})
            },
            getZD(){
                this.$axios.get('http://47.92.132.161:8000/youke/auth/bill/?token='+window.localStorage.getItem('token')).then(res=>{
                    this.data = res.data
                    window.console.log(this.data )
                    for(var i=0;i<this.data.data.data.length;i++){
                        // window.console.log(this.data.data.data[i]);
                        if(this.data.data.data[i].transtype=="1"){
                            this.spend.push(this.data.data.data[i])
                        }else{
                            this.pay.push(this.data.data.data[i])
                        }
                    }
                    window.console.log( "0000000",this.pay)
                    window.console.log( "1111111",this.spend)
                })
            },
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        },
        mounted(){
            this. getZD()
        }
    }
</script>

<style scoped>

</style>