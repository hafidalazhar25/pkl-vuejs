<template>
    <center>

    
  <div class="container mx-auto sm:px-4">
<h1 class="lg:prose-2xl text-center text-2xl mb-4 font-semibold">Daftar Nama Stasiun di Indonesia</h1>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Kode Stasiun</th>
          <th class="px-4 py-2">Nama Stasiun</th>
          <th class="px-4 py-2">Kota Stasiun</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="station in getStasions">

        <td class="border px-4 py-2 font-semibold">{{ station.code }}</td>
          <td class="border px-4 py-2">{{ station.name }}</td>
          <td class="border px-4 py-2">{{ station.cityname }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</center>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('stasiunKereta', ['getStasions']),
  },
  methods: {
    ...mapActions('stasiunKereta', ['fetchStasions']),
  },
  created() {
    this.fetchStasions();
  },
};
</script>

<style></style>
