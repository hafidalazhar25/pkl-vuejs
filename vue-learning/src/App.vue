<template>
  <div id="tugas">
    <h2>Formulir Kontak</h2>
    <form @submit.prevent="submitForm">
      <label for="nama">Nama : </label>
      <input type="text" id="nama" v-model="kontak.nama" required />
      <br>
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="kontak.email" required />

      <button type="submit">Kirim</button>
    </form>
    <div v-if="showResult">
      nama : {{ name }} <br>
      email : {{ email }}
    </div>
</div>  
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      kontak: {
        nama: '',
        email: '',
      },
      showResult: ref(false),
      name: ref(''),
      email: ref(''),
    };
  },
  methods: {
    submitForm() {
      this.name = this.kontak.nama;
      this.email = this.kontak.email;
      this.showResult = true;
    },
  },
};
</script>

<style>
h1 {
  color: blue;
}
</style>
