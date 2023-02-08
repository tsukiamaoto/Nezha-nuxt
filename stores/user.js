import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: null,
      email: null,
      password: null,
      nickName: null,
      role: {
        name: ''
      }
    }
  }),
  actions: {
    async emailLogin(params) {
      const { data, error } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: params.data
      })

      if (data.value) {
        this.user = data.value
      }

      return {
        data,
        error
      }
    },
    async emailSignup(params) {
      const { data, error } = await useFetch('/api/user', {
        method: 'POST',
        body: params.data
      })

      if (data.value) {
        this.user = data.value
      }

      return {
        data,
        error
      }
    }
  }
})
