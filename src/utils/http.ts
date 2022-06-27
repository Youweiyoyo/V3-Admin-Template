import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {message} from "ant-design-vue"
import {storeToRefs} from "pinia"
import {useUserStore} from "@/store/user"

const Service = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000
});

// Request interceptors
Service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const useStore = useUserStore()
        const {token} = storeToRefs(useStore)
        // do something
        config.headers!.Authorization = token.value;
        return config;
    },
    (error: any) => {
        return Promise.reject(new Error(error));
    }
);

// Response interceptors
Service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // 根据自己的业务处理
        const {data, meta} = response.data
        if (meta.status === 200 || meta.status === 201) {
            return data
        } else {
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
