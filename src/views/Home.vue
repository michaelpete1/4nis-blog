<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-purple-300 text-white flex flex-col items-center home-bg px-2 py-4">
    <!-- Moving Header -->
    <div class="overflow-hidden w-full bg-blue-500 py-3 animate-fade-in-down">
      <div class="flex whitespace-nowrap animate-marquee">
        <h1 class="text-white text-2xl md:text-3xl font-bold mx-4">
          Welcome to 4NIS Blog! | Stay Updated with the Latest Trends 🚀
        </h1>
        <h1 class="text-white text-2xl md:text-3xl font-bold mx-4">
          Welcome to 4NIS Blog! | Stay Updated with the Latest Trends 🚀
        </h1>
      </div>
    </div>

    <!-- Hero Section with Fade-in Animation -->
    <section class="text-center mt-10 p-5 animate-fade-in-up w-full max-w-3xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Explore the Latest Articles</h2>
      <p class="mt-4 text-black text-lg md:text-xl font-light">
        Get insights, trends, and updates on the best products in the market.
      </p>
    </section>

    <!-- Blog Preview Section with Hover Animations -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-5 w-full max-w-7xl animate-fade-in-up">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-gray-800/70 backdrop-blur-sm shadow-xl p-6 rounded-2xl transform transition duration-300 hover:scale-105 hover:bg-gray-700/80 animate-bounce-in"
      >
        <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">{{ post.title }}</h3>
        <p class="text-gray-300 mt-2 line-clamp-2">{{ post.excerpt }}</p>
        <button
          class="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Read More
        </button>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="w-full max-w-7xl mt-16 animate-fade-in-up">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Latest News</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(news, i) in newsList" :key="i" class="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col animate-bounce-in">
          <h3 class="text-xl font-bold text-blue-700 mb-2">{{ news.title }}</h3>
          <p class="text-gray-700 mb-4">{{ news.summary }}</p>
          <a :href="news.link" target="_blank" class="text-purple-600 hover:underline font-semibold">Read Full Story</a>
        </div>
      </div>
    </section>

    <!-- Sponsors Section -->
    <section class="w-full max-w-7xl mt-16 mb-8 animate-fade-in-up">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Sponsors</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <div v-for="(sponsor, i) in sponsors" :key="i" class="bg-white/80 rounded-xl shadow p-4 flex items-center min-w-[120px] min-h-[60px] animate-bounce-in">
          <img v-if="sponsor.logo" :src="sponsor.logo" :alt="sponsor.name" class="h-10 object-contain mx-auto" />
          <span v-else class="text-lg font-semibold text-gray-700">{{ sponsor.name }}</span>
        </div>
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

const newsList = ref([
  { title: "Vue 3.4 Released!", summary: "The Vue team has released version 3.4 with new features and performance improvements.", link: "https://blog.vuejs.org/" },
  { title: "Tech Conference 2024 Announced", summary: "Join the biggest tech conference of the year, featuring top speakers and workshops.", link: "https://techconf.com/" },
  { title: "AI Breakthrough in 2024", summary: "Researchers announce a major breakthrough in artificial intelligence capabilities.", link: "https://aibreakthrough.com/" },
]);

const sponsors = ref([
  { name: "Acme Corp", logo: null },
  { name: "Globex", logo: null },
  { name: "Initech", logo: null },
  { name: "Umbrella Inc.", logo: null },
  // Add logo URLs if available, e.g. { name: "VueMastery", logo: "/sponsors/vuemastery.png" }
]);
</script>

<style scoped>
.home-bg {
  background-image: url("/bbl.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
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
