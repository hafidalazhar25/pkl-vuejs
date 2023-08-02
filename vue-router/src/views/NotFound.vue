<template>
    <h1 class="text-2xl font-bold">404</h1>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup(props, context) {
    onMounted(() => {
      context.emit('id-menu', 0);
    });
  },
};
</script>