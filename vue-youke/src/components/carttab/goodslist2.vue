<template>
	<div class="goodslist">
		<div>
			<div>
				<img :src="data.yk_lesson_img" alt="">
			</div>
			<div>
				<p class="title">{{data.yk_lesson_name}}</p>
				<p class="detail">{{data.yk_course_chapter}}</p>
			</div>
		</div>
		<p>已完成：<span class="process">{{data.yk_lesson_price}}</span></p>
	</div>
</template>

<script>
	export default {
		name: 'goodslist1',
		data() {
			return {

			}
		},
		props:['data']
	}
</script>

<style scoped="scoped">
	.goodslist {
		margin-top: 0.06rem;
		width: 100%;
		box-sizing: border-box;
		padding: 0.1rem;
		height: 1.2rem;
		overflow: hidden;
		box-sizing: border-box;
	}

	.goodslist>div {
		display: flex;
	}

	.goodslist>div>div>img {
		display: block;
		width: 1.54rem;
		height: 0.86rem;
	}

	.title {
		padding: 0.05rem;
		width: 1.8rem;
		height: 0.4rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 0.16rem;
		line-height: 0.21rem;
	}

	.detail {
		margin-top: 0.03rem;
		display: block;
		width: 1.7rem;
		padding: 0.05rem;
		font-size: 0.12rem;
		background-color: rgb(247, 247, 247);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.goodslist>p {
		margin-top: 0.05rem;
		height: 0.22rem;
		width: 100%;
		font-size: 0.16rem;
		line-height: 0.22rem;
		text-align: center;
		color: rgb(127, 182, 68);
		font-weight: 500;
	}
</style>
