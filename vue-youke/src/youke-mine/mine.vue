<template>
    <div class="bigcon">
    <div class='myYouke'>
        <mine-head :msg="data.data.msg"></mine-head>
        <mine-center></mine-center>
        <mine-item :integral="integral"></mine-item>
        <footernav></footernav>
    </div>
    </div>
</template>

<script>
import integral from "../api/integral"
import mind from '../api/mind'
import Head from './components/head.vue'
import Center from './components/center.vue'
import Item from './components/items.vue'
import footernav  from '../components/footernav'
export default{
    data(){
        return{
            data:"",
            integral:""
        }
    },
    components:{
        "mine-head": Head,
        "mine-center": Center,
        "mine-item": Item,
        footernav
    },
    methods:{
        async get() {
            let id = localStorage
            this.data = await mind.fun(id.token);
            this.data = await integral.fun(id.token);
            window.console.log(this.data);
            window.console.log(this.data);
            if(localStorage.getItem("token") != null){
                this.integral=this.data.data.data.integral
            }else {
                this.integral=0
            }
        }

    },
    beforeMount(){
        this.get()
    }


}
</script>

<style scoped>
    @import '../assets/css/common.css';
    @import '../assets/css/iconfont.css';
    .myYouke{
        font-size:0.16rem;

    }
    .bigcon{
        overflow: hidden;
    }
</style>