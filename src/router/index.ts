import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/view/Login/login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/view/Home/home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
