<template>
  <div class="bg-black min-h-screen text-white p-6 pt-20"> 
    <!-- Added 'pt-20' to push content below navbar -->
    <h1 class="text-2xl font-bold mb-4">Posts</h1>

    <!-- Show loading state for at least 5 seconds -->
    <p v-if="loading" class="text-gray-400 text-lg">Loading posts...</p>

    <!-- Show posts once loading is complete -->
    <ul v-else-if="posts.length > 0" class="space-y-2">
      <li
        v-for="post in posts"
        :key="post.id"
        class="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
      >
        <RouterLink :to="{ name: 'PostView', params: { id: post.id } }" class="text-blue-400 hover:underline">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>

    <!-- Error message if fetching fails -->
    <p v-else-if="errorMessage" class="text-red-400">{{ errorMessage }}</p>
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
