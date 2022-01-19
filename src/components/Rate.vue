<template>
  <div class="rate" @mouseout="mouseOut">
    <span
      v-for="num in 5"
      :key="num"
      @click="handleClick(num)"
      @mouseover="mouseOver(num)"
      >{{ stars(num) }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 3 },
  theme: { type: String, default: 'orange' },
})

const emits = defineEmits(['update:modelValue'])
const score = ref(props.modelValue)

function mouseOver(num: number) {
  score.value = num
}

function mouseOut() {
  score.value = props.modelValue
}

function handleClick(num: number) {
  emits('update:modelValue', num)
}

const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}

const stars = computed(() => {
  return (num: number) => (num > score.value ? '☆' : '★')
})
</script>

<style scoped>
.rate {
  color: v-bind(themeObj[props.theme]);
}
</style>
