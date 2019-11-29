<template>
    <div>
        <ul class="courses_ul">
            <li>上传课程</li>
        </ul>
        <div class="courses_class">
            <div style="display: flex;width: 90%;justify-content: space-between">
                <img src="../../assets/L-img/222222.png" alt="">
                <div class="courses_con">
                    <p>Java架构师,Java高级|只为培养互联网java架构师[千峰教育]</p >
                    <p class="courses_look"><span>18</span>柚币/节课</p >
                    <p class="courses_look">点击量:<span>5000</span>次</p>
                    <p class="courses_look">购买数量:<span>5000</span>人</p>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "M-List",
        data () {
            return {

                msg:""
            }
        },


    }
</script>

<style scoped>
.courses_ul{
    display: flex;
    font-size: 0.14rem;
    margin-top: 0.2rem;
}
.courses_ul li{
    margin-left: 0.2rem;
    background-color: rgb(76,217,111);
    padding: 0.05rem;
    border-radius: 15%;
}
.courses_class{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.14rem;
    margin-top: 0.1rem;
}
.courses_class img{
    width: 40%;
}
.courses_con{
     width: 57%;
     display: flex;
     flex-wrap: wrap;
    justify-content: space-between;
 }
.courses_look span{
    color: #00B7FF;
}
.courses_look{
    margin-top: 0.05rem;
}

</style>
