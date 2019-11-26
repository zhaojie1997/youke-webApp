<template>
    <div class="mua">
        <ul>
            <li @click="muaway=true" v-show="muaway==true"><a style="color: #FF9800">短信注册</a></li>
            <li @click="muaway=true" v-show="muaway==false"><a>短信注册</a></li>

            <li @click="muaway=false" v-show="muaway==true"><a>用户名注册</a></li>
            <li @click="muaway=false" v-show="muaway==false"><a style="color: #FF9800">用户名注册</a></li>
        </ul>
        <Rtele v-show="muaway==true"></Rtele>
        <Ruser v-show="muaway==false"></Ruser>
    </div>
</template>

<script>
    import Rtele from './Rtele'
    import Ruser from './Ruser'

    export default {
        name: "Rformes",
        components: {Ruser,Rtele},

        data () {
            return {
                muaway: true, // true代表短信登陆, false代表密码

            }
        },
    }
</script>

<style scoped>
    ul{
        font-size: 0.14rem;
        display: flex;
        justify-content: center;
        margin-top: -38px;
    }
    li{
        margin: 0 .34rem;
    }
</style>