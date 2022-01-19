import { ref, watchEffect } from 'vue'
import { uuid } from 'vue-uuid'
import { Todo, TodoState } from './types'

// cache
const todoStorage = {
  fetch() {
    const todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]')
    todos.forEach((todo: Todo) => {
      todo.id || (todo.id = uuid.v1())
    })
    return todos
  },
  save(todos: Todo[]) {
    localStorage.setItem('vue3-todos', JSON.stringify(todos))
  },
}

export function useTodos(state: TodoState) {
  const todos = ref(todoStorage.fetch())

  function addTodo() {
    todos.value.push({
      id: uuid.v1(),
      title: state.newTodo,
      done: false,
    })
    state.newTodo = ''
  }

  function checkDone(id: string) {
    todos.value.forEach((element: Todo) => {
      if (element.id === id) {
        element.done = !element.done
      }
    })
  }

  function updateTitle(todo: Todo) {
    todos.value.forEach((element: Todo) => {
      if (element.id === todo.id) {
        element.title = todo.title
      }
    })
  }

  function removeTodo(id: string) {
    for (let i = 0; i < todos.value.length; i++) {
      const element = todos.value[i]
      if (element.id === id) {
        todos.value.splice(i, 1)
        return
      }
    }
  }

  function allDone(val: boolean) {
    todos.value.forEach((element: Todo) => {
      element.done = val
    })
  }

  watchEffect(() => {
    todoStorage.save(todos.value)
  })

  return { todos, addTodo, checkDone, updateTitle, removeTodo, allDone }
}
