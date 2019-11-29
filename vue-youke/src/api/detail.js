
export default{
	async fun(data){
		var req = new Request('http://47.92.132.161:8000/youke/lesson/detail?'+data, {method: 'GET', cache: 'reload'});
		let res= await fetch(req);
		return await res.json();
		
	}
}

