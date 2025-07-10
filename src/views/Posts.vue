<template>
  <div class="bg-gradient-to-br from-blue-100 via-purple-100 to-purple-300 min-h-screen text-gray-900 p-4 pt-24 animate-fade-in-up">
    <h1 class="text-2xl md:text-3xl font-extrabold mb-6 text-center drop-shadow-lg animate-fade-in-down">Posts</h1>
    <!-- Show loading state for at least 5 seconds -->
    <p v-if="loading" class="text-gray-500 text-lg text-center animate-pulse">Loading posts...</p>
    <!-- Show posts once loading is complete -->
    <ul v-else-if="posts.length > 0" class="space-y-4 max-w-2xl mx-auto animate-slide-in-up">
      <li
        v-for="post in posts"
        :key="post.id"
        class="p-4 bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-purple-100/80 transition-all duration-300 group animate-bounce-in"
      >
        <RouterLink :to="{ name: 'PostView', params: { id: post.id } }" class="text-blue-600 group-hover:text-purple-700 font-semibold text-lg hover:underline transition">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- Error message if fetching fails -->
    <p v-else-if="errorMessage" class="text-red-500 text-center animate-fade-in-up">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Post {
  id: number;
  title: string;
  body: string;
}

const posts = ref<Post[]>([]);
const loading = ref(true);
const errorMessage = ref("");

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // Ensure loading lasts at least 5 seconds
    setTimeout(() => {
      posts.value = data;
      loading.value = false;
    }, 5000);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    errorMessage.value = "Failed to load posts. Please try again later.";
    loading.value = false;
  }
};

onMounted(fetchPosts);
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
  animation: fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1);
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
  animation: fade-in-down 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes slide-in-up {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-in-up {
  animation: slide-in-up 1s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
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
