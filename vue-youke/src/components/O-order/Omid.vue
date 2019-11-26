<template>
  <div class="mua" style="margin-top: 50px;">
    <ul>
      <li @click="muaway=true" v-show="muaway==true"><a style="color: #2196F3">全部订单</a></li>
      <li @click="muaway=true" v-show="muaway==false"><a>全部订单</a></li>



      <li @click="muaway=false" v-show="muaway==true"><a>课程售后</a></li>
      <li @click="muaway=false" v-show="muaway==false"><a style="color: #2196F3">课程售后</a></li>




    </ul>
    <Oallder v-show="muaway==true"></Oallder>
    <Oshouhou v-show="muaway==false"></Oshouhou>

  </div>
</template>

<script>


  import Oallder from "./Oallder";
  import Oshouhou from "./Oshouhou";
  export default {
    name: "Rformes",
    components: {Oshouhou, Oallder},
    data () {
      return {
        muaway: true,


      }
    },
  }
</script>

<style scoped>
  ul{
    font-size: 0.14rem;
    display: flex;
    justify-content: space-around;    margin-top: -38px;
  }

</style>
