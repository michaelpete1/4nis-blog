<template>
  <!-- Sidebar for desktop, top nav for mobile -->
  <nav>
    <!-- Desktop Sidebar -->
    <aside
      class="hidden md:fixed md:flex md:flex-col md:justify-between md:items-center md:top-0 md:left-0 md:h-screen md:w-56 bg-gray-900/90 shadow-2xl z-50 p-6 animate-fade-in-left"
    >
      <div class="flex flex-col items-center w-full">
        <RouterLink to="/" class="logo-4nis text-3xl font-extrabold mb-10 transition-transform duration-300 hover:scale-110 animate-logo-bounce bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          4NIS
        </RouterLink>
        <ul class="space-y-6 w-full">
          <!-- Home link removed -->
          <li class="group">
            <RouterLink to="/Posts" class="block py-2 px-4 rounded-lg text-lg font-semibold text-white hover:bg-gray-800 hover:text-red-500 transition">
              Posts
            </RouterLink>
          </li>
          <li class="group">
            <RouterLink :to="{ name: 'PostView', params: { id: 1 } }" class="block py-2 px-4 rounded-lg text-lg font-semibold text-white hover:bg-gray-800 hover:text-red-500 transition">
              Post
            </RouterLink>
          </li>
          <li class="group">
            <RouterLink to="/CreatePost" class="block py-2 px-4 rounded-lg text-lg font-semibold text-white hover:bg-gray-800 hover:text-red-500 transition">
              Create Post
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="text-gray-400 text-xs mt-10">&copy; 2024 Clearmedia</div>
    </aside>

    <!-- Top Nav for Mobile -->
    <div class="md:hidden fixed w-full top-0 left-0 z-50 bg-gray-900/90 shadow-lg p-4 flex justify-between items-center animate-fade-in-down">
      <RouterLink to="/" class="logo-4nis text-2xl font-bold transition-transform duration-300 hover:scale-110 animate-logo-bounce bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
        4NIS
      </RouterLink>
      <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
        <Bars3Icon v-if="!isOpen" class="w-8 h-8" />
        <XMarkIcon v-if="isOpen" class="w-8 h-8" />
      </button>
    </div>
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
          <!-- Home link removed -->
          <li class="group">
            <RouterLink @click.native="isOpen = false" to="/Posts" class="block py-2 px-8 rounded-lg font-semibold hover:bg-gray-800 hover:text-red-500 transition">
              Posts
            </RouterLink>
          </li>
          <li class="group">
            <RouterLink @click.native="isOpen = false" :to="{ name: 'PostView', params: { id: 1 } }" class="block py-2 px-8 rounded-lg font-semibold hover:bg-gray-800 hover:text-red-500 transition">
              Post
            </RouterLink>
          </li>
          <li class="group">
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
@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in-left {
  animation: fade-in-left 1s cubic-bezier(0.4, 0, 0.2, 1);
}
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
