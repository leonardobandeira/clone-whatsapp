import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:60000',
    timeout: 10000,
    headers:{ 'X-Custom-Header':'foobar' }
})

export default api