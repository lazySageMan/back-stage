import Axios from 'axios'
export default class HTTP {
  constructor() {
    this.host = 'http://localhost:9000' // 请求主机
  }

  	// 没有静态属性模拟一下
	static host(){
		return 'http://localhost:9000'
	}

  	// 处理get请求的query拼接
	static dealParams(url, params) {
		let paramsArray = []
		let searchUrl = url

		if (!params){
			return searchUrl
		}

		Object.keys(params).forEach(key =>
			paramsArray.push(key + "=" + params[key])
		);

		if (searchUrl.search(/\?/) === -1) {
			searchUrl = searchUrl + "?" + paramsArray.join("&");
		} else {
			searchUrl = searchUrl + "&" + paramsArray.join("&");
		}

		return searchUrl
	}

  	// get 请求
	static GET(url, params, token = ''){
		let searchUrl = this.dealParams(`${this.host()}${url}`, params);
		console.log(searchUrl)
		return Axios({
			method: 'get',
			url: searchUrl,
			data: {},
			headers: {
				'Authorization': 'Bearer ' + token
			}
		}).then(res => {
			return {
				...res.data
			}
		}).catch(err => {
			if (err.response.status === 401){
				return {
					code: 401,
					message: '身份已过期，请重新登录'
				}
			}
		})
	}

  	// post 请求
	static POST(url, params = {}, token = ''){
		let searchUrl = `${this.host()}${url}`;
		return Axios({
			method: 'post',
			url: searchUrl,
			data: params,
			headers: {
				'Authorization': 'Bearer ' + token
			}
		}).then(res => {
			return {
				...res.data
			}
		}).catch(err => {
			if (err.response.status === 401) {
				return {
					code: 401,
					message: '身份已过期，请重新登录'
				}
			}
		})
	}
}
