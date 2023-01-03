import axios from "axios"

const BASE_URL = 'http://localhost:3001'

const axiosCreate = axios.create({ baseURL: BASE_URL })

axiosCreate.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['authorization'] = `Bearer ${token}`
    }
    return config
},
(error) => Promise.reject(error)
)

export default axiosCreate