<template>
  <!--    <div class="yk-home">-->
  <van-loading type="spinner" color="#1989fa" v-if="tag" vertical style="top: 2.5rem">
    <img src="../assets/img/logon.png" alt="" style="width: 1.3rem;display: block;margin: 0.4rem auto;"/>
    小柚子努力加载中,稍等一下下~
  </van-loading>
  <!--        搜索-->
  <div class="yk-home" v-else>
    <yk-home-top :data="ykHomeData.roationData"></yk-home-top>
    <!--        模块切换-->
    <yk-home-module :data="ykHomeData.recommendData"></yk-home-module>
    <!--            加载更多-->
    <yk-home-more :data="ykHomeData.more"></yk-home-more>
    <!--        名校推荐-->
    <yk-home-reco></yk-home-reco>
    <!--            到底了-->
    <div class="yk-home-bottom">
      <p>我是有底线的</p>
    </div>
    <footernav></footernav>
  </div>

  <!--    </div>-->
</template>

<script>
    import ykHomeTop from "../components/mx-youke-home/youke-home-top"
    import ykHomeModule from "../components/mx-youke-home/yk-home-module"
    import ykHomeReco from "../components/mx-youke-home/yk-home-recommen"
    import api from "../api/mx-youke-apis/api"
    import ykHomeMore from "../components/mx-youke-home/yk-home-more"
    import footernav from "../components/footernav"

    export default {
        name: "Home",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            ykHomeTop,ykHomeModule,ykHomeReco,ykHomeMore,footernav
        },
        data(){
            return{
                ykHomeData:[],
                // ykModuleInfo:[],
                tag:true,
            }
        },
        methods:{
            //模块名
            // async _ykHomeModuleName(){
            //     this.ykModuleInfo = await api.ykHomeModuleInfo()
            //     // eslint-disable-next-line no-console
            //     console.log(this.ykModuleInfo)
            //     this.tag = false
            // },
            //轮播图图片
            async _ykHomeData(){
                this.ykHomeData = await api.ykHomeData();
                // eslint-disable-next-line no-console
                // console.log(this.ykHomeSwp)
                this.tag = false
            }
        },
        beforeMount() {
            this._ykHomeData()
            // this._ykHomeModuleName()
        }
    }
</script>

<style scoped>
  .yk-home{
    width: 100%;
    /*overflow: auto;*/
    /*background-color: pink;*/
    padding-bottom: 0.5rem;
    font-size: 0.16rem;
  }
  .yk-home-bottom{
    text-align: center;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    position: relative;
    color: #9A9A9A;
  }
  .yk-home-bottom p:before{
    content: "";
    width: 1rem;
    border-bottom: 0.01rem solid #8C999F;
    position: absolute;
    left: 0.3rem;
    top: 0.1rem;
  }
  .yk-home-bottom p:after{
    content: "";
    width: 1rem;
    border-bottom: 1px solid #8C999F;
    position: absolute;
    right: 0.3rem;
    top: 0.1rem;
  }
</style>