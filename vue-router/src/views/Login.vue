<template>
  <h1>Halaman Login</h1>
  <form @submit.prevent="login" name="form-login">
    <label for="username">Username : </label>
    <input
      type="text"
      name="username"
      placeholder="Masukan Username"
      id="username"
      v-model="username"
    />
    <br />
    <br />
    <label for="password">Password : </label>
    <input
      type="password"
      name="password"
      placeholder="Masukan password"
      id="password"
      v-model="password"
    />
    <br />
    <br />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { onMounted } from 'vue';
import { users } from '@/assets/user';

export default {
  setup(props, context) {
    onMounted(() => {
      context.emit('id-menu', 7);
    });
  },
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: 'true',
    };
  },
  methods: {
    login() {
      const foundUser = users.find(
        (user) =>
          user.username == this.username &&
          user.password == this.password &&
          user.isLoggedIn == true
      );
      if (foundUser) {
        alert('Login Berhasil');
        this.$router.push('/produk');
      } else {
        alert('Username atau password salah');
      }
    },
  },
};
</script>
