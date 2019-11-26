<template>
    <div>
        <header>
            <div class="head">
                <input type="file" name="image" accept="image/*" @change='changeImg' class="btn common">
                <img :src='avatar' class="common">
            </div>
            <div class="name" ref="btn">{{ nickname }}</div>
            <div class="vip">
                <img src="../../assets/img/rank.png">
                <span>{{ rank }}</span>
            </div>
        </header>
    </div>
</template>

<script>
export default{
    data(){
        return{
            avatar: require('../../assets/img/head.jpg'),
            nickname: "youke",
            rank: "普通会员"
        }
    },
    methods: {
        switchTo(path){
            this.$router.replace(path)
        },
        changeImg (e) {
            var file = e.target.files[0]
            var _this = this
            var reader = new FileReader()
            reader.readAsDataURL(file) 
            reader.onloadend = function () {
            var dataURL = reader.result
            _this.avatar = dataURL
            }
        }
    }
}
</script>

<style scoped>
    header{
        margin-top: 0.2rem;
        width: 100%;
        height: 1rem;
        padding: 0.1rem 0.2rem;
        box-sizing: border-box;
    }
    .head{
        position: relative;
        font-size: 0.16rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #efefef;
        line-height: 0.8rem;
        text-align: center;
        float: left;
    }
    .btn{
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
    .common{
        width: 0.8rem;
        height: 0.8rem;
        /* display: inline-block; */
    }
    .head img{
        width: 0.8rem;
        border-radius: 50%;
    }
    .name{
        width: 1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.2rem;
        float: left;
        text-align: left;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .vip{
        width: 1.2rem;
        float: left;
        line-height: 0.8rem;
    }
    .vip img{
        vertical-align: -0.04rem;
        width: 0.24rem;
    }
    .vip span{
        padding-left: 0.06rem;
    }
</style>