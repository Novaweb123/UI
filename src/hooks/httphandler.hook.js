import axios from "axios";
import {toast} from "react-toastify";

const useHttpHandler = () => {

    let token = null
    if(typeof window != "undefined") {
        token = localStorage.getItem('token')
    }

    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {'Authorization': token},
        responseType: 'json', // default
    });

    const get = (uri, params = {}) => {
        let queryString = params && Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
        }).join('&');
        return instance.get(uri + (queryString && '?' + queryString)).catch((reason => {
            if(reason.response.status == 401) {
                localStorage.removeItem('token')
                window.location.href = '/'
            }
            throw new Error(reason)
        }))
    }

// Send a POST request

    const post = (uri, params = null) => {
        return instance.post(uri, params).catch((reason=>{
            if(reason == 'Error: Network Error'){
                toast.error('Network Error')
            }
            if(reason.response.status == 500) {
                toast.error('Invalid Session')
                window.location.href = '/logout'
            } else {
                toast.error('Something went wrong')
            }
            throw new Error(reason)
        }));
    }

    return {
        get,
        post
    }

}
export default useHttpHandler
