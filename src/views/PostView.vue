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
  <div v-if="post" class="container">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    
    <button @click="isEditing = !isEditing">
      {{ isEditing ? "Cancel" : "Edit Post" }}
    </button>

    <div v-if="isEditing" class="edit-form">
      <input v-model="updatedTitle" type="text" placeholder="New title" />
      <textarea v-model="updatedBody" placeholder="New content"></textarea>
      <button @click="updatePost">Save Changes</button>
    </div>
  </div>
  
</template>
