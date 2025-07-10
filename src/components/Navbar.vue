<template>
  <nav class="fixed w-full top-0 left-0 z-50 bg-gray-900/90 shadow-lg p-4 flex items-center justify-between animate-fade-in-down">
    <!-- Logo -->
    <RouterLink to="/" class="logo-4nis text-2xl md:text-3xl font-extrabold transition-transform duration-300 hover:scale-110 animate-logo-bounce bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      4NIS
    </RouterLink>
    <!-- Desktop Nav Links -->
    <ul class="hidden md:flex space-x-8 ml-8">
      <li>
        <RouterLink to="/Posts" class="text-lg font-semibold text-white hover:text-red-500 transition">
          Posts
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'PostView', params: { id: 1 } }" class="text-lg font-semibold text-white hover:text-red-500 transition">
          Post
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/CreatePost" class="text-lg font-semibold text-white hover:text-red-500 transition">
          Create Post
        </RouterLink>
      </li>
    </ul>
    <!-- Hamburger Button for Mobile -->
    <button @click="isOpen = !isOpen" class="md:hidden text-white focus:outline-none ml-auto">
      <Bars3Icon v-if="!isOpen" class="w-8 h-8" />
      <XMarkIcon v-if="isOpen" class="w-8 h-8" />
    </button>
    <!-- Slide-in Mobile Menu -->
    <transition name="slide">
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 w-full h-screen bg-gray-900/95 z-50 flex flex-col items-center justify-center animate-fade-in-up"
      >
        <button @click="isOpen = false" class="absolute top-6 right-6 text-white">
          <XMarkIcon class="w-8 h-8" />
        </button>
        <ul class="space-y-8 text-lg text-white text-center">
          <li>
            <RouterLink @click.native="isOpen = false" to="/Posts" class="block py-2 px-8 rounded-lg font-semibold hover:bg-gray-800 hover:text-red-500 transition">
              Posts
            </RouterLink>
          </li>
          <li>
            <RouterLink @click.native="isOpen = false" :to="{ name: 'PostView', params: { id: 1 } }" class="block py-2 px-8 rounded-lg font-semibold hover:bg-gray-800 hover:text-red-500 transition">
              Post
            </RouterLink>
          </li>
          <li>
            <RouterLink @click.native="isOpen = false" to="/CreatePost" class="block py-2 px-8 rounded-lg font-semibold hover:bg-gray-800 hover:text-red-500 transition">
              Create Post
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
</script>

<style scoped>
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-down {
  animation: fade-in-down 1s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes logo-bounce {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
  }
  60% {
    opacity: 1;
    transform: scale(1.1) translateY(5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-logo-bounce {
  animation: logo-bounce 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
