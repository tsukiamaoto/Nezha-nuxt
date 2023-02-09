<template>
  <div>
    test
    {{ user }}
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>
