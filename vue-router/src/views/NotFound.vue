<template>
  <div class="flex items-center justify-center h-screen">
    <h1 class="text-6xl font-bold">404</h1>
    <p class="text-lg ml-5">Halaman Yang Kamu Cari Tidak Ditemukan</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup(props, context) {
    onMounted(() => {
      context.emit('id-menu', 0);
    });
  },
};
</script>