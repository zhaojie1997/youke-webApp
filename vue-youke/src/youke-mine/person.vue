<template>
    <div class="person">
        <form>
            <div class="head">
                <i class="iconfont" @click="switchTo()">&#xe62d;</i>
                <span>个人信息</span>
            </div> 
            <div class="circle">
                <van-uploader :after-read="onRead" accept="image/*" multiple>
                    <img :src="head" ref="goodsImg" class="head-img"/>
                </van-uploader>
            </div>
            <div class="item">
                <div>昵称<input type="text" v-model="nikname"></div>
                <div>性别<input type="text" v-model="sex"></div>
                <div>年龄<input type="text" v-model="age"></div>
                <div>职业<input type="text" v-model="career"></div>
                <div>真实姓名<input type="text" v-model="name"></div>
                <div>兴趣爱好<input type="text" v-model="hobby"></div>
                <div>个性签名<input type="text" v-model="signature"></div>
            </div>
        </form>
        <input type="submit" @click="axios_get" value="确认修改" class="btn">
    </div>
</template>

<script>
import mind from '../api/mind'
export default{
    data(){
        return{
            head: require('../assets/img/head.jpg'),
            nikname: "",
            sex: "",
            age: "0",
            career: "选择职业",
            name: "",
            hobby: "你的爱好",
            signature: "此人太懒,什么都没留下...",
            data:""
        }
    },
    methods: {
        //选择图片后执行
        onRead(file) {
            //console.log(file);
            //将原图片显示为选择的图片
            this.$refs.goodsImg.src = file.content;
        },
        async get() {
            let id = localStorage
            this.data = await mind.fun(id.token);
            window.console.log(this.data);
            this.sex = this.data.data.data.sex
            this.nikname = this.data.data.data.nikname
            this.age = this.data.data.data.age
            this.career = this.data.data.data.career
            this.name = this.data.data.data.name
            this.hobby = this.data.data.data.hobby
            this.signature = this.data.data.data.signature
        },
        switchTo(){
            this.$router.go(-1);
        },
        axios_get(){
            // if(this.sex == "男" || this.sex == "女"){
            //     return
            // }else if(this.age == Number){
            //     return
            // }
          this.$axios({
              url:'http://47.92.132.161:8000/youke/auth/in_for/',
              method:'POST',
              data:{
                  "head":this.head,
                  "nikname":this.nikname,
                  "name":this.name,
                  "sex":this.sex,
                  "age":this.age,
                  "career":this.career,
                  "hobby":this.hobby,
                  "signature":this.signature,
                  "token":localStorage.getItem('token')
              },
              headers: {'Content-Type': 'application/json'},
          }).then(res=>{
              window.console.log(res.data)
              window.console.log(this.nikname)
              window.console.log(this.name)
              window.console.log(this.age)
              window.console.log(this.career)
              window.console.log(this.hobby)
              window.console.log(this.signature)
          })
        }

    },
    beforeMount(){
        this.get()
    }

}
</script>

<style scoped>
    .person{
        position: relative;
        font-size: 0.16rem;
    }
    .head{
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #efefef;
    }
    .head i{
        transform: rotateZ(180deg);
        font-size: 0.24rem;
        float: left;
        margin-left: 0.06rem;
    }
    .head span{
        margin-left: 1.2rem;
    }
    .circle{
        margin: 0.1rem 0.2rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        background-color: #efefef;
        text-align: center;
        line-height: 0.8rem;
    }
    .circle img{
        width: 0.8rem;
        border-radius: 50%;
    }
    .item{
        padding-left: 0.2rem;
    }
    .item div{
        text-align: left;
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: 0.01rem solid #e0e0e0;
    }
    .item input{
        width: 1.6rem;
        height: 0.36rem;
        font-size: 0.16rem;
        padding-left: 0.2rem;
        border: none;
    }
    .btn{
        position: absolute;
        top: 5.4rem;
        left: 1.2rem;
        width: 1.4rem;
        height: 0.3rem;
        color: #fff;
        background-color: #ee6700;
        border: none;
        border-radius: 0.2rem;
    }
</style>