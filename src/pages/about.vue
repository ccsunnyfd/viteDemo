<template>
  <div>
    <h2>Mouse cursor position</h2>
    <span>x:{{ x }} y:{{ y }}</span>
  </div>
  <button @click="loading">change favicon</button>
  <button @click="reset">reset favicon</button>
  <div>
    <button @click="toggle">全屏</button>
  </div>
  <Heading :level="3">hello geekbang</Heading>
  <button @click="backToDashboard">退回dashboard</button>
</template>

<script setup lang="ts">
import { computed, onMounted, watchEffect } from 'vue'
import Heading from 'comps/Heading'
import { useFullscreen } from '@vueuse/core'
import { onBeforeRouteLeave, useRouter, useRoute } from 'vue-router'
import { useMouse } from '@/utils/mouse'
import useFavicon from '@/utils/favicon'

const { favicon, reset } = useFavicon('/favicon.ico')
function loading() {
  favicon.value = '/geek.webp'
}

const { toggle } = useFullscreen()

const { x, y } = useMouse()
const color = computed(() => (x.value > 200 && y.value > 200 ? 'blue' : 'red'))

const router = useRouter()
const route = useRoute()
watchEffect(() => {
  console.log(route.query)
})

function backToDashboard() {
  router.push('/')
}

onMounted(() => {
  fetch('/api/users')
    .then(response => response.json())
    .then(json => console.log(json))
  fetch('/api/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  console.log(import.meta.env.VITE_TOKEN)
})

onBeforeRouteLeave(() => {
  const answer = window.confirm('你确定要离开当前页面吗？')
  if (!answer) {
    return false
  }
})
</script>

<style scoped>
h2 {
  color: v-bind(color);
}
</style>
