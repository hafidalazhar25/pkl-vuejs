<template>
  <div v-if="detail == undefined">
    <h1>Not Found</h1>
  </div>
  <div v-else>
    <h1 class="text-2xl font-bold">Detail</h1>
    <div class="grid grid-cols-2 gap-1 mt-10">
      <div>
        <img :src="getImgSrc(detail.img)" alt="" class="mx-auto" />
      </div>
      <div>
        <h1 class="text-2xl font-bold mb-2">{{ detail.nama }}</h1>
        <h4 class="text-lg">Harga : {{ detail.harga }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { produk } from '../assets/produk';

export default {
  props: ['id_produk'],
  setup(props) {
    const detail = produk['produk'].find(function (item) {
      return item.id == props.id_produk;
    });

    const getImgSrc = (imgFileName) => {
      return '../src/assets/img/' + imgFileName + '';
    };

    return {
      detail,
      getImgSrc,
    };
  },
};
</script>

<style>
img {
  width: 100px;
  margin: 30px;
}
</style>
