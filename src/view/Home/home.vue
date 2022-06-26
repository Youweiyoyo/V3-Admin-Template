<template>
  <div>
  </div>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia"
import {useUserStore} from "@/store/user"

const userStore = useUserStore()
// 解构数据需要使用 storeToRefs 包裹一下 store， 否则会失去响应式
const {token} = storeToRefs(userStore)
</script>

<style scoped>

</style>