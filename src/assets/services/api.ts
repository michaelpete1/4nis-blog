import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  getPosts: async () => {
    return axios.get(`${API_URL}/posts`);
  },

  createPost: async (post: { title: string; body: string }) => {
    return axios.post(`${API_URL}/posts`, post);
  },

  updatePost: async (id: number, post: { title: string; body: string }) => {
    return axios.put(`${API_URL}/posts/${id}`, post);
  },

  deletePost: async (id: number) => {
    return axios.delete(`${API_URL}/posts/${id}`);
  },
};
