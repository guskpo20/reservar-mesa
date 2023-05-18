import axios from "../api/axios"

const TOKEN_KEY = "GUSTAVO_TOKEN"
const REGISTER_URL = "/user/verifytoken"
export function setToken(token){
    localStorage.setItem(TOKEN_KEY, token)
}

export function getToken(){
    return localStorage.getItem(TOKEN_KEY)
}

export function deleteToken(){
    localStorage.removeItem(TOKEN_KEY)
}

export async function verifyToken(token){
    const response = await axios.post(REGISTER_URL, JSON.stringify({token}),{
        headers: { 
          "Content-Type" : "application/json",
          'Accept': 'application/json',
        },
        origin: true
        }
      )
    if(response?.data?.message === "Invalid token"){
        deleteToken(token)
    }
    return response.data
}

export function initAxiosInterceptors(){
    axios.interceptors.request.use(function(config){
        const token = getToken()

        if(token){
            config.headers.Authorization = `bearer ${token}`
        }
        return config;
    })

    /* Axios.interceptors.response.use(
        function(response){
            return response
        }

        function(error){
            if(error.response.status === 401 )
        }
    ) */
}