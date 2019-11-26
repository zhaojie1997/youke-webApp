<template>
	<div id="Con">
		<div id="con">
			<headernav></headernav>
			<div id="main">
				<div id="tabs">
					<div>
						<span @click="changeflag=false" :class="changeflag?'change2':'change1'">已购买</span></div>
					<div>
						<span @click="changeflag=true" :class="changeflag?'change1':'change2'">未购买</span></div>
				</div>
				<div id="ygm" v-show="changeflag==false">
					
					<goodslist2 v-for="u in data.ygm" :key="u.id" :data="u"></goodslist2>
				</div>
				<div id="wgm" v-show="changeflag==true">
					<goodslist1 v-for="u in data.wgm" :key="u.id" :data="u" :checkallflag="checkallflag"></goodslist1>
					<div id="cost">
						<span :class="checkallflag?'check2':'check1'" @click="a()"></span>
						<div id="totalprice">总计：<span>{{total[0]}}</span><span>{{total[1]}}</span></div>
						<div id="discount">折扣：-{{data.discount}}%</div>
						<button type="button" @click="purchaseflag=true;">点击购买</button>
					</div>
				</div>
			</div>
			<footernav></footernav>
			<div id="purchase" v-show="purchaseflag">
				<div>
					<img src="../assets/LJimg/logo1.png">
					<p>总计：{{total[1]}}</p>
					<div>
						<button @click="getmsg">确认支付</button>
						<button @click="purchaseflag=false">取消</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import cartinfo from '../api/cartinfo.js'
	import cartsend from '../api/cartsend.js'
	import headernav from "./headernav"
	import footernav from "./footernav"
	import goodslist1 from "./carttab/goodslist1"
	import goodslist2 from "./carttab/goodslist2"
	import { mapGetters } from 'vuex'

	export default {
		name: 'cart',
		data() {
			return {
				changeflag: true,
				checkallflag: false,
				data: '',
				purchaseflag:false,
				msg:''
			}
		},
		methods: {
			//获取购物车信息
			async getdata() {
				this.data = await cartinfo.cartinfo();
			},
			//点击购买时 发送的数据
			async getmsg(){
				this.msg= await cartsend.fun({
					"pid":this.arr,
					"cost":this.total[1]
				});
				window.console.log(this.msg);
				// location.reload();
				this.purchaseflag=false;
			},
			a(){
				
				// this.checkallflag1=this.checkallflag;
				this.checkallflag=!this.checkallflag;
				this.$eventBus.$emit("xx",this.checkallflag);
				// this.checkallflag1=this.checkallflag;
			}
		},
		beforeMount() {
			this.getdata();
		},
		components: {
			headernav,
			footernav,
			goodslist1,
			goodslist2
		},
		mounted(){
			this.$store.dispatch("initdiscount","20");
			window.console.log(this.data);
		},
		computed:{
			...mapGetters({
				total:'count',
				checkall:'a',
				//arr表示此时购物车已经选中的商品
				arr:'b' 
			})
		},
		watch:{
			checkall(n){
				this.checkallflag=n;
			}
		}
	}
</script>

<style scoped="scoped">
	@import '../assets/style.css';
	#Con{
		width: 100%;
		overflow: hidden;
	}
   #con {
	width: 100%;
	height: 6.67rem;
	overflow:auto;
	background-color: white;
	padding-bottom: 0.5rem;
	box-sizing: border-box;
	position: relative;
    }
#purchase{
	position: absolute;
	overflow: hidden;
	background-color: rgba(0,0,0,0.5);
	width: 100%;
	height: 6.67rem;
	top: 0;
	left: 0;
	
}
#purchase>div{
	height: 1.5rem;
	width: 2rem;
	background-color: white;
	
	position: absolute;
	top: 2rem;
	left: 0.875rem;
	border-radius: 0.15rem;
	overflow: hidden;
	position: relative;
}
#purchase>div>img{
	width: 1rem;
	height: auto;
	position: absolute;
	top: 0.1rem;
	left: 0.1rem;
}
#purchase>div>p{
	font-size: 0.16rem;
	font-weight: 400;
	text-align: center;
	line-height: 1.5rem;
}
#purchase>div>div>button{
	display: inline-block;
	height: 0.4rem;
	border: none;
	outline: none;
	width: 50%;
	font-size: 0.16rem;
	font-weight: 400;
	color: white;
	
}
#purchase>div>div>button:nth-child(1){
	
	background-color:rgb(127, 182,0);
}
#purchase>div>div>button:nth-child(2){
	background-color:rgb(127, 182, 68);
}
#purchase>div>div{
	width: 100%;
	display: flex;
	position: absolute;
	bottom: 0;
}
	.change1 {
		color: rgb(127, 182, 68);
		border-bottom: 0.02rem solid rgb(127, 182, 68);
	}

	.cahnge2 {
		color: rgba(0, 0, 0, 0.6);
	}

	.check1 {
		background-image: url(../assets/LJimg/check.png);
	}

	.check2 {
		background-image: url(../assets/LJimg/checked.png);
	}

	#main {
		width: 100%;
		background-color: white;
		overflow: hidden;
	}

	#tabs {
		width: 100%;
		overflow: hidden;
		height: 0.44rem;
		display: flex;
	}

	#tabs>div {
		width: 50%;
		height: 0.44rem;
		font-size: 0.18rem;
		text-align: center;
		line-height: 0.44rem;

	}

	#tabs>div>span {
		display: inline-block;
		height: 0.44rem;
		box-sizing: border-box;

	}

	#ygm {
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}



	#wgm {
		width: 100%;
		margin-top: 0.15rem;
		overflow: hidden;
		box-sizing: border-box;
	}

	#cost {
		background-color: white;
		margin-top: 0.1rem;
		width: 100%;
		height: 0.5rem;
		background-color: white;
		border-top: 0.02rem solid rgb(247, 247, 247);
		border-bottom: 0.02rem solid rgb(247, 247, 247);
		display: flex;
		justify-content: space-around;
		padding-left: 0.25rem;
		box-sizing: border-box;
		position: relative;
	}

	#cost>span {
		display: block;
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		background-size: 0.25rem 0.25rem;
		top: 0.125rem;
		left: 0.025rem;
	}

	#cost>div {
		font-size: 0.16rem;
		line-height: 0.5rem;
	}

	#totalprice {
		margin-left: 0.1rem;
		font-weight: 400;
		display: flex;
	}

	#totalprice>span:nth-child(1) {
		display: inline-block;
		height: 0.5rem;
		line-height: 0.5rem;
		color: red;
		text-decoration: line-through;
	}

	#totalprice>span:nth-child(2) {
		color: red;
		display: inline-block;
		height: 0.5rem;
		line-height: 0.5rem;
		margin-left: 0.1rem;
	}

	#discount {
		color: rgb(127, 182, 68);
	}

	#cost>button {
		font-size: 0.16rem;
		line-height: 0.5rem;
		font-weight: 400;
		color: white;
		outline: none;
		border: none;
		background-color: rgb(127, 182, 68);
		border-radius: 0.08rem;
	}
</style>
