<template>
  <h1>Detail {{ detail.nama }}</h1>
  <h4>Detail {{ detail.harga }}</h4>
</template>

<script>
import { produk } from '../assets/produk';

export default {
  props: ['id_produk'],
  setup(props) {
    const detail = produk['produk'].find(function (item) {
      return item.id == props.id_produk;
    });
    return {
      detail,
    };
  },
};
</script>
