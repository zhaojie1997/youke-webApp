<template>
	<li id="rb" v-show="tag==id">
		<br>
		<p id="rp">—— {{msg.left[id].yk_firstclassname}} ——</p>
		<ul id="ru">
			<li id="rsl" v-for="(u,i) in info" :key="i" @click="goback(u.id)">
				<img :src="u.secondimage" alt="">
				<p id="rs">{{u.yk_secondclassname}}</p>
			</li>
		</ul>
		<br>
	</li>
</template>
<script>
export default {
	name:'right',
		props:['msg','id','a'],
		data(){
			return{
				info:[],
				tag:''
			}
		},
		beforeMount(){
			for(var i=0;i<=this.msg.all.length;i++){
				if(this.msg.all[i].yk_firstclassid==this.a){
					this.info.push(this.msg.all[i])
				}
			}
		},
	mounted(){
		this.$bus.$on('rshow',(msg)=>{this.tag = msg
		})

	},
	methods:{
goback(sid){
	this.$router.push('/classs?pid='+sid)
}
	}
}
</script>
<style scoped>
	#rb{
		width:100%;
		text-align: center;
	}
	#rp{
		font-size: 0.16rem;
		line-height: 0.6rem;
		text-align: center; 
		width: 100%;
	}
	#ru{
		display: flex;
		flex-wrap: wrap;
	}
	#ru img{
        width: 0.4rem;
        height: 0.4rem;
        display: block;
		border-radius: 0.2rem;
        margin:0.06rem 0 0 0.295rem;
    }
	#rsl{
		width:33.33%;
		height: 0.65rem;
		font-size: 0.12rem;
	}
	
</style>
