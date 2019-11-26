<template>
	<div id="header">
		<span></span><p><span></span><input type="text" name="search" id=""  placeholder="搜索用户,课程,分类"/></p>
	</div>
</template>

<script>
	export default{
		name:"headernav"
	}
</script>

<style scoped="scoped">
	#header {
		width: 100%;
		padding: 0.1rem 0;
		height: 0.35em;
		display: flex;
		justify-content: space-around;
		border-bottom: 0.005rem solid #e9e9e9;
		overflow: hidden;
	}
	
	#header>span {
		display: inline-block;
		width: 0.76rem;
		height: 0.32rem;
		background-image: url(../assets/LJimg/logo1.png);
		background-size: 0.62rem 0.26rem;
		background-repeat: no-repeat;
		background-position: center;
	}
	
	#header>p {
		height: 0.32rem;
		position: relative;
		background-color: white;
		border-radius: 0.16rem;
		overflow: hidden;
	}
	
	#header>p>span {
		display: inline-block;
		position: absolute;
		width: 0.24rem;
		height: 0.24rem;
		top: 0.04rem;
		left: 0.2rem;
		background-image: url(../assets/LJimg/search.png);
		background-size: 0.24rem 0.24rem;
	}
	
	#header input {
		display: block;
		width: 2.7rem;
		height: 0.32rem;
		border: none;
		outline: none;
		color: #bbb;
		text-align: center;
		font-size: 0.14rem;
		background-color: rgb(247, 247, 247);
	}
	
	input::-webkit-input-placeholder {
		color: #aab2bd;
		font-size: 0.14rem;
		line-height: 0.32rem;
		text-align: center;
	}
</style>
