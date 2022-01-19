<template>
  <input
    type="text"
    :value="todoTitle"
    @input="onInputChange"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
defineProps({
  todoTitle: { type: String, default: '' },
})

const todosEmits = defineEmits(['update:todoTitle'])
function onInputChange(e: Event) {
  if (e && e.target) {
    todosEmits('update:todoTitle', Object(e.target).value)
  }
}
</script>
