<template>
  <div class="main">
    <section id="layanan">
        <center>
          <h1 class="layanankami">Layanan Kami</h1>
        </center>
        <div class="flex flex-row mx-auto place-content-center gap-6 mt-7">
          <div class="basis-1/5">
            <the-card href="#">
              <i class="fa-solid fa-industry"></i>
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Las Logam
              </h5>
    
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Kami menyediakan las untuk semua jenis logam, alumunium, besi dan
                logam lain lainnya
              </p>
            </the-card>
          </div>
          <div class="basis-1/5">
            <the-card href="#">
              <i class="fa-solid fa-city"></i>
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Produk dari besi dan aluminium
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Kami dapat membuat produk seperti kursi dari logam dan alat-alat
                lainnya
              </p>
            </the-card>
          </div>
          <div class="basis-1/5">
            <the-card href="#">
              <i class="fa-solid fa-gears"></i>
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Produk Laboratorium
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Kami juga membuat produk untuk laboratorium dari bahan bahan logam
              </p>
            </the-card>
          </div>
        </div>
    </section>
    <section id="tentang">
        <center>
          <h1 class="layanankami pt-20">Tentang Kami</h1>
          <div class="flex flex-row mx-auto place-content-center">
            <div class="basis-1/2">
              <img
                src="https://media.istockphoto.com/id/1214970249/id/vektor/logo-modern-letters-tp-atau-pt-ilustrasi-vektor.jpg?s=170667a&w=0&k=20&c=FnLeITbMh1DfBdLlvqFdh6Nb84_Q629rbuv6SucV90Q=  "
                width="300"
                alt=""
              />
            </div>
            <div class="basis-1/2">
              <p class="text-left text-xl mt-14 mr-10">
                Kami adalah perusahaan yang bergerak dibidang jasa pembuatan produk
                besi dan lain Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quo nesciunt, nam similique exercitationem quam tempore odit
                quisquam blanditiis quidem consequuntur.
              </p>
              <div class="text-left mt-9">
                  <Button color="default" size="lg">Tentang Kami</Button>
              </div>
            </div>
          </div>
        </center>
    </section>
    <section id="lokasi">
        <center>
            <h1 class="layanankami mt-20">Lokasi Kami</h1>
        </center>
    </section>
  </div>
</template>

<script setup>
import { TheCard } from 'flowbite-vue';
import { Button } from 'flowbite-vue';
</script>

<style>
.layanankami {
  font-family: 'Montserrat', sans-serif;
  font-size: 38px;
  font-weight: bold;
}
.fa-solid {
  font-size: 30px;
}
</style>
