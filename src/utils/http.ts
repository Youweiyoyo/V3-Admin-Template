import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

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
        // do something
        // 根据自己的业务处理
        return response.data
    },
    (error: any) => {
        // do something
        // 根据自己的业务处理
        return Promise.reject(error);
    }
);

export default Service;
