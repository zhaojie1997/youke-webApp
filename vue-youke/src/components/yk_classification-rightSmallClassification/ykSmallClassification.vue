<template>
    <ul id="stitle" style="height:900px">
        <!-- 少儿童书 -->
        <p :key="tit.id" v-for="tit in Aarr">—— {{tit.yk_firstclassname}} ——</p>
        <li class="childrens" :key="asd" v-for="(item,asd) in arrA">
           <a href="" :class="qwe == true ? qwe :''"> 
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
        <!-- 文化教育 -->
        <p :key="tit.id" v-for="tit in Barr">—— {{tit.yk_firstclassname}} ——</p>        
        <li class="edus" :key="item.id" v-for="item in arrB">
            <a href="">
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
        <!-- 文学小说 -->
        <p :key="tit.id" v-for="tit in Carr">—— {{tit.yk_firstclassname}} ——</p>        
        <li class="edus" :key="item.id" v-for="item in arrC">
            <a href="">
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
        <!-- 人文社科 -->
        <p :key="tit.id" v-for="tit in Darr">—— {{tit.yk_firstclassname}} ——</p>        
        <li class="edus" :key="item.id" v-for="item in arrD">
            <a href="">
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
        <!-- 科技教育 -->
        <p :key="tit.id" v-for="tit in Earr">—— {{tit.yk_firstclassname}} ——</p>        
        <li class="edus" :key="item.id" v-for="item in arrE">
            <a href="">
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
        <!-- 艺术教育 -->
        <p :key="tit.id" v-for="tit in Farr">—— {{tit.yk_firstclassname}} ——</p>        
        <li class="edus" :key="item.id" v-for="item in arrF">
            <a href="">
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
        <!-- 休闲文化 -->
        <p :key="tit.id" v-for="tit in Garr">—— {{tit.yk_firstclassname}} ——</p>        
        <li class="edus" :key="item.id" v-for="item in arrG">
            <a href="">
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
        <!-- 舌尖文化 -->
        <p :key="tit.id" v-for="tit in Harr">—— {{tit.yk_firstclassname}} ——</p>        
        <li class="edus" :key="item.id" v-for="item in arrH">
            <a href="">
                <img :src="item.secondimage" alt="">
                {{item.yk_secondclassname}}
            </a>
        </li>
    </ul>
</template>
<script>    
    import index from '../../api/index'
    export default {
        name:"ykSmallClassification",
        data(){
           return{
               MyName:"",
               arrA:[],
               Aarr:[],
               arrB:[],
               Barr:[],
               arrC:[],
               Carr:[],
               arrD:[],
               Darr:[],
               arrE:[],
               Earr:[],
               arrF:[],
               Farr:[],
               arrG:[],
               Garr:[],
               arrH:[],
               Harr:[],
               arrI:[],
               Iarr:[],
                data:''
           }
        },
        methods:{
            async Home(){
                this.MyName= await index.xixi()
                this.Aarr = this.MyName.data.left.slice(0,1);
                this.arrA = this.MyName.data.children.slice(0,6);
                // // 文化教育
                this.Barr = this.MyName.data.left.slice(1,2);
                this.arrB = this.MyName.data.children.slice(6,12);
                // // 文学小说
                this.Carr = this.MyName.data.left.slice(2,3);
                this.arrC = this.MyName.data.children.slice(12,16);
                // // 人文社科
                this.Darr = this.MyName.data.left.slice(3,4);
                this.arrD = this.MyName.data.children.slice(16,22);
                // // 科技教育
                this.Earr = this.MyName.data.left.slice(4,5);
                this.arrE = this.MyName.data.children.slice(22,26);
                // // 艺术教育
                this.Farr = this.MyName.data.left.slice(5,6);
                this.arrF = this.MyName.data.children.slice(26,29);
                // // 休闲文化
                this.Garr = this.MyName.data.left.slice(6,7);
                this.arrG = this.MyName.data.children.slice(29,35);
                // // 舌尖文化
                this.Harr = this.MyName.data.left.slice(7,8);
                this.arrH = this.MyName.data.children.slice(35,43);
            },
            handleScroll(){
                var scro = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    // window.console.log(scro)
                // var childrens = document.getElementsByClassName(".childrens")
                if(scro > 10){
                    this.qwe==true
                }else{
                   this.qwe==false
                }
                // else if(scro >112.9 && scro < 225.8){
                //     window.console.log("vvvvvvvvvvvvvvvvvvvvv")
                // }else if(scro >225.8 && scro < 338.7){
                //     window.console.log("sssssssssssssssssssssss")
                // }else if(scro >338.7 && scro < 451.6){
                //     window.console.log("cccccccccccccc")
                // }else if(scro >451.6 && scro < 564.5){
                //     window.console.log("ddddddddddddddddddd")
                // }else if(scro >564.5 && scro < 677.4){
                //     window.console.log("eeeeeeeeeeeeee")
                // }else if(scro >677.4 && scro < 790.3){
                //     window.console.log("ffffffffffff")
                // }else{
                //     window.console.log("ggggggggggggggg")
                // }
                // window.console.log(e.value)
            },
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll, true); 
        },
        beforeMount(){
            this.Home()
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>
<style>
    @import"./yk_SmallClassification.css";
</style>