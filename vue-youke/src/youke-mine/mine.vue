<template>
    <div class='myYouke'>
        <mine-head></mine-head>
        <mine-center></mine-center>
        <mine-item></mine-item>
        <footernav></footernav>
    </div>
</template>

<script>

import Head from './components/head.vue'
import Center from './components/center.vue'
import Item from './components/items.vue'
import footernav  from '../components/footernav'
export default{
    components:{
        "mine-head": Head,
        "mine-center": Center,
        "mine-item": Item,
        footernav
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