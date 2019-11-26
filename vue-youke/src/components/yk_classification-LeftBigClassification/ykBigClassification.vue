<template>
    <ul id="L">
        <li class="asd" v-for="(item,value) in MyName.data.left"  :key="value" :ref="'asd'">{{item.yk_firstclassname}}</li>
    </ul>
</template>
<script>
import index from '../../api/index'
    export default {
        name:"ykBigClassification",
        data(){
            return{
                MyName:"",
                data:'',
            }
        },
        methods:{
            async Home(){
                this.MyName= await index.xixi();
            },
            // handleScroll(){
            //     var scro = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            //     window.console.log(scro)
            //     if(scro < 112.9){
            //         window.console.log("aaaaaaaaaaaaaaaaaaaaaaa")
            //     }
            //     else if(scro >112.9 && scro < 225.8){
            //         window.console.log("vvvvvvvvvvvvvvvvvvvvv")
            //     }else if(scro >225.8 && scro < 338.7){
            //         window.console.log("sssssssssssssssssssssss")
            //     }else if(scro >338.7 && scro < 451.6){
            //         window.console.log("cccccccccccccc")
            //     }else if(scro >451.6 && scro < 564.5){
            //         window.console.log("ddddddddddddddddddd")
            //     }else if(scro >564.5 && scro < 677.4){
            //         window.console.log("eeeeeeeeeeeeee")
            //     }else if(scro >677.4 && scro < 790.3){
            //         window.console.log("ffffffffffff")
            //     }else{
            //         window.console.log("ggggggggggggggg")
            //     }
            // },
            // 点击更换颜色
            // clic(value){
            //     this.scro = value
            //  @scroll="clic(value,item)" :class="{'col':scro==value}"

            // },
            // 锚点链接
            // 112.9
        },
        // mounted(){
        //     window.addEventListener('scroll', this.handleScroll, true); 
        // },
        beforeMount(){
            this.Home()
        }
    }
</script>
<style>
    @import"./yk_BigClassification.css";
</style>