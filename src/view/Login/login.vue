<template>
  <div class="login-container">
    <a-card :bordered="false">
      <div class="title">
        <h1>用户登录</h1>
      </div>
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 18 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon"/>
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 5, span: 5 }">
          <a-button type="primary" html-type="submit" class="subBtn">登录</a-button>
        </a-form-item>
      </a-form>

    </a-card>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue"
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue'
import {IValues} from "@/types/login"
import {useUserStore} from "@/store/user"
import {useRouter} from "vue-router";

const router = useRouter()
const userStore = useUserStore()

const formState = reactive({
  username: 'admin',
  password: '123456',
  remember: false
})

const onFinish = async (values: IValues) => {
  const res = await userStore.login(formState)
  res && await router.push("/home")
}
const onFinishFailed = ({values, errorFields, outOfDate}) => {

}
</script>

<style scoped lang="less">
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #2b3a4b;

  .ant-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;

    .title {
      text-align: center;
    }

    .subBtn {
      width: 300px;
    }
  }
}
</style>