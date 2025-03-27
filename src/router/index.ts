import Home from "../views/Home.vue";
import Posts from "../views/Posts.vue";
import CreatePost from "../views/CreatePost.vue";
import PostView from "../views/PostView.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/postview/:id", name: "PostView", component: PostView, props: true },
  { path: "/posts", name: "Posts", component: Posts },
  { path: "/createpost", name: "CreatePost", component: CreatePost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
