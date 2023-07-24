<template>
    <header>
        <div>
            
            <h1>Ini Dari Header</h1>
            <p>Halo {{ text }} ini dari Header</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: ['text'],
}
</script>
