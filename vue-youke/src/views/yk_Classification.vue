<template>
  <div id="yk_classification">
    <yk-big-classification></yk-big-classification>
    <yk-small-classification></yk-small-classification>
    <footernav></footernav>
  </div>
</template>
<script>
import ykBigClassification from "../components/yk_classification-LeftBigClassification/ykBigClassification"
import ykSmallClassification from "../components/yk_classification-rightSmallClassification/ykSmallClassification"
import footernav from "../components/footernav"
export default {
   name:"yk_Classification",
   components:{
       ykBigClassification,
       ykSmallClassification,
       footernav
   },
}
</script>
<style>
  @import "../assets/Class.css";
</style>