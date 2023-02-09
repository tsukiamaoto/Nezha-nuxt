<template>
  <div class="container-fluid">
    <NavBar />
    <slot />
    <div class="d-flex justify-content-center mt-5">
      <p>© {{ year }} {{ writer }} All rights reserved.</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const now = new Date();
const year = now.getFullYear();
const writer = 'Gary';
</script>
