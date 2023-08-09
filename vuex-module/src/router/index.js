import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
import Kereta from '@/views/Kereta.vue'
import ProductStore from '@/views/Store.vue'
import SingleStore from '@/views/SingleStore.vue'
import Category from '@/views/Category.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'user',
    component: User,
  },
  {
    path: '/kereta',
    name: 'Kereta',
    component: Kereta,
  },
  {
    path: '/store',
    name: 'Store',
    component: ProductStore,
  },
  {
    path: '/store/:id',
    name: 'SingleStore',
    component: SingleStore,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
