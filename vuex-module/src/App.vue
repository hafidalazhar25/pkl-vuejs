<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import  store  from "./store/index";
console.log(store.getters['auth/isAuthenticated']);
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>
