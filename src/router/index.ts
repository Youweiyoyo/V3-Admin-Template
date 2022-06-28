import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
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
        path: '/',
        name: '/',
        component: () => import('@/components/Layout'),
        redirect: '/users',
        children: [
            {
                path: '/users',
                name: 'Users',
                component: () => import('@/view/Users/index.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import('@/view/Categories/index.vue')
            },
            {
                path: 'goods',
                name: 'goods',
                component: () => import('@/view/Goods/index.vue')
            },
            {
                path: 'orders',
                name: 'orders',
                component: () => import('@/view/Orders/index.vue')
            },
            {
                path: 'params',
                name: 'params',
                component: () => import('@/view/Params/index.vue')
            },
            {
                path: 'reports',
                name: 'reports',
                component: () => import('@/view/Reports/index.vue')
            },
            {
                path: 'rights',
                name: 'rights',
                component: () => import('@/view/Rights/index.vue')
            },
            {
                path: 'roles',
                name: 'roles',
                component: () => import('@/view/Roles/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
