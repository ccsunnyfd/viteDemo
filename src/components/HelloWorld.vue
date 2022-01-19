<template>
  <div>hello {{ who }}</div>
</template>

<script>
export default {
  props: {
    who: {
      type: String,
      default: 'world',
    }
  },
  setup() {
  }
}
</script>