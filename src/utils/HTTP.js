import Axios from 'axios'

export default class  HTTP {
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
  static GET(url, params){
    let searchUrl = this.dealParams(`${this.host()}${url}`, params);
    console.log(searchUrl)
    return Axios.get(searchUrl).then(res => {
      return {
        code: 200,
        data: res.data,
        message: res.message
      }
    }).catch(err => {
      return {
        code: 400,
        message: '请求失败！'
      }
    })
  }

  // post 请求
  static POST(url, params = {}){
    let searchUrl = `${this.host()}${url}`;
    return Axios({
      method: 'post',
      url: searchUrl,
      data: params
    }).then(res => {
      return {
        code: 200,
        data: res.data,
        message: res.message
      }
    }).catch(err => {
      return {
        code: 400,
        message: '请求失败！'
      }
    })
  }
}
