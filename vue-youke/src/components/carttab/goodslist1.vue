<template>
	<div class="goodslist">
		<span :class="checkflag?'check2':'check1'" @click="a()">
		</span>
		<div>
			<div><img :src="data.yk_lesson_img"></div>
			<div>
				<p class="goodsinfo">{{data.yk_lesson_name}}<br>{{data.yk_lesson_name}}</p>
				<p class="price">￥：<span>{{data.yk_lesson_price}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'goodslist1',
		data() {
			return {
				checkflag: false
			}
		},
		methods: {
			a() {
				this.checkflag = !this.checkflag;
				this.$store.dispatch("up",{
					'pid': this.data.id,
					'checkflag':this.checkflag
				})
			}
		},
		props: ["checkallflag","data"],
		watch: {
			checkallflag() {
				this.$store.dispatch("up",{
					'pid': this.data.pid,
					'checkflag':this.checkflag
				})
				
			},
			checkflag(){
				this.$store.dispatch("up",{
					'pid': this.data.pid,
					'checkflag':this.checkflag
				})
				
			}
		},
		mounted() {
			this.$bus.$on("xx", (a) => {
				this.checkflag = a;
			})
			this.$store.dispatch("act", {
				'pid': this.data.id,
				'price': this.data.yk_lesson_price,
				'checkflag':this.checkflag
			});
		}
	}
</script>

<style scoped="scoped">
	.check1 {
		background-image: url(../../assets/LJimg/check.png);
	}

	.check2 {
		background-image: url(../../assets/LJimg/checked.png);
	}

	.goodslist {
		width: 100%;
		height: 1rem;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.goodslist>div>div>img {
		display: block;
		width: 1.54rem;
		height: 0.86rem;
		box-sizing: border-box;
		margin-left: 0.3rem;
	}

	.goodslist>div {
		display: flex;
	}

	.goodsinfo {
		padding: 0.05rem;
		width: 1.8rem;
		height: 0.38rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-size: 0.14rem;
		line-height: 0.15rem;
	}

	.price {
		padding: 0.05rem;
		color: red;
		font-size: 0.18rem;
		text-align: center;
	}

	.goodslist>span {
		display: inline-block;
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		top: 0.25rem;
		left: 0.025rem;
		background-size: 0.25rem 0.25rem;
	}
</style>
