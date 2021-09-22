<script>
import { mapGetters, mapActions } from "vuex";
import StarRatings from "@/components/atoms/StarRatings";
import Btn from "@/components/atoms/Btn";

export default {
  name: "Product",
  components: { StarRatings, Btn },
  data() {
    return {
      imageQuery:
        "?cropxunits=100&cropyunits=100&crop=2,2,98,98&w=300&h=300&mode=max"
    };
  },
  async mounted() {
    if (this.products.length === 0) {
      await this.getStoreData();
    }
  },
  computed: {
    ...mapGetters(["products", "isLoading", "error"]),
    product() {
      const paramsId = this.$route.params.id;
      if (paramsId && this.products.length > 0) {
        return this.products.find(product => product.ProductID == paramsId);
      }
      return null;
    }
  },
  methods: {
    ...mapActions(["getStoreData"])
  }
};
</script>

<template>
  <div class="product">
    <div class="product__header">
      <h1>Product</h1>
      <Btn @click="$router.push({ path: '/' })">
        Go Back
      </Btn>
    </div>
    <div v-if="product" class="product__content">
      <img
        :src="`${product.PhotoName}${imageQuery}`"
        alt="Product image"
        loading="lazy"
      />

      <div class="product__info">
        <p class="product__name">
          {{ product.ItemName }}
        </p>
        <StarRatings
          class="product__rating"
          :rating="product.rating"
          :total-ratings="product.totalRatings"
          is-large
        />
        <div class="product__details">
          <label for="description">Description</label>
          <p name="description">
            {{ product.Description || "Product description coming soon..." }}
          </p>
          <label for="dimensions">Dimensions</label>
          <p name="dimensions">
            {{ product.Dimensions }}
          </p>
          <label for="item id">Item Id</label>
          <p name="item id">
            {{ product.ItemID }}
          </p>
        </div>
        <p class="product__price" name="price">
          <span class="icon-rewards-linear-dollar-sign" />
          {{ product.BasePrice.toFixed(2) }}
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.product {
  &__header {
    margin-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    gap: $gap-4;
    @media screen and (min-width: $tablet) {
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: $gap-4;
    @media screen and (min-width: $tablet) {
      gap: 200px;
      align-items: center;
    }
  }
  &__info {
    position: relative;
    max-width: 500px;
    width: 100%;
  }
  &__name {
    font-size: 20px;
    font-weight: 700;
  }
  &__rating {
    margin-bottom: $gap-6;
  }
  &__details {
    p {
      margin-bottom: $gap-2;
    }
  }
  &__price {
    position: absolute;
    bottom: $gap-2;
    right: 0;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>