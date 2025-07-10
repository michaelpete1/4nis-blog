<template>
  <div>
    <Navbar /> <!-- Add the Navbar here -->
    
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden h-full">
        
        <!-- Left Section -->
        <div class="w-1/2 bg-gradient-to-b from-blue-200 to-purple-800 p-12 text-white flex flex-col justify-center h-full">
          <h2 class="text-3xl font-bold mb-4">Clearmedia</h2>
          <p class="mb-6">News at your fingertips</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full w-max">
            Read More
          </button>
        </div>

        <!-- Right Section -->
        <div class="w-1/2 bg-white p-12 flex flex-col justify-center h-full">
          <h3 class="text-xl font-bold mb-1">Hello Again!</h3>
          <p class="mb-6 text-gray-500">Welcome Back</p>

          <form @submit.prevent="handleLogin" class="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              v-model="email"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input 
              type="password" 
              placeholder="Password" 
              v-model="password"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full"
            >
              Login
            </button>
          </form>

          <a href="#" class="mt-4 text-center text-sm text-purple-600 hover:underline">
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
html, body {
  height: 100%;
}
</style> 