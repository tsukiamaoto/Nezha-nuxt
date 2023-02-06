<template>
  <div class="container-fluid">
    <h1>這是動態user路由</h1>
    <p>匹配到的ID: {{ id }}</p>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()
const { id } = route.params
</script>
