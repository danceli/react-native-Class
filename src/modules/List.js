import { API } from '../utils/config.js';
import HTTP from '../utils/http.js';


class ListModel extends HTTP {

	getCourseFields() {
		return new Promise((resolve, reject) => {
			this.fetchGet({
				url: API.getCourseFields,
				success(data) {
					resolve(data);
				},
				error(err) {
					reject(err)
				}
			})
		})
	}
	getCourse(all) {
		return new Promise((resolve, reject) => {
			this.fetchGet({
				url: API.getCourses + all,
				success(data) {
					resolve(data)
				},
				error(err) {
					reject(err)
				}
			})
		})
	}
}

export default ListModel