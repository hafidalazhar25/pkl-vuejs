<template>
  <div class="container mx-auto">
    <p class="text-center text-3xl font-bold my-5">Category Product</p>
    <div class="grid grid-cols-4 gap-4">
      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        v-for="categories in getCategory"
      >
        <a :href="categories">
          <img
            class="rounded-t-lg object-contain h-48 w-96"
            :src="'src/assets/img/' + categories + '.jpg'"
            :alt=categories
          />
        </a>
        <div class="p-5">
          <a :href="categories">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ categories.toUpperCase() }}
            </h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('categoryStore', ['getCategory']),
  },
  methods: {
    ...mapActions('categoryStore', ['fetchCategory']),
  },
  created() {
    this.fetchCategory();
  },
};
</script>
