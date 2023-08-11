<template>
  <div>
    {{ filteredProduct }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  computed: {
    ...mapGetters('productStore', ['getProductByCategory']),
    filteredProduct() {
      return this.getProductByCategory(this.$route.params.category);
    },
  },
  methods: {
    ...mapActions('productStore', ['fetchFilterCategory']),
  },
  created() {
    this.fetchFilterCategory()
  }
};
</script>
