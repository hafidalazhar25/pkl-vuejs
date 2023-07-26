<template>
  <Navbar>
    <template #logo>
      <NavbarLogo
        link="https://www.google.com/"
        alt="Flowbite logo"
        image-url="https://o.remove.bg/downloads/35abebb3-7e00-4b97-8c80-bad5e046a7a0/istockphoto-1214970249-170667a-removebg-preview.png"
      >
        PT. Hanoman
      </NavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink isActive link="#">Beranda</NavbarLink>
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
