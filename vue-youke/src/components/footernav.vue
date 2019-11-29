<template>
	<div id="footer">
		<ul>
			<li :class="flag==1?'a1':'a'" >
				<router-link tag="p" to='/home' >首页</router-link>
			</li>
			<li :class="flag==2?'b1':'b'" >
				<router-link tag="p" to='/sort'>分类</router-link>
			</li>
			<li :class="flag==3?'c1':'c'" >
				<router-link tag="p" to='/cart'>课程表</router-link>
			</li>
			<li :class="flag==4?'d1':'d'" >
				<router-link tag="p" to='/mine'>我的</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"footernav",
		data(){
            return {
                flag:''
            }
        },
        mounted() {
            if(this.$route.path=='/home'){
                this.flag=1
            }else if(this.$route.path=='/sort'){
                this.flag=2
            }else if(this.$route.path=='/cart'){
                this.flag=3
            }else if(this.$route.path=='/mine'){
                this.flag=4
            }
        }

    }
</script>

<style scoped="scoped">
	#footer {
		border-top: 0.005rem solid rgb(247,247,247);
		background-color: white;
		width: 100%;
		height: 0.5rem;
		position: fixed;
		top: 6.17rem;
		overflow: hidden;
		z-index: 3;
	}
	
	#footer>ul {
		display: flex;
		justify-content: space-around;
	}
	
	#footer li {
		display: block;
		height: 0.5rem;
		width: 0.42rem;
		background-size: 0.25rem 0.25rem;
		background-repeat: no-repeat;
		background-position: center 0.04rem;

	}
	
	#footer li>p {
		font-weight: 500;
		font-size: 0.12rem;
		text-align: center;
		margin-top: 0.3rem;
		line-height: 0.2rem;
	}
	.a {
		background-image: url(../assets/LJimg/footericon1.png);
	}
	.a1{
		background-image: url(../assets/LJimg/footericon1.gif);
	}

	.b {
		background-image: url(../assets/LJimg/footericon2.png);
	}
	.b1{
		background-image: url(../assets/LJimg/footericon2.gif);
	}
	.c {
		background-image: url(../assets/LJimg/footericon3.png);
	}
	.c1 {
		background-image: url(../assets/LJimg/footericon3.gif);
	}
	.d {
		background-image: url(../assets/LJimg/footericon4.png);
	}
	.d1 {
		background-image: url(../assets/LJimg/footericon4.gif);
	}

</style>
