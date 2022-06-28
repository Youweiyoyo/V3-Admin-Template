<template>
  <a-menu mode="inline" theme="light" @click="handleMenuClick">
    <a-sub-menu v-for="menu in menuList" :key="menu.id" :title="menu.authName">
      <template #icon>
        <MailOutlined/>
      </template>
      <template #title>{{ menu.authName }}</template>
      <a-menu-item :key="'/'+ item.path" v-for="item in menu.children" :title="item.authName">{{
          item.authName
        }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
import {getMenuList} from "@/api/Layout/Menu"
import {MailOutlined} from "@ant-design/icons-vue"
import {ref, defineEmits} from "vue"

const Emits = defineEmits<{
  (e: "menuClick", path: string): void
}>()
const menuList = ref([])
const initMenuList = async () => {
  menuList.value = await getMenuList()
}
initMenuList()
const handleMenuClick = ({item, key, keyPath}) => {
  Emits("menuClick", key)
}

</script>

<style scoped lang="less">

</style>