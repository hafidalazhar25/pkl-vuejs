<template>
    <div>
      <MyComponent
        :nama="nama"
        :umur="umur"
        @greeted="onGreeted" 
      ></MyComponent>
      <p>Ini konten tambahan dalam slot</p>
    </div>
  </template>
  
  <script>
  import MyComponent from './MyComponent.vue';
  
  export default {
    components: {
      MyComponent
    },
    data() {
      return {
        nama: 'Hafid',
        umur: 20
      };
    },
    methods: {
      onGreeted() {
        console.log('Kamu udah disapa, bro!');
        // Lakukan tindakan responsif lainnya...
      }
    }
  }
  </script>