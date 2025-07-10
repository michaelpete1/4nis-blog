import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Posts from '../views/Posts.vue'
import PostView from '../views/PostView.vue'
import CreatePost from '../views/CreatePost.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/Posts', name: 'Posts', component: Posts },
  { path: '/PostView/:id', name: 'PostView', component: PostView, props: true },
  { path: '/CreatePost', name: 'CreatePost', component: CreatePost }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
