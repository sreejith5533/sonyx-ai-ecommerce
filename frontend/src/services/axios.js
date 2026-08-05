import axios from "axios";

const API = axios.create({
  baseURL : import.meta.env.VITE_API_URL,
})



API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    
    const publicRoutes = [
      "/account/login/",
      "/account/signup/",
    ]

    const isPublicRoute = publicRoutes.includes(config.url);

    if(token && !isPublicRoute){
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  },(error)=> {
    return Promise.reject(error)
  }
)


export default API
