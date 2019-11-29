<template>
    <div class="Z-DA">
        <div class="z-top">
            <div class="z-top-img" @click="settGY('/mine/setting')"><img src="../../../public/ZHimg/229f347eb12e6ecef3db84784f0172c.png" ></div>
            <div class="z-top-div">关于柚课</div>
        </div>
        <div class="z-img">
            <img src="../../../public/ZHimg/b15f253f836626b80795bef1a0d0b41.png" >
        </div>
        <div class="z-text">
            <div class="z-text-t">柚课APP是全球大型的教学课程运营服务平台，在国内拥有
            超过众多的会员，覆盖了众多的群众，任何人都可以上传自己或购买观看他人的教学
            视频。柚课APP是面向任何用户的一项授课软件，实现了跨校，跨专业，随时随地，想
            学就学的快捷方便性。同时柚课App也是一款，兼职软件，可以分享自己的教育、工作、
            学习经验，用视频的方式，售给那些需要的人。
            我们不断努力，让学习更加高效、更加便捷。让教育多一些公平，让学习少一些困惑、
            让学习的快乐与人共享。
            </div>
        </div>
        <div class="z-btoom"><a href="">查看更新日志</a></div>
        <div class="z-bbtoom">version   1.0.0</div>
        <div class="z-cbtoom">Copyright  2019-2020 Youke.All Rights Reserved</div>
        <!--&copy-->
    </div>

</template>

<script>
    export default {
        name: "setting_G",
        methods:{
            settGY(path){
                this.$router.replace(path)
            }
        }
    }
</script>

<style scoped>
    html{
        font-size: 26.67vw;
    }
    body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr{
        margin:0;
        padding:0;
    }
    body{
        font-family: "微软雅黑";
    }
    ul,ol{
        list-style: none;
    }
    a{
        display: inline-block;
        text-decoration: none;
    }
    img{
        border: none;
    }
    i{
        font-style: normal;
    }
    .Z-DA{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .z-top{
        width:3.75rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.16rem;
        color: black;
    }
    .z-top-img{
        width: 0.5rem;
        height: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .z-top-img img{
        width:0.3rem;
        height: 0.3rem;
    }
    .z-top-div{
        font-size: 0.2rem;
        width: 2.8rem;
        height: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .z-img{
        width: 3.75rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .z-img img{
        width: 1.5rem;
        height: 0.6rem;
    }
    .z-text{
        width: 3.75rem;
        color: black;
        font-size: 0.14rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .z-text-t{
        width: 2.7rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
    .z-btoom{
        width:3.75rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .z-btoom a{
        width: 3.75rem;
        display: flex;
        justify-content: center;
        font-size: 0.12rem;
        color: lightgreen;
    }
    .z-bbtoom{
        width: 3.75rem;
        height: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-size: 0.12rem;
        color: gray;
    }
    .z-cbtoom{
        width: 3.75rem;
        height: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-size: 0.12rem;
        color: gray;
    }

</style>