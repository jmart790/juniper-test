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
          label: "Price High",
          value: 2,
          selected: false
        },
        {
          id: "0003",
          label: "Price Low",
          value: 3,
          selected: false
        }
      ]
    };
  },
  async mounted() {
    await this.getStoreData();
  },
  computed: {
    ...mapGetters(["products", "isLoading", "error"]),
    sortedProducts() {
      if (this.selectedSort === 3) {
        return [...this.products].sort((productA, productB) => {
          if (productA.BasePrice > productB.BasePrice) return 1;
          else if (productB.BasePrice > productA.BasePrice) return -1;
          else return 0;
        });
      } else if (this.selectedSort === 2) {
        return [...this.products].sort((productA, productB) => {
          if (productA.BasePrice > productB.BasePrice) return -1;
          else if (productB.BasePrice > productA.BasePrice) return 1;
          else return 0;
        });
      }
      return this.products;
    }
  },
  methods: {
    ...mapActions(["getStoreData"])
  }
};
</script>

<template>
  <div class="home">
    <div class="home__header">
      <h1>New Products</h1>
      <div class="home__sort-btns-container">
        <label for="sort buttons">
          Sort by:
        </label>
        <RadioFilterGroup
          name="sort buttons"
          :options="sortOptions"
          v-model="selectedSort"
          class="home__sort-btns"
        />
      </div>
    </div>
    <ul class="home__product-list" v-if="products.length > 0">
      <li
        v-for="product in sortedProducts"
        :key="`PRODUCT-${product.ProductID}`"
      >
        <ProductPreview :product="product" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.home {
  &__header {
    margin-bottom: $gap-8;
    display: flex;
    flex-wrap: wrap;
    gap: $gap-4;
    @media screen and (min-width: $tablet) {
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  &__sort-btns-container {
    display: flex;
    column-gap: $gap-6;
    flex-wrap: wrap;
    align-items: center;
  }
  &__sort-btns {
    overflow: auto;
    padding: $gap-2;
  }
  &__product-list {
    list-style: none;
    display: grid;
    gap: 60px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @media screen and (min-width: $tablet) {
      gap: 100px;
    }
  }
}
</style>