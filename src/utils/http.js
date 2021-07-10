
class HTTP {
	fetchGet(options) {
		return fetch(options.url)
			.then(response => response.json())
			.then(res => {
				options.success(res);
			})
			.catch(err => {
				options.error(err)
			})
	}
}

export default HTTP;