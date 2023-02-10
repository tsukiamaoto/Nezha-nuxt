<template>
  <div>
    {{ data }}
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const { apiBase } = runtimeConfig.public;
const { data } = useFetch(`${apiBase}/hello`, {
  method: 'Get'
});
</script>
