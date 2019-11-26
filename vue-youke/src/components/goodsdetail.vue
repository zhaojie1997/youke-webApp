<template>
	<div id="con">
		<a href="#" id="totop" ref='totop'></a>
		<div id="header">
			<span @click="goback()"></span>
			<span>
			</span>
			<p>
				天天柚课
			</p>
		</div>
		<div id="video">
			<video width="100%" height="100%" controls="controls" id="my-video" poster="../assets/LJ-detail/poster.jpg" style="object-fit:fill;">
				<source src="" type="video/mp4">
				<source src="" type="video/ogg">
				<source src="" type="video/webm">
				<source src="rtmp://47.92.312.161/vod/1.计算机简介.mp4" type="rtmp/clv">
				<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
					<param name="movie" value="myvideo.swf" />
					<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
				</object>
				当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
			</video>
		</div>
		<div class="con">
			<div id="pl">
				<div>
					点击率：<span>{{data.lessonData.lessonClick}}</span>
				</div>
				<div @click="commentflag=!commentflag">
					<span></span><span>999</span>&nbsp;评论
				</div>
				<div @click="thumbsUp">
					<span :class="thumbsUpFlag?'thumbspic1':'thumbspic2'"></span><span>999</span>&nbsp;点赞
				</div>
			</div>
			<div id="comment" class="comment1" v-show="commentflag">
				<p><input type="text" placeholder="每次最多评论120字"><span></span></p>
				<ul>
					<li>
						<p><img src="LJ-detail/p1.jpg" alt="" class="photo"><span class="name">伍六七</span><span class="time">2019-11-23</span></p>
						<p>阿珍爱上了阿强，在一个有星星的夜晚</p>
					</li>
					<li>
						<p><img src="LJ-detail/p2.jpg" alt="" class="photo"><span class="name">鸡大保</span><span class="time"></span></p>
						<p>鸡中霸王</p>
					</li>
				</ul>
				<span>点击加载更多</span>
			</div>
		</div>
		<div id="info">
			<div id="name"><img src="../assets/LJ-detail/playing.gif">
				<p>{{data.lessonData.lessonName}}</p>
			</div>
			<div>
				<div id="price">{{data.lessonData.lessonPrice}}柚币/节</div>
				<div id="num">共{{data.lessonData.lessonContentsNum}}节</div>
				<div id="size">视频大小：{{data.lessonData.lessonVideoSize}}MB</div>
				<div id="buynum">已有{{data.lessonData.buyAmount}}人购买</div>
			</div>
		</div>
		<div id="cart">
			<button type="button" @click="a('是否要加入购物车?')">加入购物车</button><button type="button" @click="a('是否要购买?')">购买</button>
		</div>
		<div class="con">
			<div id="goodsdetail">
				<p id="teacher">{{data.lessonData.teacherDescribe}}</p>
				<p>{{data.lessonData.teacherDescribe}}</p>
			</div>
		</div>
		<div class="con" v-if="data.likeData.length!=0">
			<div id="cnxh">
				<p>猜你喜欢</p>
				<show v-for="u in data.likeData" :key="u.id" :info="u" :bgc="'color:rgb(244,160,27);'"></show>
			</div>
		</div>
		<div class="con">
			<div id="recommend">
				<p>课程推荐</p>
				<show v-for="u in data.recommendData" :key="u.id" :info="u" :bgc="'color:rgb(127, 182, 68);'"></show>
			</div>
		</div>
		<div id="sure" v-if="sure">
			{{prompt}}
			<div><button @click="send">确认</button><button @click="sure=false">取消</button></div>
		</div>
	</div>
</template>

<script>
	import show from "./gdtabs/show"
	import msg from "../assets/s1.json"
	// import getdata from '../api/detail.js'
	import addtocart from '../api/addtocart.js'

	export default {
		name: "goods-detail",
		data() {
			return {
				commentflag: false,
				data: '',
				thumbsUpFlag: false,
				addflag:'',
				sure:false,
				prompt:''
			}
		},
		methods: {
			thumbsUp() {
				this.thumbsUpFlag = !this.thumbsUpFlag
			},
			// async get() {
			// 	var str="lessonId="+this.$route.path
			// 	this.data = await getdata.fun("lessonId=1&uid=1");
			// },
			a(n){
				this.prompt=n;
				this.sure=true;
			},
			async send(){
				this.addflag = await addtocart.fun({
					"uid":"1",
					"pid":this.data.lessonData.lessonId
				});
				window.console.log(this.addflag,this.data.lessonData.lessonId)
				this.sure=false;
			},
            goback(){
                this.$router.go(-1);
            },
		},
		components: {
			show
		},
		beforeMount() {
			this.data=msg
			// this.get()
			
		},
		mounted() {
		
			function navBgc() {
				let toTop = document.getElementById("totop")
				let _top = document.body.scrollTop || document.documentElement.scrollTop;
				if (_top <= 200||_top==0) {
					toTop.style.display = "none"
				} else {
					toTop.style.display = "block"
				}
			}
			
			window.onscroll = function() {
				navBgc();
			}
		}
	}
</script>

<style scoped="scoped">
	@import '../assets/style.css';
	.thumbspic2 {
		background-image: url(../assets/LJ-detail/thumbsup1.png);
	}

	.thumbspic1 {
		background-image: url(../assets/LJ-detail/thumbsup2.png);
	}

	#con {
		width: 100%;
		overflow: auto;
		background-color: white;
		padding-bottom: 0.5rem;
		font-family: -apple-system,Helvetica,sans-serif;
	}

	#totop {
		display: block;
		position: fixed;
		height: 0.35rem;
		width: 0.35rem;
		border-radius: 50%;
		right: 0.1rem;
		top: 5.5rem;
		background-image: url(../assets/LJ-detail/top.png);
		background-size: 0.35rem 0.35rem;
		z-index: 3;
	}

	#header {
		padding-top: 0.05rem;
		width: 100%;
		height: 0.4rem;
		display: flex;
		padding-left: 0.3rem;
		box-sizing: border-box;
		position: relative;
		justify-content: flex-end;
	}

	#header>p {
		font-size: 0.2rem;
		line-height: 0.4rem;
		text-align: center;
		margin-left: 0.2rem;
		color: rgba(127, 182, 68);
		margin-right: 1.2rem;
	}

	#header>span:nth-child(1) {
		display: block;
		height: 0.25rem;
		width: 0.25rem;
		position: absolute;
		border-radius: 50%;
		background-image: url(../assets/LJ-detail/return.png);
		background-size: 0.22rem 0.22rem;
		background-position: center;
		background-repeat: no-repeat;
		top: 0.13rem;
		left: 0.1rem;
		background-color: rgb(244, 160, 27);
	}

	#header>span:nth-child(2) {
		display: block;
		width: 0.8rem;
		height: 0.4rem;
		background-image: url(../assets/LJ-detail/logon.png);
		background-size: contain;
		background-repeat: no-repeat;
		margin-left: 0.1rem;
	}

	#video {
		width: 100%;
		box-sizing: border-box;
		padding: 0.1rem;
	}

	#video>video {
		display: block;
	}

	.con {
		width: 100%;
		padding: 0 0.1rem;
		box-sizing: border-box;
	}

	#pl {
		background-color: rgb(127, 182, 68);
		border-radius: 0.05rem;
		width: 100%;
		height: 0.35rem;
		font-size: 0.12rem;
		color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: space-around;
	}

	#pl>div {
		padding-right: 0.1rem;
		width: 33%;
		height: 0.35rem;
		line-height: 0.35rem;
		border-left: 0.002rem solid rgba(0, 0, 0, 0.5);
	}

	#pl>div:nth-child(1) {
		text-align: center;
	}

	#pl>div:nth-last-child(1) {
		text-align: center;
		border-right: 0.002rem solid rgba(0, 0, 0, 0.5);
		padding-left: 0.35rem;
		position: relative;
	}

	#pl>div:nth-last-child(2) {
		text-align: center;
		border-right: 0.002rem solid rgba(0, 0, 0, 0.5);
		padding-left: 0.35rem;
		position: relative;
	}

	#pl>div:nth-last-child(1)>span:nth-child(1) {
		display: block;
		height: 0.35rem;
		width: 0.35rem;
		position: absolute;
		left: 0.1rem;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 0.25rem 0.25rem;

	}

	#pl>div:nth-last-child(2)>span:nth-child(1) {
		display: block;
		height: 0.35rem;
		width: 0.35rem;
		position: absolute;
		left: 0.1rem;
		background-size: 0.25rem 0.25rem;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(../assets/LJ-detail/comment.png);
	}

	#comment {
		width: 100%;
		position: relative;
		padding-bottom: 0.31rem;
		background-color: rgb(247, 247, 247);
		min-height: 2rem;
		margin-top: 0.1rem;
		z-index: 2;
	}

	::-webkit-input-placeholder { /* WebKit browsers */
		font-size: 0.14rem;
	}
	#comment>p {
		background-color: white;
		border-radius: 0.15rem;
		overflow: hidden;
		width: 2.2rem;
		height: 0.3rem;
		position: relative;
		margin-left: 0.65rem;
		border: 0.005rem solid rgb(0, 0, 0, 0.5);
		padding-right: 0.3rem;
		top: 0.1rem;
	}

	#comment>p>input {
		width: 2rem;
		height: 0.25rem;
		display: block;
		border: none;
		outline: none;
		margin-left: 0.1rem;
		margin-top: 0.025rem;
		font-size: 0.14rem;
		text-align: center;
		line-height: 0.25rem;
	}

	#comment>p>span {
		display: inline-block;
		height: 0.3rem;
		width: 0.3rem;
		position: absolute;
		right: 0.1rem;
		top: 0;
		background-image: url(../assets/LJ-detail/write.png);
		background-size: 0.2rem 0.2rem;
		background-repeat: no-repeat;
		background-position: center;
	}

	#comment>span {
		display: inline-block;
		font-size: 0.16rem;
		border: 0.005rem solid rgba(0, 0, 0, 0.5);
		text-align: center;
		line-height: 0.25rem;
		position: absolute;
		bottom: 0.1rem;
		left: 1.22rem;
		width: 1.1rem;
		height: 0.25rem;
		border-radius: 0.125rem;
		color: black;
		background-color: ;
	}

	#comment>ul {
		margin-top: 0.2rem;
	}

	#comment>ul>li {
		margin: 0.1rem 0;
		border: 0.005rem solid rgba(0, 0, 0, 0.3);
		padding: 0.1rem;

	}

	#comment>ul>li>p:nth-child(1) {
		display: flex;
	}

	#comment>ul .photo {
		width: 0.4rem;
		height: 0.4rem;
	}

	#comment>ul .name {
		font-size: 0.2rem;
		padding-left: 0.1rem;
		line-height: 0.4rem;
	}

	#comment>ul .time {
		font-size: 0.12rem;
		padding-left: 0.1rem;
		line-height: 0.5rem;
	}

	#comment>ul>li>p:nth-last-child(1) {
		font-size: 0.14rem;
		line-height: 0.18;
		padding: 0.1rem;
	}

	#info {
		margin-top: 0.1rem;
		padding: 0.1rem;
		overflow: hidden;
		border-radius: 0.08rem;
		border-bottom: 0.005rem solid rgba(0, 0, 0, 0.3);
	}

	#name {
		width: 100%;
		box-sizing: border-box;
		height: 0.3rem;
		padding-left: 0.3rem;
		position: relative;
	}

	#name>p {
		width: 100%;
		padding-left: 0.1rem;
		height: 0.3rem;
		font-size: 0.18rem;
		line-height: 0.3rem;
	}

	#name>img {
		position: absolute;
		display: block;
		height: 0.3rem;
		width: 0.3rem;
		left: 0;
	}

	#info>div {
		margin: 0.1rem 0;
		display: flex;
		justify-content: space-around;
	}

	#info>div>div {
		/* color:rgb(244,160,27); */
		height: 0.2rem;
		line-height: 0.2rem;
		font-size: 0.14rem;
		text-align: left;
	}

	#cart {
		top: 5.9rem;
		position: fixed;
		padding: 0.15rem;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		z-index: 3;
	}

	#cart>button {
		display: block;
		border: none;
		outline: none;
		height: 0.42rem;
		width: 1.5rem;
		color: white;
		line-height: 0.42rem;
		font-size: 0.16rem;
		font-weight: 400;
	}

	#cart>button:nth-child(1) {
		background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
		border-top-left-radius: 0.05rem;
		border-bottom-left-radius: 0.05rem;
	}

	#cart>button:nth-child(2) {
		background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
		border-top-right-radius: 0.05rem;
		border-bottom-right-radius: 0.05rem;
	}

	#goodsdetail {
		margin: 0.1rem 0;
	}

	#goodsdetail>#teacher {
		font-size: 0.18rem;
		text-align: left;
		height: 0.25rem;
		line-height: 0.25rem;
		margin-bottom: 0.05rem;
	}

	#teacher+p {
		font-size: 0.14rem;
		line-height: 0.21rem;
		text-indent: 2em;
	}


	#cnxh {
		padding: 0.1rem 0;
		width: 100%;
		margin: 0.2rem 0;
		border: 0.005rem solid rgb(244, 160, 27);
		border-radius: 0.05rem;
	}

	#cnxh>p {
		width: 100%;
		font-size: 0.18rem;
		line-height: 0.2rem;
		text-align: left;
		padding-left: 0.1rem;
		color: rgb(244, 160, 27);
		margin-top: 0.05rem;
		margin-bottom: 0.15rem;
	}

	#recommend {
		padding: 0.1rem 0;
		width: 100%;
		margin: 0.2rem 0;
		border: 0.005rem solid rgb(127, 182, 68);
		border-radius: 0.05rem;
	}

	#recommend>p {
		width: 100%;
		color: rgb(127, 182, 68);
		font-size: 0.18rem;
		line-height: 0.2rem;
		text-align: left;
		padding-left: 0.1rem;
		margin-top: 0.05rem;
		margin-bottom: 0.15rem;
	}

	@import '../assets/style.css';

	#cnxh .price {
		color: rgb(244, 160, 27);
	}

	#recommend .price {
		color: rgb(127, 182, 68);
	}
	#sure{
		background-color: white;
		height: 1.5rem;
		width: 2.6rem;
		position: fixed;
		top: 2rem;
		left: 0.525rem;
		border-radius: 0.08rem;
		border: 0.005rem solid rgba(0,0,0,0.4);
		box-sizing: border-box;
		overflow: hidden;
		font-size: 0.14rem;
		text-align: center;
		line-height: 1rem;
		font-family: -apple-system,Helvetica,sans-serif;
	}
	#sure>div{
		position: absolute;
		bottom: 0;
		display: flex;
		height: 0.5rem;
		width: 100%;
	}
	#sure>div>button{
		width: 50%;
		height: 0.5rem;
		border: none;
		outline: none;
		font-size: 0.14rem;
		font-weight: 400;
		text-align: center;
		line-height: 0.5rem;
	}
	#sure>div>button:nth-child(1){
		background-color: rgb(127, 182, 68);
	}
	#sure>div>button:nth-child(2){
		background-color: rgb(244,160,27);
	}
</style>
