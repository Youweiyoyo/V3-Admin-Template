import {defineStore} from 'pinia'
import {login as loginApi} from '@/api/login'
import {IValues} from '@/types/login'

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            username: "",
            token: ""
        }
    },
    actions: {
        login(data: IValues) {
            return new Promise((resolve, reject) => {
                loginApi(data).then((res) => {
                    this.token = res.token
                    this.username = res.username
                    resolve(res)
                }).catch(err => reject(err))
            })
        }
    },
    // 开启 Pinia 持久化存储
    // 默认情况下 Pinia 会将 state 中所有的状态保存在 sessionStorage 中
    // 可以通过 strategies 进行数据配置, 只设置某一状态的存储和存储的方式
    // https://seb-l.github.io/pinia-plugin-persist/advanced/partial-state.html
    persist: {
        enabled: true,
        strategies: [
            // {key: 'userInfo',storage: sessionStorage, paths: ['nickName']},
            {key: 'token', storage: localStorage, paths: ['token']},
        ],
    }
})
