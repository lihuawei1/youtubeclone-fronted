<template>
  <div class="gspRov">
    <h2>Login to your account</h2>
    <form @submit.prevent="handleSubmit">
      <ul v-if="errors" class="errors">
        <li>{{ errors }}</li>
      </ul>
      <input type="email" placeholder="email" v-model="user.email" />
      <input type="password" placeholder="password" v-model="user.password" />
      <div class="action input-group">
        <span class="pointer">Signup instead</span>
        <button :disabled="isLoading">Login</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { login } from '@/api/user'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
const useLogin = () => {
  const router = useRouter()
  const store = useStore()
  const route = useRoute()
  const user = reactive({
    email: '',
    password: ''
  })
  const errors = ref('')
  const isLoading = ref(false)
  const handleSubmit = async () => {
    try {
      const { data } = await login(user)
      store.commit('setUser', data.user)
      const redirect = (route.query.redirect || '/') as string
      router.push(redirect || '/')
    } catch (err:any) {
      if (err.response.status === 422) {
        errors.value = err.response.data.error
      }
    }
    isLoading.value = false
  }
  return {
    user,
    handleSubmit,
    errors,
    isLoading
  }
}
export default defineComponent({
  name: 'LoginIndex',
  setup () {
    return {
      ...useLogin()
    }
  }
})
</script>
