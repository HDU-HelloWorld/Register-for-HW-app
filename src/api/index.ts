import ajax from 'uni-ajax'
const api = ajax.create({
  baseURL: 'http://HelloWorld-hdu.com:6777',
  timeout: 50000,
})

// 添加请求拦截器
api.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
api.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

// 导出 create 创建后的实例
export default api