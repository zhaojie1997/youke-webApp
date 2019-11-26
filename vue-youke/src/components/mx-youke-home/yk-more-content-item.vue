<template>
        <div class="yk-more-item">
            <div class="yk-more-item-img">
                <img :src="data.lessonImg" alt="">
            </div>
            <div class="yk-more-item-info">
                <p>{{data.lessonName}}</p>
                <p v-if="data.priceType=='免费'"><span class="more-item-free">免费</span></p>
                <p class="more-item-price" v-else><i class="more-item-sale">{{data.priceType}}</i>￥<span>{{data.lessonPrice}}</span></p>
                <p style="color: gray">已购买人数:{{data.buyAmount}}</p>
            </div>
        </div>
</template>

<script>
    export default {
        name: "yk-more-content-item",
        props:['data']
    }
</script>

<style scoped>
    .more-item-sale{
        display: inline-block;
        margin-right: 0.1rem;
    }
    .more-item-price span{
        font-size: 0.16rem;
    }
    .more-item-price{
        color: orangered;
        font-weight: 700;
        font-size: 0.12rem;
    }
    .more-item-del{
        font-size: 0.14rem;
        color: #9A9A9A;
        margin-left: 0.1rem;
    }
    .more-item-free{
        display: inline-block;
        background-color: orangered;
        color: white;
        padding: 0rem 0.05rem;
        border-radius: 0.1rem;
        font-size: 0.12rem;
    }
    .yk-more-item{
        width: 90%;
        height: 1rem;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
        display: flex;
        background-color: white;
    }
    .yk-more-item-info p{
        margin-top: 0.05rem;
    }
    .yk-more-item-info{
        width: 55%;
        box-sizing: border-box;
        padding-left: 0.1rem;
        /*background-color: seagreen;*/
    }
    .yk-more-item-img{
        width: 55%;
    }
    .yk-more-item-img img{
        display: block;
        width: 100%;
        height: 1rem;
    }
</style>