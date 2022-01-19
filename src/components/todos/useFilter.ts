import { reactive, computed, Ref } from 'vue'
import { Todo, FilterState, Filters } from './types'

const filters: Filters = {
  all(todos: Todo[]) {
    return todos
  },
  active(todos: Todo[]) {
    return todos.filter((todo: Todo) => !todo.done)
  },
  completed(todos: Todo[]) {
    return todos.filter((todo: Todo) => todo.done)
  },
}

export function useFilter(todos: Ref<Todo[]>) {
  const filterState: FilterState = reactive({
    filterItems: [
      { label: '全部', value: 'all' },
      { label: '待完成', value: 'active' },
      { label: '已完成', value: 'completed' },
    ],
    visibility: 'all',
    filteredTodos: computed(() => {
      return filters[filterState.visibility](todos.value)
    }),
  })
  return filterState
}
