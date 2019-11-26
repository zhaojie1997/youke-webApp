<template>
    <div class='myYouke'>
        <mine-header></mine-header>
        <mine-center></mine-center>
        <mine-item></mine-item>
    </div>
</template>

<script>

import Header from './components/header.vue'
import Center from './components/center.vue'
import Item from './components/items.vue'

export default{
    components:{
        "mine-header": Header,
        "mine-center": Center,
        "mine-item": Item
    }
}
</script>

<style scoped>
    @import '../assets/css/common.css';
    @import '../assets/css/iconfont.css';
    .myYouke{
        font-size:0.16rem;
    }
</style>