<template>
  <body class="overflow-hidden dark:bg-gray-900">
    <div
      class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4"
    >
      <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          class=""
          alt="image of a girl posing"
          :src=product.image
          width="289"

        />
      </div>
      <div class="md:hidden">
        <img
          class="w-full"
          alt="image of a girl posing"
          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
        />
        <div
          class="flex items-center justify-between mt-3 space-x-4 md:space-x-0"
        >
          <img
            alt="image-tag-one"
            class="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="image-tag-one"
            class="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
          <img
            alt="image-tag-one"
            class="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="image-tag-one"
            class="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
        </div>
      </div>
      <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div class="border-b border-gray-200 pb-6">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
            {{ product.category }}
          </p>
          <h1
            class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"
          >
            {{ product.title }}
          </h1>
        </div>
        <div
          class="py-4 border-b border-gray-200 flex items-center justify-between"
        >
          <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
            Rating :
          </p>
          <div class="flex items-center justify-center">
            <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
              {{ product.rating.rate }}
            </p>
          </div>
        </div>
        <div
          class="py-4 border-b border-gray-200 flex items-center justify-between"
        >
          <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
            Terjual :
          </p>
          <div class="flex items-center justify-center">
            <p
              class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3"
            >
            {{ product.rating.count }} Unit
            </p>
          </div>
        </div>
        <button
          class="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
        >
          Beli
        </button>
        <div>
          <p
            class="xl:pr-48 text-lg lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7"
          >
            <b>Deskripsi : </b>
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('productStore', ['getProductById']),
    product() {
      return this.getProductById(Number(this.$route.params.id));
    },
  },
  methods: {
    ...mapActions('productStore', ['fetchSingleProducts']),
  },
  mounted() {
    const productId = this.$route.params.id;
    console.log('Fetchin  g single product with ID:', productId);
    this.fetchSingleProducts(productId);
  },
};
</script>
