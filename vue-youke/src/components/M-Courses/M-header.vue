<template>
    <div>
        <div class="back">
            <img src="../../assets/L-img/back.png" @click="switchTo('/mine')">
            <p>我的上传</p>
            <img src="../../assets/L-img/upload.png" @click="showPopup">
        </div>
        <van-popup
                v-model="show"
                closeable
                close-icon="close"
                position="bottom"
                :style="{ height: '40%',backgroundColor:'#fbf9f9'}"
        >
            <uploader :options="options" class="uploader-example">

            <uploader-unsupport></uploader-unsupport>
            <uploader-drop>
                <p>将文件拖放到此处进行上传</p>
                <uploader-btn @click="getmsg">选择文件</uploader-btn>
                <uploader-btn :attrs="attrs">选择图片</uploader-btn>
                <uploader-btn :directory="true">选择文件夹</uploader-btn>
            </uploader-drop>
            <uploader-list></uploader-list>
        </uploader>
        </van-popup>
    </div>
</template>

<script>
    import cartsend from '../../api/cartsend555'
    import { Popup } from 'vant';
    export default {
        name: "L-header",
        components:{
            [Popup.name]:Popup
        },
        data() {
            return {
                show: false,
                options: {
                    // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
                    target: 'http://47.92.132.161:8000/youke/auth/file/',
                    testChunks: false,
                    fileParameterName: 'head',
                },
                attrs: {
                    accept: 'image/*'
                },
            }
        },
        methods: {
            switchTo(path){
                this.$router.replace(path)
            },
            showPopup() {
                this.show = true;
            },
            async getmsg(){
                this.msg = await cartsend.fun({
                    "pid": "发送成功"
                });
                window.console.log(this.msg)
            }
        },
    }
</script>

<style scoped>
    .back{
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
        text-align: center;
    }
    .back img{
        width: 7%;
    }
    .back p{
        font-size: 0.2rem;
        width: 100%;
    }
    .uploader-example {
        width: 80%;
        padding: 15px;
        margin: 0.5rem auto 0;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }
    .uploader-drop p{
        color: red;
        font-size: 0.14rem;
        margin-bottom: 0.1rem;
    }
    .uploader-example .uploader-btn {
        margin-right: 0.04rem;
        border-radius: 10%;
        background-color: #aaaaaa;
        color: white;
    }
    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>