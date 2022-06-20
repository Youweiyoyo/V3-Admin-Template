<script setup lang="ts">
import { useUserStore } from '@/store/user/user'
const userStore = useUserStore()
const changeName = () => {
  userStore.updateName('王五')
}
</script>

<template>
  <div>{{userStore.name}}</div>
  <button @click="changeName">修改store</button>
  <RouterView/>
</template>

<style>
</style>
