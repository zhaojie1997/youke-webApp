const url='http://47.92.132.161:8001/cart/buy_lesson'

export default {
	async fun(data) {
		let res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		return await res.json()
	}
}
