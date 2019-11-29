<template>
<div>
    <div style="height: 40px;font-size: 20px;display: flex;justify-content: center;align-items: center; background-color: #f8f8f8">
        <div style="width: 40px;display: flex;justify-content: space-between; align-items: center;">
            <img src="../../../public/images/1213.png" alt="" style="width: 30px;height: 30px"></div>
        <div style="width: 400px">我的问答</div>

    </div>
    <van-tabs v-model="active">
        <van-tab title="回答">
            <div style="width: 3.75rem;margin-top: 1.7rem;display: flex;justify-content: center;flex-wrap: wrap">
            <img src="../../../public/images/7asda.jpg" alt="" style="width: 1rem;height: 1rem">
                <div style="width: 3.75rem;height: 0.5rem;display: flex;justify-content: center;align-items: center; font-size: 0.2rem">
                    你还没有
                    <span style="color: red;font-size: 0.24rem">回答</span>
                    过问题
                </div>
            </div>
        </van-tab>
        <van-tab title="提问">
            <div style="width: 3.75rem;margin-top: 1.7rem;display: flex;justify-content: center;flex-wrap: wrap">
                <img src="../../../public/images/7asda.jpg" alt="" style="width: 1rem;height: 1rem">
                <div style="width: 3.75rem;height: 0.5rem;display: flex;justify-content: center;align-items: center; font-size: 0.2rem">
                    你还没有
                    <span style="color: #ffc107;font-size: 0.24rem">提问</span>
                    过问题
                </div>
            </div>
        </van-tab>
        <van-tab title="围观">

            <div style="width: 3.75rem;margin-top: 1.7rem;display: flex;justify-content: center;flex-wrap: wrap">
                <img src="../../../public/images/7asda.jpg" alt="" style="width: 1rem;height: 1rem">
                 <div style="width: 3.75rem;height: 0.5rem;display: flex;justify-content: center;align-items: center; font-size: 0.2rem">
                    你还没有
                    <span style="color: #0ee10e;font-size: 0.24rem">围观</span>
                    过问题
                </div>
            </div>
        </van-tab>
    </van-tabs>

</div>
</template>

<script>

    export default {
        name: "answers",
        data() {
            return {
                active: 2
            };
        },
        methods: {


        }
    }
</script>

<style scoped>

</style>
