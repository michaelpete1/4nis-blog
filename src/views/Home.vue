<template>
  <div class="min-h-screen bg-cover bg-center text-white flex flex-col items-center home-bg">
    <!-- Moving Header -->
    <div class="overflow-hidden w-full bg-blue-500 py-3">
      <div class="flex whitespace-nowrap animate-marquee">
        <h1 class="text-white text-2xl font-bold mx-4">
          Welcome to 4NIS Blog! | Stay Updated with the Latest Trends 🚀
        </h1>
        <h1 class="text-white text-2xl font-bold mx-4">
          Welcome to 4NIS Blog! | Stay Updated with the Latest Trends 🚀
        </h1>
      </div>
    </div>

    <!-- Hero Section with Fade-in Animation -->
    <section class="text-center mt-10 p-5 animate-fade-in">
      <h2 class="text-4xl font-bold text-white">Explore the Latest Articles</h2>
      <p class="mt-4 text-black">
        Get insights, trends, and updates on the best products in the market.
      </p>
    </section>

    <!-- Blog Preview Section with Hover Animations -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-5 w-full max-w-7xl">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-gray-800/70 backdrop-blur-sm shadow-lg p-5 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700/70"
      >
        <h3 class="text-xl font-semibold text-white">{{ post.title }}</h3>
        <p class="text-gray-400 mt-2 line-clamp-2">{{ post.excerpt }}</p>
        <button
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Read More
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const posts = ref([
  { title: "How to Start a Blog", excerpt: "Learn the basics of blogging and start your journey today." },
  { title: "Top 10 Gadgets in 2025", excerpt: "Check out the latest trending gadgets this year!" },
  { title: "Fashion Trends to Follow", excerpt: "Stay updated with the latest fashion trends." },
  { title: "Best Laptops for Developers", excerpt: "A guide to choosing the perfect laptop for coding." },
  { title: "Why Vue.js is Taking Over", excerpt: "Discover why Vue.js is a favorite among developers." },
  { title: "The Future of AI", excerpt: "How artificial intelligence is shaping our world." },
]);
</script>

<style scoped>
/* Background Image */
.home-bg {
  background-image: url("/bbl.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* Moving Text Animation */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  display: flex;
  animation: marquee 10s linear infinite;
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out;
}
</style>
