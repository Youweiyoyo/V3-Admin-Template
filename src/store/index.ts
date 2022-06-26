import {createPinia} from 'pinia'
// 引入 pinia 持久化插件
// https://seb-l.github.io/pinia-plugin-persist/
import piniaPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPersist)
export default store
