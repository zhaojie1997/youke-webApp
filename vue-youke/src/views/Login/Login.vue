<template>
    <div>
        <L-header></L-header>
        <L-list></L-list>
    </div>
</template>

<script>
    import list from '../../components/M-Login/L-list'
    import header from '../../components/M-Login/L-header'
    export default {
        name: "Login",
        components: {
            'L-header':header,
            'L-list':list
        }
    }
</script>

<style scoped>
   @import "../../assets/denglu.css";

</style>