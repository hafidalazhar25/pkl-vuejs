<template>
    <h1>Halo Dunia</h1>
    <p> Nama :{{ nama }}</p>
    <p> Umur :{{ umur }}</p>
</template>

<script>  
export default {
    props: ['nama', 'umur']
}
</script>