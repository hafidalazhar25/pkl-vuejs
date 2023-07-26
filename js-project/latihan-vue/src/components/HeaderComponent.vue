<script setup>
import { Button } from 'flowbite-vue';
</script>
<template>
  <div class="flex flex-row mt-5">
    <div class="basis-1/2">
      <h1 class="selamatdatang pt-16">Innovative.</h1>
      <h1 class="selamatdatang">Creative.</h1>
      <p class="font-semibold">Kami adalah perusahaan yang bekerja</p>
      <p class="font-semibold">
        jasa Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <p class="font-semibold"></p>
      <Button color="default" class="mt-4" pill>Tertarik</Button>
    </div>
    <div class="basis-1/2">
      <img src="../assets/pabrik-svg.jpg" width="400" alt="" class="ml-8" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

.selamatdatang {
  font-family: 'Montserrat', sans-serif;
  font-size: 70px;
  font-weight: bold;
}
</style>
