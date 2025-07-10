<template>
  <Transition name="fade-scale">
    <div
      v-if="visible"
      class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-xl shadow-2xl z-50 text-center text-base md:text-lg animate-fade-in-up"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "",
  },
});

const visible = ref(false);

// Watch for message changes and show the popup
watch(
  () => props.message,
  (newMessage) => {
    if (newMessage) {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 3000); // Hide popup after 3 seconds
    }
  }
);
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
  