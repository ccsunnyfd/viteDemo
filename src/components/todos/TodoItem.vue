<template>
  <li :class="{ completed: curTodo.done, editing: curTodo === editingTodo }">
    <!-- bind completed state -->
    <div class="view">
      <input type="checkbox" v-model="curTodo.done" @input="handleCheck" />
      <label @dblclick="jumpEdit(curTodo)">
        {{ curTodo.title }}
      </label>
      <button class="remove-btn" @click="removeTodo(curTodo.id)">X</button>
    </div>
    <!-- edit todo -->
    <Edit-todo
      class="edit"
      v-model:todo-title="curTodo.title"
      @blur="doneEdit(curTodo)"
      @keyup.enter="doneEdit(curTodo)"
      @keyup.escape="cancelEdit(curTodo)"
      v-todo-focus="curTodo === editingTodo"
    />
  </li>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue'

import { Todo } from './types'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
  editingTodo: {
    type: Object as PropType<Todo>,
  },
})

const curTodo = computed(() => {
  return {
    id: props.todo.id,
    title: props.todo.title,
    done: props.todo.done,
  }
})

const emits = defineEmits([
  'removeTodo',
  'checkDone',
  'update:editingTodo',
  'updateTitle',
])

function handleCheck() {
  emits('checkDone', curTodo.value.id)
}

const beforeEditCache = ref('')

function removeTodo(id: string) {
  emits('removeTodo', id)
}

function jumpEdit(todo: Todo) {
  beforeEditCache.value = todo.title
  emits('update:editingTodo', todo)
}

function cancelEdit(todo: Todo) {
  todo.title = beforeEditCache.value
  emits('update:editingTodo', null)
}

function doneEdit(todo: Todo) {
  emits('updateTitle', todo)
  emits('update:editingTodo', null)
}
</script>

<style scoped>
.remove-btn {
  padding: 3px;
  cursor: pointer;
  color: red;
}

.completed label {
  text-decoration: line-through;
}

.edit,
.editing .view {
  display: none;
}

.view,
.editing .edit {
  display: block;
}
</style>
