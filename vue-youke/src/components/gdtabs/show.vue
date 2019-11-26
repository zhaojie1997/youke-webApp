<template>
	<div class="show">
		<img :src="info.lessonImg" alt="">
		<div>
			<p class="title">{{info.lessonName}}</p>
			<p class="detail">{{info.teacherDescribe}}</p>
			<p class="price" :style="bgc">柚币：{{info.lessonPrice}}/节 {{info.priceType}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "show",
		props:["info","bgc"],
		data(){
			return{
				priceflag:true
			}
		}
	}
</script>

<style>
	.show {
		display: flex;
		margin-top: 0.1rem;
		margin-bottom: 0.15rem;
		border-bottom: 0.005rem solid rgba(0, 0, 0, 0.1);
	}

	.show>img,
	.show>div {
		width: 50%;
	}

	.show>img {
		margin: 0.1rem;
	}

	.title {
		font-size: 0.18rem;
		text-align: center;
		margin-bottom: 0.05rem;
	}

	.detail {
		font-size: 0.12rem;
		margin-bottom: 0.05rem;
		line-height: 0.18rem;
		padding-right: 0.05rem;
	}

	.price {
		text-align: center;
		font-size: 0.14rem;
		font-weight: 400;
		margin-bottom: 0.05rem;
	}
</style>
