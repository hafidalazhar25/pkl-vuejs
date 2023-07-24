<template>
<p>Ini Dari NewComponent</p>
<MyComponent nama="Hafid" umur="12"/>
</template>

<script>
import MyComponent from '../components/MyComponent.vue'

export default {
    components: {
        MyComponent
    }
}
</script>