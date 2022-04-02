import axios from 'axios'
import { store } from '@/store'

export const request = axios.create({
  baseURL: 'http://127.0.0.1:7001'
})

// 请求拦截
request.interceptors.request.use(config => {
  const { user } = store.state
  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    config.headers!.Authorization = `Bearer ${user.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
// 响应拦截
