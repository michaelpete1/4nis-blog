<template>
  <nav
    class="fixed w-full z-50 shadow-lg p-4 transition-opacity duration-300"
    :class="isHovered ? 'bg-gray-900 opacity-100' : 'bg-gray-900/50 opacity-60'"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold text-white">4NIS</RouterLink>

      <!-- Hamburger Button -->
      <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
        <Bars3Icon v-if="!isOpen" class="w-8 h-8" />
        <XMarkIcon v-if="isOpen" class="w-8 h-8" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      class="fixed top-0 right-0 h-[85vh] w-56 bg-gray-800/90 backdrop-blur-lg shadow-lg rounded-lg transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <button @click="isOpen = false" class="absolute top-4 right-4 text-white">
        <XMarkIcon class="w-8 h-8" />
      </button>
      <ul class="mt-16 space-y-4 text-lg text-white text-center">
        <li>
          <RouterLink to="/" class="block py-2">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/Posts" class="block py-2">Posts</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'PostView', params: { id: 1 } }" class="block py-2">
            Post
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/CreatePost" class="block py-2">Create Post</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
const isHovered = ref(false);
</script>
