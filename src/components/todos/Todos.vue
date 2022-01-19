<template>
  <div>
    <!-- create todo -->
    <Edit-todo
      v-model:todo-title="todoState.newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    ></Edit-todo>

    <!-- todo list -->
    <ul>
      <Todo-item
        v-for="todo in filterState.filteredTodos"
        :key="todo.id"
        :todo="todo"
        v-model:editing-todo="todoState.editingTodo"
        @update-title="updateTitle"
        @check-done="checkDone"
        @remove-todo="removeTodo"
      ></Todo-item>
    </ul>
    <div>
      <input type="checkbox" v-model="checkAll" />
      <label>全选</label>
      <span>{{ active }}</span> /
      <span>{{ all }}</span>
      <Filter
        v-model:chosen="filterState.visibility"
        :items="filterState.filterItems"
      ></Filter>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import TodoItem from './TodoItem.vue'
import Filter from './Filter.vue'
import { Todo, TodoState } from './types'
import { useTodos } from './useTodos'
import { useFilter } from './useFilter'

const todoState: TodoState = reactive({
  newTodo: '',
  editingTodo: void 0, // current editing todo item
})

const { todos, addTodo, checkDone, updateTitle, removeTodo, allDone } =
  useTodos(todoState)

const filterState = useFilter(todos)

const active = computed(
  () => todos.value.filter((todo: Todo) => !todo.done).length
)
const all = computed(() => todos.value.length)

const checkAll = computed({
  get() {
    return active.value === 0
  },
  set(val: boolean) {
    allDone(val)
  },
})
</script>
