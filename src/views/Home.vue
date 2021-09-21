<script>
import { mapGetters, mapActions } from "vuex";
import ProductPreview from "@/components/molecules/ProductPreview";
import RadioFilterGroup from "@/components/molecules/RadioFilterGroup";

export default {
  name: "Home",
  components: {
    ProductPreview,
    RadioFilterGroup
  },
  data() {
    return {
      selectedSort: 1,
      sortOptions: [
        {
          id: "0001",
          label: "Relevance",
          value: 1,
          selected: true
        },
        {
          id: "0002",
          label: "Popular",
          value: 2,
          selected: false
        },
        {
          id: "0003",
          label: "New",
          value: 3,
          selected: false
        },
        {
          id: "0004",
          label: "Price High",
          value: 4,
          selected: false
        },
        {
          id: "0005",
          label: "Price Low",
          value: 5,
          selected: false
        }
      ]
    };
  },
  async mounted() {
    await this.getStoreData();
  },
  computed: {
    ...mapGetters(["products", "salesRep", "isLoading", "error"])
  },
  methods: {
    ...mapActions(["getStoreData"])
  }
};
</script>

<template>
  <main class="home">
    <div class="home__header">
      <h1>New Products</h1>
      <div class="home__sort-btns">
        <p style="marginRight:3rem;">
          Sort
        </p>
        <RadioFilterGroup :options="sortOptions" v-model="selectedSort" />
      </div>
    </div>
    <ul class="home__product-list" v-if="products.length > 0">
      <li v-for="product in products" :key="`PRODUCT-${product.ProductID}`">
        <ProductPreview :product="product" />
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
.home {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: $gap-8;
  }
  &__sort-btns {
    display: flex;
    align-items: center;
  }
  &__product-list {
    list-style: none;
    display: grid;
    gap: $gap-12;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>