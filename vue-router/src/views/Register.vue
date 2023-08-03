<template>
<h1>Halaman Register</h1>
<form action="" name="form-register">
    <label for="username">Username : </label>
    <input type="text" name="username" placeholder="Masukan Username" id="username">
    <br>
    <br>
    <label for="password">Password : </label>
    <input type="password" name="password" placeholder="Masukan password" id="password">
    <br>
    <br>
    <label for="handphone">No. Handphone : </label>
    <input type="number" name="handphone" placeholder="Masukan No Handphone" id="handphone">
    <br>
    <br>
    <button type="submit">Register</button>
</form>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup(props, context) {
    onMounted(() => {
      context.emit('id-menu', 6);
    });
  },
};
</script>