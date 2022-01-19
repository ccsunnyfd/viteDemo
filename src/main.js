import { createApp } from 'vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import App from '@/App.vue'
import '@/index.css'
import store from '@/store/index.js'
import router from '@/router/index.js'
import EditTodo from '@/components/todos/EditTodo.vue'

const app = createApp(App)

app.directive('todo-focus', {
  mounted(el, binding) {
    const { value } = binding
    if (value) {
      el.focus()
    }
  },
})

app
  .use(store)
  .use(router)
  .use(Element3)
  .component('EditTodo', EditTodo)
  .mount('#app')
