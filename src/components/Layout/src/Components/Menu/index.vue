<template>
  <a-menu mode="inline" theme="light" @click="handleMenuClick" @openChange="onOpenChange" :open-keys="openKeys" v-model:selectedKeys="selectedKeys">
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
const openKeys = ref([])
const rootSubmenuKeys = ref([])
const selectedKeys = ref([])
const initMenuList = async () => {
  menuList.value = await getMenuList()
  rootSubmenuKeys.value = menuList.value.map((item: object) => item.id)
}
initMenuList()
const handleMenuClick = ({item, key, keyPath}) => {
  Emits("menuClick", key)
}
const onOpenChange = (openKey: any) => {
  const latestOpenKey = openKey.find((key: string) => !openKeys.value.includes(key))
  if (!rootSubmenuKeys.value.includes(latestOpenKey)) {
    openKeys.value = openKey;
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : [];
  }

}

</script>

<style scoped lang="less">

</style>