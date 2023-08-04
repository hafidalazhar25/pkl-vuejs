import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Produk from '@/views/Produk.vue';
import Detail from '@/views/Detail.vue';
import Kategori from '@/views/Kategori.vue';
import KategoriProduk from '@/views/KategoriProduk.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import Counter from '@/views/Counter.vue';
import Todo from '@/views/Todo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/produk',
    name: 'Produk',
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next();
      } else {
        next('/login'); // Redirect ke halaman login jika pengguna belum login
      }
    },
  },
  {
    path: '/kategori',
    name: 'Kategori',
    component: Kategori,
  },
  {
    path: '/kategori-produk/:kategori_id',
    name: 'KategoriProduk',
    component: KategoriProduk,
    props: true,
  },
  {
    path: '/detail/:id_produk',
    name: 'Detail',
    component: Detail,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/kategori-produk/:pathMatch(.*)*',
    component: NotFound,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
