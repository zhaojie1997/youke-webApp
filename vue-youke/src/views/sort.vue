<template>
	<div>
		<headernav></headernav>
	<div id="con" v-if="msg.data && msg.data.left">
		<div id="Lbox">
			<left  :msg="msg" @xx="del(i)" ></left>
		</div>
		<ul id="Rbox">
			<right v-for="(u,i) in msg.data.left" :msg="msg.data" :key="u.id" :id="i" :a="u.id" ref="rh"></right>
		</ul>
		<footernav></footernav>
	</div>
	</div>
</template>
<script>
import footernav from "../components/footernav"
import index from "../api/index"
import left from "../components/sorttabs/left"
import right from "../components/sorttabs/right"
import headernav from"../components/headernav"

export default {
	name:"sort",
		data(){
			return {
				msg:'',
				left:[],
				index:''
			}
		},
		components:{
			right,
			left,
            footernav,
			headernav
		},
		methods:{
            async Home(){
                this.msg= await index.xixi()
			},
			scro(){
				let scro = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				window.console.log(scro);
			},
            del(i){

                window.console.log(i)
            }
        },
		beforeMount(){
			this.Home();


		},
		mounted(){
           window.addEventListener("scroll",this.scro,false)

        },
}
</script>
<style>
	@import '../assets/style.css';
	#yk_classification{
		width: 100%;
		height: 100%;
		/* height: 6.67rem; */
		/* overflow: auto; */
		background-color: white;
		padding-bottom: 0.5rem; 
	}
	#Lbox{	
		position: fixed;
		width: 0.8rem;
		float: left;
		height: 4.88rem;
        /*margin-top: 0.5rem;*/
	}
	#Rbox{
        width:2.9rem;
        font-size: 0.12rem;
        margin:0.1rem 0 0 0.8rem;
        padding-bottom: 2rem;
	}
</style>
