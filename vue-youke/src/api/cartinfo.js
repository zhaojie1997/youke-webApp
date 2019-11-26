const BASRURL ="http://localhost:3000"

const cart = `${BASRURL}/cart`

export default {
    async cartinfo(){
        let res =await fetch(cart)
        return await res.json()
    }
}

// fetch('https://api.myjson.com/bins/of6pw')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });
// 调用fetch函数，传入接口url，然后返回一个promise
// （response），为了获取JSON的内容，我们需要使用 json()方法，
// 这个方法返回的也是一个promise。