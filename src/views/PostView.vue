<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref<{ id: number; title: string; body: string } | null>(null);
const isEditing = ref(false);
const updatedTitle = ref("");
const updatedBody = ref("");

const fetchPost = async () => {
  try {
    if (!route.params.id) throw new Error("Post ID is missing!");
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    if (!response.ok) throw new Error("Failed to fetch post!");
    post.value = await response.json();
    if (post.value) {
      updatedTitle.value = post.value.title;
      updatedBody.value = post.value.body;
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};

const updatePost = async () => {
  if (!post.value) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.value.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: post.value.id,
        title: updatedTitle.value,
        body: updatedBody.value,
        userId: 1,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) throw new Error("Failed to update post!");
    const updatedPost = await response.json();
    post.value = updatedPost;
    isEditing.value = false;
    console.log("✅ Post updated:", updatedPost);
  } catch (error) {
    console.error("❌ Error updating post:", error);
  }
};

onMounted(fetchPost);
</script>

<template>
  <div v-if="post" class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-purple-300 flex flex-col items-center justify-center px-2 py-8 animate-fade-in-up">
    <div class="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 animate-slide-in-up">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 drop-shadow-lg animate-fade-in-down">{{ post.title }}</h1>
      <p class="text-gray-700 text-lg mb-6">{{ post.body }}</p>
      <button
        @click="isEditing = !isEditing"
        class="mb-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-purple-300 animate-bounce-in"
      >
        {{ isEditing ? "Cancel" : "Edit Post" }}
      </button>
      <div v-if="isEditing" class="edit-form animate-fade-in-up mt-4">
        <input
          v-model="updatedTitle"
          type="text"
          placeholder="New title"
          class="w-full mb-3 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 bg-gray-50 transition-all duration-200"
        />
        <textarea
          v-model="updatedBody"
          placeholder="New content"
          class="w-full mb-3 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 bg-gray-50 transition-all duration-200 resize-none min-h-[100px]"
        ></textarea>
        <button
          @click="updatePost"
          class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-300 animate-bounce-in"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

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
