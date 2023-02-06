<template>
  <div>計數器: {{ counterStore.count }}</div>
</template>
<script lang="ts" setup>
import { useCounterStore } from '~~/stores/count'
const counterStore = useCounterStore()
</script>
