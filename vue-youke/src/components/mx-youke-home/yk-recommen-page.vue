<template>
    <div class="yk-home-recommen">
        <div class="yk-home-item" :key="i" v-for="(n,i) in imgList">
            <a :href="n.src"><img :src="n.img"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "yk-recommen-page",
        data(){
            return{
                imgList:[
                    {
                        img: "./images/timg.jpg",
                        src:"https://www.pku.edu.cn"
                    },
                    {
                        img: "./images/u=3718927820,498552895&fm=26&gp=0.jpg",
                        src:"https://www.nankai.edu.cn"
                    },
                    {
                        img: "./images/timg (1).jpg",
                        src:"http://www.ouc.edu.cn"
                    },
                    {
                        img: "./images/timg (2).jpg",
                        src:"http://www.wust.edu.cn"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .yk-home-item:after{
        /*content: "";*/
        width:2.5rem ;
        height:1.5rem ;
        background-color: #000;;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.4;
    }
    .yk-home-recommen{
        width: 100%;
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        background-color: white;
        padding-right: 0.1rem;
        box-sizing: border-box;
    }
    .yk-home-item{
        width: 2.5rem;
        height: 1.5rem;
        display: inline-block;
        border-radius: 0.1rem;
        margin-left: 0.1rem;
        overflow: hidden;
        position: relative;
    }
    .yk-home-item img{
        width: 100%;
        display: block;
    }
</style>