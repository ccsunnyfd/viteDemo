<template>
  <Rate v-model="score" theme="green" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Rate from 'comps/Rate.vue'

const score = ref(2)
</script>
