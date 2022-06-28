<template>
  <a-layout class="app-wrapper">
    <a-layout-sider width="210px" class="sider-container">
      <Menu @menuClick="menuClick"></Menu>
    </a-layout-sider>
    <a-layout class="container">
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <RouterView/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Menu from "./Components/Menu/index.vue"
import {useRouter} from "vue-router";

const router = useRouter()
const menuClick = (path: string) => {
  router.replace(path)
}
</script>

<style scoped lang="less">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .ant-layout-header {
    background-color: white;
  }

  .ant-menu {
    height: 100%;
  }

  .container {
    width: calc(100% - @sideBarWidth);
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: all 0.28s;

    &.hidderContainer {
      width: calc(100% - @hideSidBarWidth);
    }
  }
}

</style>