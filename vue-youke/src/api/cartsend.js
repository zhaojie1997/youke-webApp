const url='https://jsonplaceholder.typicode.com/posts'

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
