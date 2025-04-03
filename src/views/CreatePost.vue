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
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-5">
    <h1 class="text-3xl font-bold mt-10">Create a New Post</h1>

    <!-- Popup Component -->
    <PopUp :message="message" />

    <form @submit.prevent="createPost" class="w-full max-w-lg mt-5 bg-gray-800 p-6 rounded-lg shadow-lg">
      <label class="block text-gray-300">Title:</label>
      <input
        v-model="title"
        type="text"
        class="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
        placeholder="Enter post title"
      />

      <label class="block text-gray-300 mt-4">Body:</label>
      <textarea
        v-model="body"
        class="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
        placeholder="Enter post body"
      ></textarea>

      <button
        type="submit"
        class="mt-4 w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? "Submitting..." : "Create Post" }}
      </button>
    </form>
  </div>
</template>
