<template>
    <div>
      <Downheader></Downheader>
      <DownModel></DownModel>
    </div>
</template>

<script>
    import Downheader from "../../components/D-Down/Downheader";
    import DownModel from "../../components/D-Down/DownModel";
    export default {
        name: "Down",
      components: {DownModel, Downheader}
    }
</script>

<style scoped>

</style>
