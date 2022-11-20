import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CreatePost from '@/views/CreatePost.vue'
import UpdatePost from '@/views/UpdatePost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: CreatePost
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: UpdatePost
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
