import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
import {message} from "ant-design-vue"

const Service = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000
});

// Request interceptors
Service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);

// Response interceptors
Service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // 根据自己的业务处理
        const {data, meta} = response.data
        if (meta.status === 200 || meta.status === 201) {
            return data
        }else {
            message.error(meta.msg)
            return Promise.reject(new Error(meta.msg))
        }
    },
    (error: any) => {
        // 根据自己的业务处理
        error.response && message.error(error.response.message)
        return Promise.reject(error);
    }
);

export default Service;
