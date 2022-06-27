import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        //  css 预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                additionalData: '@import "./src/assets/style/global.less";'
            }
        }

    },
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver()
            ]
        })
    ],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: 'localhost',
            port: 8080
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'https://lianghj.top:8888/api/private/v1/',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
});

