<script setup lang="ts">
import { ref } from "vue";
import PopUp from "@/components/PopUp.vue";

const title = ref("");
const body = ref("");
const isSubmitting = ref(false);
const message = ref("");

// Function to create a new post
const createPost = async () => {
  if (!title.value || !body.value) {
    message.value = "Title and body are required!";
    return;
  }

  isSubmitting.value = true;
  message.value = ""; // Reset message before submission

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        body: body.value,
        userId: 1, // Hardcoded user ID
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) throw new Error("Failed to create post");

    const data = await response.json();
    console.log("Created Post:", data);

    message.value = "✅ Post created successfully!";
    title.value = "";
    body.value = "";
  } catch (error) {
    console.error("Error creating post:", error);
    message.value = "❌ Failed to create post. Try again!";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-purple-300 text-gray-900 flex flex-col items-center p-5 animate-fade-in-up">
    <h1 class="text-3xl md:text-4xl font-extrabold mt-10 mb-4 text-center drop-shadow-lg animate-fade-in-down">Create a New Post</h1>
    <!-- Popup Component -->
    <PopUp :message="message" />
    <form
      @submit.prevent="createPost"
      class="w-full max-w-lg mt-5 bg-white/90 p-6 md:p-8 rounded-2xl shadow-2xl animate-slide-in-up flex flex-col gap-4"
    >
      <label class="block text-gray-700 font-semibold">Title:</label>
      <input
        v-model="title"
        type="text"
        class="w-full mt-2 p-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
        placeholder="Enter post title"
        required
      />
      <label class="block text-gray-700 font-semibold mt-2">Body:</label>
      <textarea
        v-model="body"
        class="w-full mt-2 p-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none min-h-[120px]"
        placeholder="Enter post body"
        required
      ></textarea>
      <button
        type="submit"
        class="mt-4 w-full py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full font-semibold shadow-md hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-red-300 animate-bounce-in"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? "Submitting..." : "Create Post" }}
      </button>
    </form>
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
