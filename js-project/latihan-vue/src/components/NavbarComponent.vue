<template>
  <Navbar>
    <template #logo>
      <NavbarLogo
        link="#"
        alt="Flowbite logo"
        image-url="https://media.istockphoto.com/id/1214970249/id/vektor/logo-modern-letters-tp-atau-pt-ilustrasi-vektor.jpg?s=170667a&w=0&k=20&c=FnLeITbMh1DfBdLlvqFdh6Nb84_Q629rbuv6SucV90Q="
        class="logo-navbar"
      >
        PT. Hanoman
      </NavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink link="#">Beranda</NavbarLink>
        <NavbarLink link="#layanan">Layanan</NavbarLink>
        <NavbarLink link="#tentang">Tentang</NavbarLink>
        <NavbarLink link="#lokasi">Lokasi</NavbarLink>
      </NavbarCollapse>
    </template>
  </Navbar>
</template>

<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

.logo-navbar {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
