// deps
import axios from 'axios'

const baseUrl = process.env.API_URL || ''

const axiosInterceptors = () => {
  axios.defaults.baseURL = baseUrl
  axios.interceptors.request.use(
    (config) => {
      return {
        ...config,
        'Content-Type': 'application/json',
      }
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export default axiosInterceptors
