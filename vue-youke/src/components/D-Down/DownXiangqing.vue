<template>
  <div>


  <div class="backrd">
    <img @click="rund" src="../../assets/L-img/back.png" >
    <p>[全套] Excel/WPS零基...</p>
  </div>
    <Xiangqingson></Xiangqingson>
    <Xiangqingson></Xiangqingson>
    <Xiangqingson></Xiangqingson><Xiangqingson></Xiangqingson><Xiangqingson></Xiangqingson><Xiangqingson></Xiangqingson><Xiangqingson></Xiangqingson>




  </div>
</template>

<script>
  import Xiangqingson from "./Xiangqingson";
  export default {
    name: "DownXiangqing",
    components: {Xiangqingson},
    methods:{
      rund(){
        this.$router.push({path:'/Down'})
      },

    }
  }
</script>

<style scoped>
  .backrd{
    display: flex;
    justify-content: space-between;
    margin-top: 0.1rem;
    border-bottom: 4px solid #eae9e9;
    height: .35rem;
  }
  .backrd img{
    width: 7%;
    height: 22px;
    margin-top: 2px;
  }
  .backrd p{
    font-size: 0.2rem;
    width: 75%;
  }
</style>
