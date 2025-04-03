<template>
    <Transition name="fade">
      <div
        v-if="visible"
        class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg"
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
  
  <style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  