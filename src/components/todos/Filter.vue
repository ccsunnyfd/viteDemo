<template>
  <p class="filters">
    <span
      v-for="item in items"
      :key="item.value"
      @click="onChoose(item)"
      :class="{ selected: chosen === item.value }"
      >{{ item.label }}</span
    >
  </p>
</template>

<script lang="ts"></script>

<script setup lang="ts">
import type { FilterItem } from './types'

defineProps<{
  items: FilterItem[]
  chosen: string
}>()
const filterEmits = defineEmits(['update:chosen'])

function onChoose(item: FilterItem) {
  filterEmits('update:chosen', item.value)
}
</script>

<style scoped>
.filters > span {
  padding: 2px 4px;
  border: 1px solid transparent;
  cursor: pointer;
}
.filters > span.selected {
  border-color: rgba(173, 47, 47, 0.2);
}
</style>
