<template>
  <div>
    home组件
    {{ nickName }}
    {{ token }}
    <a-button @click="changeNickName">修改nickName</a-button>
  </div>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia"
import {useUserStore} from "@/store/user/user"

const userStore = useUserStore()
const {nickName, token} = storeToRefs(userStore)
const changeNickName = () => {
  userStore.setToken("11111")
}
</script>

<style scoped>

</style>