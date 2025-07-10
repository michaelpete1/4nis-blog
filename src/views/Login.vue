<template>
  <div>
    <Navbar />
    <div class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-purple-300 py-8 px-2">
      <div
        class="flex flex-col md:flex-row w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden h-full animate-fade-in-up bg-white/80 backdrop-blur-lg"
      >
        <!-- Left Section -->
        <div
          class="w-full md:w-1/2 bg-gradient-to-b from-blue-400 to-purple-700 p-10 md:p-12 text-white flex flex-col justify-center items-center h-full animate-slide-in-left"
        >
          <h2 class="text-4xl md:text-3xl font-extrabold mb-4 drop-shadow-lg">Clearmedia</h2>
          <p class="mb-6 text-lg md:text-base font-light">News at your fingertips</p>
          <button
            class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white py-2 px-6 rounded-full w-max shadow-lg transition-all duration-300 transform hover:scale-105 animate-bounce-in"
          >
            Read More
          </button>
        </div>
        <!-- Right Section -->
        <div
          class="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center h-full animate-slide-in-right"
        >
          <h3 class="text-2xl md:text-xl font-bold mb-1 text-gray-800">Hello Again!</h3>
          <p class="mb-6 text-gray-500">Welcome Back</p>
          <form @submit.prevent="handleLogin" class="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              v-model="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 bg-gray-50 transition-all duration-200"
              required
              autocomplete="email"
            />
            <input
              type="password"
              placeholder="Password"
              v-model="password"
              class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 bg-gray-50 transition-all duration-200"
              required
              autocomplete="current-password"
            />
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-purple-300 animate-bounce-in"
            >
              Login
            </button>
          </form>
          <a
            href="#"
            class="mt-4 text-center text-sm text-purple-600 hover:underline focus:underline transition"
            tabindex="0"
          >
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Navbar from '../components/Navbar.vue'

const email = ref("")
const password = ref("")

const handleLogin = () => {
  console.log("Logging in with:", email.value, password.value)
}
</script>

<style scoped>
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
  animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes slide-in-left {
  0% {
    opacity: 0;
    transform: translateX(-60px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-in-left {
  animation: slide-in-left 1s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-in-right {
  animation: slide-in-right 1s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  60% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-bounce-in {
  animation: bounce-in 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
</style> 