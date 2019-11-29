<template>
<div>
    <div class="back">
        <img src="../assets/L-img/back.png"  @click="goback()">
        <p>课程列表</p>
    </div>
    <ul id="header">
        <li id="plus" @click="goto(0)">价格升序</li>
        <li id="m" @click="goto(1)">价格降序</li>
    </ul>
    <ul id="list">
        <li :key="i" v-for="(n,i) in classInfo">
            <router-link :to="'/gd?pid='+n.id" tag="img"  :src="n.yk_lesson_img"></router-link>
            <!--<img :src="n.yk_lesson_img" alt="">-->
            <div>
                <p id="name">{{n.yk_lesson_name}}</p>
                <p class="present js">{{n.yk_lesson_describe}}</p>
                <p class="job"><span class="type">{{n.yk_lesson_price_type}}</span><span class="chapter">课节:{{n.yk_course_chapter}}</span></p>
                <p id="mony">￥:<span class="present pay">{{n.yk_lesson_price}}</span> <a>购买人数:<span class="present">{{n.yk_buy_amount}}人</span></a></p>
                <p class="teacher">上传者:{{n.yk_teacher_describe}}</p>
            </div>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    name:'class',
    data(){
      return{
          tag:this.$route.query.pid,
          classInfo:[]
      }
    },
    methods:{
        getData(){
            this.$axios.get('http://47.92.132.161:8001/gate/lesson/?secondid='+this.tag).then(res=>{
                window.console.log(res.data.data.data)
                this.classInfo = res.data.data.data

            })
        },
        goto(tag){
            this.$axios.get('http://47.92.132.161:8001/gate/sort/?secondid='+this.tag+'&sortid='+tag).then(res=>{
                window.console.log(res.data.data.data)
                this.classInfo = res.data.data.data
            })
        },
        goback(){
            this.$router.go(-1);
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style scoped>
  @import "../assets/style.css";
    #header{
        position: fixed;
        top: 0.35rem;
        display: flex;
        width: 100%;
        height: 0.3rem;
        font-size: 0.12rem;
        background-color:white;
        padding-top: 0.1rem;
        justify-content: center;
    }
    #header li{
        font-size: 0.12rem;
        width: 20%;
        line-height: 0.3rem;
        text-align: center;
        background-color: rgb(76,217,111);
        margin: 0 0.5rem;
        border-radius: 0.2rem;
    }
    #list{
        width: 100%;
        padding-top: 0.8rem;
    }
    #list li{
        display: flex;
        width: 100%;
        height: 1.3rem;
    }
    #list div{
        width: 2.05rem;
    }
    #name{
        width: 1.5rem;
        font-size: 0.16rem;
        margin-top: 0.05rem;
        line-height: 0.2rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .js{
        font-size: 0.14rem;
        color: gray;
    }
    .js{
        width:1.5rem;
        color: gray;
        line-height: 0.25rem;
        text-align:center;
        border-radius:5px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 0.14rem;
    }
    #list img{
        display: block;
        float: left;
        width: 1.5rem;
        height: 1rem;
        margin: 0.05rem 0.12rem 0 0.12rem;
        background-color: green;
    }
    #mony{
        font-size: 0.14rem;
        color: red;
    }
  #mony a{
      margin-left: 0.2rem;
  }
    .job{
        font-size: 0.12rem;
        margin-bottom: 0.05rem;
    }
    .type{
        background-color: skyblue;
        color: white;
        padding: 0.05rem;
        box-sizing: border-box;
        border-radius: 0.12rem;
    }
    .chapter{
        margin-left: 0.4rem;
    }
    .teacher{
        font-size: 0.12rem;
    }
  .back{
      display: flex;
      justify-content: space-between;
      padding-top: 0.1rem;
      text-align: center;
      background-color: white;
      position: fixed;
      top: 0;
      width: 100%;
  }
  .back img{
      width: 7%;
  }
  .back p{
      font-size: 0.2rem;
      width: 100%;
  }
</style>