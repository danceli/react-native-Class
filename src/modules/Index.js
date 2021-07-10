import { API } from '../utils/config.js';

import HTTP from '../utils/http.js';

class IndexModel extends HTTP {
	getCourseDatas() {
		return new Promise((resolve, reject) => {
			this.fetchGet({
				url: API.getCourseDatas,
				success(res) {
					resolve(res)
				},
				error(err) {
					reject(err)
				}
			})
		})
	}
}

export default IndexModel;