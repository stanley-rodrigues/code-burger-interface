import axios from 'axios'

export const apiCodeBurguer = axios.create({
  baseURL: 'https://api-dev-burger-production.up.railway.app/'
})

apiCodeBurguer.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurguer
