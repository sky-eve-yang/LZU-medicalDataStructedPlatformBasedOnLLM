<template>
  <div class="login-container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username</label>
        <InputText id="username" v-model="credentials.username" />
      </div>
      <div>
        <label for="password">Password</label>
        <Password id="password" v-model="credentials.password" />
      </div>
      <Button type="submit">
        Login
      </Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// eslint-disable-next-line import/named
import { useStore } from 'pinia'

const router = useRouter()
const store = useStore()

const credentials = ref({
  username: '',
  password: ''
})

function submitForm () {
  // 在这里处理登录逻辑，例如验证凭据并导航到主页
  // 假设有一个登录 API 端点
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials.value)
  })
    .then(response => response.json())
    .then((data) => {
      // 登录成功，更新用户状态并导航到主页
      store.updateUser(data.user)
      router.push('/')
    })
    .catch((error) => {
      // 处理错误
      console.error('Login error:', error)
    })
}
</script>

<style scoped>
/* 添加登录页面的 CSS 样式 */
</style>
