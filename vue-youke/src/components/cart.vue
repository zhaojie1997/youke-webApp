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
					<goodslist2 v-for="u in data2.ygm" :key="u.id" :data="u"></goodslist2>
				</div>
				<div id="wgm" v-show="changeflag==true">
					<goodslist1 v-for="u in data1.wgm" :key="u.id" :data="u" :checkallflag="checkallflag"></goodslist1>
					<div id="cost">
						<span :class="checkallflag?'check2':'check1'" @click="a"></span>
						<div id="totalprice">总计：<span>{{total[0]}}</span><span>{{total[1]}}</span></div>
						<div id="discount">折扣：-{{100-data1.discount}}%</div>
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
						<button @click="b()">确认支付</button>
						<button @click="purchaseflag=false">取消</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import cartinfo1 from '../api/cartinfo1.js'
	import cartinfo2 from '../api/cartinfo2.js'
	import cartsend from '../api/cartsend.js'
	import headernav from "./headernav"
	import footernav from "./footernav"
	import goodslist1 from "./carttab/goodslist1"
	import goodslist2 from "./carttab/goodslist2"
	import {
		mapGetters
	} from 'vuex'

	export default {
		name: 'cart',
		data() {
			return {
				changeflag: true,
				checkallflag: false,
				data1: '',
				data2: '',
				purchaseflag: false,
				msg: '',
				discount: '',
				code:'' ,
				sasa:''
			}
		},
		methods: {
			async getdata() {
				this.data1 = await cartinfo1.fun({
					'token': window.localStorage.getItem('token'),
				})
				window.console.log(this.data1.discount)
				this.discount = this.data1.discount
				this.data2 = await cartinfo2.fun({
					'token': window.localStorage.getItem('token'),
				})
			},
			a() {
				this.checkallflag = !this.checkallflag;
				this.$bus.$emit("xx", this.checkallflag);
				window.console.log(11111)
				this.$store.dispatch("upall", this.checkallflag);
			},
			//发送 已经选中的产品编号
			b() {
				let b=''
				b = this.arr.join("-")
				this.$router.push({ path:'/zhifu?pid='+b+'&cost='+this.total[1]+'&from=cart' })
				window.console.log(this.$router)
			},
			async send(){
		
     this.sasa = await cartsend.fun({
					'pid':this.arr,
					'token':window.localStorage.getItem('token')

				})
				window.console.log(this.sasa)
				this.$router.push('/cart') 
			}
		},
		beforeMount() {
			this.getdata();
			this.code=this.$route.query.code
		},
		components: {
			headernav,
			footernav,
			goodslist1,
			goodslist2
		},
		updated() {
			this.$store.dispatch("initdiscount", 100 - this.discount);
		},
		computed: {
			...mapGetters({
				total: 'count',
				checkall: 'a',
				//arr表示此时购物车已经选中的商品
				arr: 'b'
			})
		},
		watch: {
			checkall(n) {
				this.checkallflag = n;
			},
			code(n){
if(n=='200'){

this.send()

				}
			}
		}
	}
</script>

<style scoped="scoped">
	@import '../assets/style.css';

	#Con {
		width: 100%;
		overflow: hidden;
	}

	#con {
		width: 100%;
		height: 6.67rem;
		overflow: auto;
		background-color: white;
		padding-bottom: 0.5rem;
		box-sizing: border-box;
		position: relative;
	}

	#purchase {
		position: absolute;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 6.67rem;
		top: 0;
		left: 0;

	}

	#purchase>div {
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

	#purchase>div>img {
		width: 1rem;
		height: auto;
		position: absolute;
		top: 0.1rem;
		left: 0.1rem;
	}

	#purchase>div>p {
		font-size: 0.16rem;
		font-weight: 400;
		text-align: center;
		line-height: 1.5rem;
	}

	#purchase>div>div>button {
		display: inline-block;
		height: 0.4rem;
		border: none;
		outline: none;
		width: 50%;
		font-size: 0.16rem;
		font-weight: 400;
		color: white;

	}

	#purchase>div>div>button:nth-child(1) {

		background-color: rgb(127, 182, 0);
	}

	#purchase>div>div>button:nth-child(2) {
		background-color: rgb(127, 182, 68);
	}

	#purchase>div>div {
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
