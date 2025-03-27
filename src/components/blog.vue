<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define Post Type
interface Post {
  id: number;
  title: string;
  body: string;
}

// Reactive state
const newPost = ref<Post>({ id: 0, title: '', body: '' });
const posts = ref<Post[]>([]);

// Fetch Posts
const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data.slice(0, 10); // Limit to 10 posts
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

// Add a Post
const addPost = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost.value);
    posts.value.unshift(response.data); // Add to the beginning
    newPost.value = { id: 0, title: '', body: '' };
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

// Edit a Post
const editPost = async (post: Post) => {
  try {
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
    alert('Post updated successfully!');
  } catch (error) {
    console.error('Error updating post:', error);
  }
};

// Remove a Post
const removePost = async (postId: number) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    posts.value = posts.value.filter((post) => post.id !== postId);
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

// Fetch posts on component mount
onMounted(fetchPosts);
</script>

<template>
  <div class="container">
    <h2>Mini Blog</h2>

    <!-- Add Post Form -->
    <div class="form">
      <input v-model="newPost.title" placeholder="Title" />
      <textarea v-model="newPost.body" placeholder="Body"></textarea>
      <button @click="addPost">Add Post</button>
    </div>

    <!-- Display Posts -->
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <button @click="editPost(post)">Edit</button>
      <button @click="removePost(post.id)">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 12px;
  cursor: pointer;
  background-color: blue;
  color: white;
  border: none;
  margin-right: 10px;
}

.post {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
</style>
