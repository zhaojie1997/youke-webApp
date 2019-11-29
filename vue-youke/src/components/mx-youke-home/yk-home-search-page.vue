<template>
    <div class="yk-home-search">
        <div class="search">
            <span class="goback" @click="back"></span>
            <input type="text" placeholder="搜索课程" v-model="key">
            <span @click="startSearch" class="home-search">搜索</span>
        </div>
<!--        搜索信息提示-->
        <div class="yk-search-title" ref="prompt" v-show="prompt">
            <span @click="searchto1" ref="s1">python</span>
            <span @click="searchto2" ref="s2">java</span>
            <span @click="searchto3" ref="s3">C</span>
            <span @click="searchto4" ref="s4">小程序</span>
            <span @click="searchto5" ref="s5">php</span>
        </div>
<!--        搜索到的课程显示区-->
        <keep-alive>
            <div class="yk-home-recommen" v-if="data.serachData!='不好意思，没查到该数据！'">
                    <div class="search-item" :key="i" v-for="(n,i) in data.serachData" @click="godetail(n.lessionId)">
                        <img :src="n.lessionImg" alt="">
                        <div class="search-item-info">
                            <p class="search-item-name">{{n.lessionName}}</p>
                            <p>{{n.teacherDescribe}}</p>
                            <p v-if="n.priceType=='免费'"><span class="search-item-free">免费</span><del class="search-item-del">{{n.lessionPrice}}</del></p>
                            <p v-else class="search-item-price"><i>{{n.priceType}}</i>￥<span>{{n.lessionPrice}}</span></p>
                            <p class="search-item-buy">已学习该课程: <span>{{n.buyAmount}}</span></p>
                        </div>
                    </div>
                <div class="yk-search-bottom" style="width: 100%;">
                    <p>没有更多啦~</p>
                </div>
            </div>
            <div v-else>
                <img src="../../assets/img/no_search.jpg" alt="" class="no-search">
            </div>
        </keep-alive>

    </div>
</template>

<script>
    export default {
        name: "yk-home-search-page",
        data(){
            return{
                key:'',
                data:[],
                prompt:true
            }
        },
        methods:{
            startSearch(){
                if(this.key==''){
                    window.console.log(this.key)
                }else{
                    this.$axios.get("http://47.92.132.161:8001/youke/search?data="+this.key)
                        .then(res=>{
                            window.console.log(res.data)
                            this.data = res.data
                            // eslint-disable-next-line no-console
                            console.log(this.key)
                        })
                    this.prompt = false
                }
            },
            godetail(pid){
                this.$router.push('/gd?pid='+pid)
            },
            searchto1(){
                this.key = this.$refs.s1.innerHTML
            },
            searchto2(){
                this.key = this.$refs.s2.innerHTML
            },
            searchto3(){
                this.key = this.$refs.s3.innerHTML
            },
            searchto4(){
                this.key = this.$refs.s4.innerHTML
            },
            searchto5(){
                this.key = this.$refs.s5.innerHTML
            },
            back(){
                window.history.go(-1)
            }
        },
    }
</script>

<style scoped>
    .yk-search-title{
        width: 100%;
        height: 1rem;
    }
    .yk-search-title span{
        display: inline-block;
        border: 0.01rem solid  #8C999F;
        box-sizing: border-box;
        padding: 0 0.1rem;
        margin: 0.1rem 0.2rem;
        border-radius: 0.1rem;
    }
    .no-search{
        display: block;
        margin: 0.3rem auto;
    }
    .search-item-del{
        font-size: 0.14rem;
        color: #8C999F;
    }
    .search-item-free{
        display: inline-block;
        background-color: orangered;
        color: white;
        padding: 0 0.05rem;
        border-radius: 0.1rem;
        font-size: 0.14rem;
        margin-right: 0.05rem;
    }
    .search-item-info{
        box-sizing: border-box;
        padding: 0.05rem;
    }
    .search-item-buy{
        color: #333333;
        font-size: 0.14rem;
        margin-top: 0.05rem;
    }
    .search-item-price span{
        font-size: 0.16rem;
    }
    .search-item-price i{
        font-size: 0.16rem;
        margin-right: 0.1rem;
    }
    .search-item-price{
        color: orangered;
        font-size: 0.12rem;
        font-weight: 600;
    }
    .search-item-name{
        margin-top: 0.05rem;
        font-size: 0.16rem;
    }
    .search-item{
        width:48% ;
        background: white;
    }
    .yk-search-bottom p:after{
        content: "";
        width: 1rem;
        border-bottom: 0.01rem solid #8C999F;
        position: absolute;
        left: 0.3rem;
        top: 0.07rem;
    }
    .yk-search-bottom p:before{
        content: "";
        width: 1rem;
        border-bottom: 0.01rem solid #8C999F;
        position: absolute;
        right: 0.3rem;
        top: 0.07rem;
    }
    .yk-search-bottom{
        width: 100%;
        margin:0.2rem 0 ;
        position: relative;
        text-align: center;
        color: #8C999F;
        font-size: 0.14rem;
    }
    .yk-home-recommen{
        width:100% ;
        display: flex;
        padding: 0.1rem;
        box-sizing: border-box;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .yk-home-recommen img{
        width: 100%;
        display: block;
    }
    .home-search{
        display: inline-block;
        position: absolute;
        right: 0.1rem;
        top: 0.12rem;
        font-size: 0.16rem;
        color: white;
        font-weight: 500;
    }
    .goback{
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        border-left: 0.01rem solid #8C999F;
        border-bottom: 0.01rem solid #8C999F;
        position: absolute;
        left: 0.2rem;
        top: 0.18rem;
        transform: rotate3d(0,0,1,45deg);
    }
    .yk-home-search{
        width: 100%;
        /*height: 3rem;*/
        font-size: 0.16rem;
        overflow: hidden;
    }
    .search{
        width: 100%;
        height: 0.5rem;
        background-color: orange;
        box-sizing: border-box;
        padding-left: 0.5rem;
        position: relative;
    }
    .search input{
        width: 85%;
        height: 0.35rem;
        border: none;
        outline: none;
        border-radius: 0.1rem;
        margin-top: 0.07rem;
        box-sizing: border-box;
        padding-left: 0.1rem;
    }
</style>