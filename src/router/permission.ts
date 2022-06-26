import router from "./index";
import {storeToRefs} from "pinia"
import {useUserStore} from "@/store/user"


// 白名单
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const {token} = storeToRefs(userStore)
    if (token.value) {
        // token 存在 去 login 跳转首页
        if (to.path === "/login") {
            next('/')
        } else {
            next()
        }
    } else {
        // 跳转路由在白名单内放行
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})