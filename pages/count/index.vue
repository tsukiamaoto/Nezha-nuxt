<template>
  <div>
    <p>瀏覽次數: {{ data }}</p>
    <p>載入狀態: {{ pending ? '請求中' : '完成' }}</p>
    <p>錯誤狀態: {{ error }}</p>
    <button class="btn btn-primary" @click="refresh">重新取得資料</button>
  </div>
</template>
<script lang="ts" setup>
const { data, pending, error, refresh } = await useFetch('/api/count')
// const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>
