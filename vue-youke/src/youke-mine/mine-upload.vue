<template>
    <div class='myYouke'>
        <mine-heade></mine-heade>
        <mine-center></mine-center>
        <mine-item></mine-item>
    </div>
</template>

<script>

import Heade from './components/heade.vue'
import Center from './components/center.vue'
import Item from './components/items.vue'

export default{
    components:{
        "mine-heade": Heade,
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