import Category from '@/views/Category.vue';
import FilterCategory from '@/views/FilterCategory.vue';
import Home from '@/views/Home.vue';
import Kereta from '@/views/Kereta.vue';
import Login from '@/views/Login.vue';
import SingleStore from '@/views/SingleStore.vue';
import ProductStore from '@/views/Store.vue';
import User from '@/views/user/Index.vue';
import UserCreate from '@/views/user/Create.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

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
    meta: { requiresLogin: true },
  },
  {
    path: '/users/create',
    name: 'UserCreate',
    component: UserCreate,
    meta: { requiresLogin: true },
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
  {
    path: '/category/:category',
    name: 'FilterCategory',
    component: FilterCategory,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresGuest && store.getters['auth/isAuthenticated']) {
    next('/');
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters['auth/isAuthenticated']) {
    next('/login');
  } else {
    next();
  }
});

export default router;
