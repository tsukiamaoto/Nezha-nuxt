<template>
  <div>
    test
    {{ user }}
  </div>
</template>
<script>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { user } = userStore;
console.log(user);
</script>
