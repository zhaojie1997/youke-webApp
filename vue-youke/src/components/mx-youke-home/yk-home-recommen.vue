<template>
    <div class="yk-home-recommen-page">
        <h3 class="yk-school-title">柚课名校</h3>
        <yk-home-reco-page></yk-home-reco-page>
    </div>
</template>

<script>
    import ykHomeRecoPage from "./yk-recommen-page"
    export default {
        name: "yk-home-reco",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            ykHomeRecoPage
        }
    }
</script>

<style scoped>
    .yk-home-recommen-page{
        width: 100%;
        margin: 0 auto;
    }
    .yk-school-title{
        font-weight: 600;
        box-sizing: border-box;
        padding-left: 0.1rem;
        margin-bottom: 0.1rem;
    }
</style>