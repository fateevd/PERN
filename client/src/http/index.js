import axios from "axios";


const $host = axios.create({
    baseURL: 'http://localhost:5000/api'
})


const $hostAuth = axios.create({
    baseURL: 'http://localhost:5000/api'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return config;

}


$hostAuth.interceptors.request.use(authInterceptor)

export {
    $host,
    $hostAuth
}
