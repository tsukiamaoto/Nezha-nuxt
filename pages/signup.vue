<template>
  <div class="loginForm">
    <form @submit.prevent="handleEmailSignup">
      <div class="form-floating mb-3">
        <input
          id="floatingInput"
          v-model="loginData.email"
          type="email"
          class="form-control"
          autocomplete="email"
          required
        />
        <label for="floatingInput">信箱登入</label>
      </div>
      <div class="form-floating">
        <input
          id="floatingPassword"
          v-model="loginData.password"
          type="password"
          class="form-control"
          autocomplete="current-password"
          required
        />
        <label for="floatingPassword">密碼</label>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <button type="submit" class="btn btn-primary">送出</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const loginData = reactive({
  email: '',
  password: ''
});

const handleEmailSignup = async () => {
  const { data, error } = await userStore.emailSignup({ data: toRaw(loginData) });

  if (data.value) {
    navigateTo('/');
  }
};

definePageMeta({
  layout: false
});
</script>
