<template>
  <div id="tugas">
    <h2>Formulir Kontak</h2>
    <form @submit.prevent="submitForm">
      <label for="nama">Nama : </label>
      <input class="{'is-invalid':is}" type="text" id="nama" v-model="kontak.nama" required/>
      <div v-if="isInvalidNama" class="error-message">Nama Harus Di Isi</div>
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="kontak.email" required />
      <div v-if="isInvalidEmail" class="error-message">Email Harus Di Isi</div>

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
        nama: ref(''),
        email: ref(''),
      },
      showResult: ref(false),
      name: ref(''),
      email: ref(''),
    };

  },
  computed: {
    isInvalidNama() {
      return this.kontak.nama.length === 0;
    },
    isInvalidEmail() {
      return this.kontak.email.length === 0;
    },
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

.error-message {
  color: red
}
</style>
