<template>
  <teleport to="#modal">
    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">{{ title }}</div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
export default {}
</script>

<script setup lang="ts">
defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
})
</script>

<style>
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-out;
}
</style>
