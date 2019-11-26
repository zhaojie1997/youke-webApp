<template>
    <div>
        <M-header></M-header>
        <M-List></M-List>
    </div>
</template>

<script>
    import List from "../../components/M-Courses/M-List"
    import header from "../../components/M-Courses/M-header"
    export default {
        name: "Courses",
        components:{
            "M-header":header,
            "M-List":List
        }
    }
</script>

<style scoped>

</style>