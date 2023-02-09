import { useUserStore } from '~~/stores/user';

export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const userStore = useUserStore();

    if (!userStore.user?.id) {
      return navigateTo('/login');
    }
  } else {
    // 避免前端網只導入到後端
    return navigateTo('/');
  }
});
