<template>
    <div>
      <div class="form-group my-5">
        <label for="" class="mr-2">Pilih Donatur : </label>
        <select
          @change="$emit('selectedDonatur', $event.target.value)"
          class="form-control"
        >
          <option value="" class="font-bold">-- Pilih Donatur --</option>
          <option v-for="donatur in listDonatur" :key="donatur.name" :value="donatur.name">
            {{ donatur.name }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      listDonatur() {
        return this.$store.state.donatur.listDonatur;
      },
    },
  };
  </script>
  