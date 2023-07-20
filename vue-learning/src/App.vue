<script setup>
import { ref } from 'vue';
const count = ref(0);
const rawHtml = '<h1>Hallo</h1>';
const link = "https://www.google.com"
const number = prompt('Masukan nomor : ')

</script>


<template>
  <h1>Hallo</h1>
  <br>
  <p>Menggunakan Raw HTML<span v-html="rawHtml"></span></p> <!-- Menggunakan HTML yang ada dalam variabel -->
  <br>
  <a :href="link" class="btn btn-light">Google</a>
  <br>
  <p>{{ (parseInt(number) + 20)  }}</p>
  <br>
  <p>{{ number ? 'TRUE : 1' : 'FALSE : 0' }}</p>
  <br>
</template>
