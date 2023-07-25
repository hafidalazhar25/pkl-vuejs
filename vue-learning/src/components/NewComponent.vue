<template>
    <div>
        <MyComponent nama="Hafid" umur="19"/>
        <UmurComponent nama="Hafid" umur="19"/>
        <Latihan2ComponentVue/>
        <EventComponent/>
    </div>
<p>Ini dari NewComponent</p>
</template>

<script setup>
import MyComponent from '../components/MyComponent.vue'
import UmurComponent from './UmurComponent.vue';
import Latihan2ComponentVue from './Latihan2Component.vue';
import EventComponent from './EventsComponent.vue'
</script>