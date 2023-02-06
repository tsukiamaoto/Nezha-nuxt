<template>
  <div class="container-fluid">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: false
})

setResponseStatus(404)
</script>
