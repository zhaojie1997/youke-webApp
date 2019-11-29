const url='http://47.92.132.161:8001/cart/get_cart'

export default{
    async fun(data){
        let res = await fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json; charset=UTF-8"
            }
        })
        return await res.json()
    }
}

