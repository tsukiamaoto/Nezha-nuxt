import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      name: '',
      gender: '',
      email: ''
    },
    pending: false
  }),
  actions: {
    async getUserProfile() {
      const runtimeConfig = useRuntimeConfig();
      const { apiBase } = runtimeConfig.public;
      try {
        const { data, pending } = await useFetch(`${apiBase}/profile`);
        this.profile = data;
        this.pending = pending;
      } catch (error) {
        return error;
      }
    }
  }
});
