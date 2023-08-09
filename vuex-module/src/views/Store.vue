<template>
  <div class="container mx-auto">
    <h1>Toko Baju Abadi</h1>
    <div class="grid grid-cols-5 gap-5">
      <div
        class="card-products hover:"
        v-for="product in getProducts"
        :key="product.id"
      >
        <router-link :to="{ name: 'SingleStore', params: {id: product.id}}">
          <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="">
              <img
                class="rounded-t-lg object-contain h-48 w-96"
                :src="product.image"
                alt=""
              />
            </a>
            <div class="p-2">
              <button
                class="font-normal text-sm text-gray-700 bg-gray-200 rounded-full"
              >
                <p class="mx-3">
                  {{ product.category }}
                </p>
              </button>
              <a href="#">
                <h5
                  v-if="product.title.length < 24"
                  class="my-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ product.title }}
                </h5>
                <h5
                  v-else
                  class="my-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ product.title.substring(0, 21) + ' ...' }}
                </h5>
              </a>
              <p>
                <i class="fa-solid fa-star text-yellow-300"></i>
                {{ product.rating.rate }} | Terjual :
                {{ product.rating.count }}+
              </p>
              <a
                href="#"
                class="ridht-0 inline-flex items-center px-3 py-2 mt-2 mb-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ${{ product.price }}
              </a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('productStore', ['getProducts']),
  },
  methods: {
    ...mapActions('productStore', ['fetchProducts']),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style></style>
