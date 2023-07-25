<template>
<div v-if="umur >= 18">
    <p>Halo {{ nama }}</p>
</div>

<div v-else>
    <p>Kamu belum 18 tahun</p>
</div>

<button @click="greet">Sapa</button>
</template>

<script>
export default {
    props: ['nama', 'umur'],
    methods: {
        greet() {
            alert('Halo ' + this.nama)
        }
    }
}

</script>