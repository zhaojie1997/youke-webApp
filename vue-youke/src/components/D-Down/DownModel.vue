<template>
  <div style=" font-size: .13rem;">

    <div  @click="xiangqing">

      <div style="    display: flex;
    font-size: 0.13rem;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;">
        <img style="    width: 34%;
    margin: 4px;" src="../../assets/jiade.png">
        <div style="display: flex;flex-wrap: wrap">


          <p style="font-size: 20px;    margin: 5px;">[全套] Excel/WPS零基...</p>
          <p style="width: 65%;color: #a7a7a7;">零基础入门部落窝教育</p>
          <p style="color: #a7a7a7;">已下载1个任务</p>
        </div>

      </div>
    </div>
    <!--<p style="font-size: 10px;margin-top: 300px;">暂无订单</p>-->
  </div>
</template>

<script>
    export default {
        name: "DownModel",
      methods:{
        xiangqing(){
          this.$router.push({path:'/Xiangqing'})
        },

      }
    }
</script>

<style scoped>

</style>
