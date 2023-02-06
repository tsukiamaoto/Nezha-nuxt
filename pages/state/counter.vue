<template>
  <div>
    計數器: {{ counterStore.count }}
    <p>
      <button class="btn btn-primary" @click="counterStore.increment">新增</button>
      <button class="btn btn-primary mx-2" @click="counterStore.decrement">減少</button>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useCounterStore } from '~~/stores/count'

const counterStore = useCounterStore()
</script>
