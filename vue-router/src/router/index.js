import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Produk from '@/views/Produk.vue';
import Detail from '@/views/Detail.vue';
import Kategori from '@/views/Kategori.vue';
import KategoriProduk from '@/views/KategoriProduk.vue';
import NotFound from '@/views/NotFound.vue'

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
    props: true
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
