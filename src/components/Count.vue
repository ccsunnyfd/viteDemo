<template>
  <div>
    {{ count }}
  </div>
  <button @click="add">add</button>
  <button @click="asyncAdd">asyncAdd</button>
  <div>{{ double }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const count = computed(() => store.state.count)
const double = computed(() => store.getters.double)

function add() {
  store.commit('add')
}
function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>
