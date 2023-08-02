<template>
  <h1 class="text-2xl font-bold">Kategori</h1>
  <div class="flex-container mx-16">
    <div v-for="kategori in kategoriData" :key="kategori.id" class="card">
      <img :src="getImgSrc(kategori.img)" alt="">
      <router-link
        class="container"
        :to="{ name: 'KategoriProduk', params: { kategori_id: kategori.id } }"
      >
        <h4>{{ kategori.nama }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '@/assets/kategori';
import { produk } from '@/assets/produk';

export default {
  setup(props, context) {
    const state = reactive(kategori['kategori']);

    const kategoriData = reactive(
      kategori['kategori'].map((item) => ({
        ...item,
        jumlahProduk: produk['produk'].filter(
          (produk) => produk.kategori_id === item.id
        ).length,
      }))
    );

    const getImgSrc = (imgFileName) => {
      return '../src/assets/img/' + imgFileName + '';
    }

    onMounted(() => {
      context.emit('id-menu', 5);
    });

    return {
      state,
      kategoriData,
      getImgSrc,
    };
  },
};
</script>

<style scoped>

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  min-width: 200px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

img {
  width: 170px;
}
</style>
