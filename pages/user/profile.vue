<template>
  <div>profile: {{ profile }}</div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/profile'

const profileStores = useProfileStore()
// 直接獲得action
const { getUserProfile } = profileStores
// 獲得profile資料
getUserProfile()
// 解構state
const { profile, pending } = storeToRefs(profileStores)
</script>
