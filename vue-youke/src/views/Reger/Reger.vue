<template>
    <div>
        <Rheades></Rheades>
        <Rlogs></Rlogs>
        <Rformes></Rformes>

    </div>

</template>

<script>
    import Rheades from "../../components/R-reger/Rheades";
    import Rlogs from "../../components/R-reger/Rlogs";
    import Rformes from "../../components/R-reger/Rformes";
    export default {
        name: "Reger",
        components: {Rformes,  Rlogs, Rheades, }
    }
</script>
<style src="../../assets/denglu.css"></style>
<style scoped>

</style>