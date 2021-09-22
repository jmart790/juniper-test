<script>
import StarRatings from "@/components/atoms/StarRatings";
import Btn from "@/components/atoms/Btn";

export default {
  name: "ProductPreview",
  components: { StarRatings, Btn },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageQuery:
        "?cropxunits=100&cropyunits=100&crop=2,2,98,98&w=200&h=200&mode=max",
      seeMore: false
    };
  },
  methods: {
    viewProduct({ ProductID }) {
      console.log("clicked");
      this.$router.push({ name: "Product", params: { id: ProductID } });
    }
  }
};
</script>

<template>
  <div
    tabindex="0"
    :aria-label="`${product.ItemName} name, image, price, and details`"
    class="product-preview"
    :class="{ 'product-preview--detailed': seeMore }"
    @click="viewProduct(product)"
  >
    <div class="product-preview__img-container">
      <img
        :src="`${product.PhotoName}${imageQuery}`"
        alt="Product image"
        loading="lazy"
      />
    </div>

    <div class="product-preview__info">
      <p class="product-preview__name">
        {{ product.ItemName }}
      </p>
      <StarRatings
        class="product-preview__rating"
        :rating="product.rating"
        :total-ratings="product.totalRatings"
      />
      <div class="product-preview__details">
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
    </div>

    <div class="product-preview__main-info">
      <div>
        <p class="product-preview__price" name="price">
          <span class="icon-rewards-linear-dollar-sign" />
          {{ product.BasePrice.toFixed(2) }}
        </p>
      </div>

      <Btn
        class="product-preview__details-btn"
        @click.self="seeMore = !seeMore"
      >
        See {{ seeMore ? "Less" : "More" }}
      </Btn>
    </div>
  </div>
</template>

<style lang="scss">
.product-preview {
  position: relative;
  z-index: 1;
  height: 450px;
  padding: $gap-8;
  border-radius: $round-2;
  background: $white;
  transition: transform 0.3s ease-in, border-color 0.3s ease-in;
  cursor: pointer;
  &::after {
    position: absolute;
    z-index: -1;
    content: " ";
    left: 0;
    box-shadow: $shadow-1;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }
  &:hover,
  &:focus {
    transform: translateY(-8px);
    border-color: $primary-dk;
    outline: none;
    &::after {
      opacity: 1;
    }
  }
  &__img-container {
    height: 320px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: block;
    mix-blend-mode: darken;
    transition: transform 0.3s ease;
  }
  &__info {
    transition: transform 0.3s ease;
  }
  &__name {
    max-width: 20ch;
    font-weight: 700;
    margin-bottom: $gap-2 !important;
  }
  &__main-info {
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__rating {
    margin-bottom: $gap-6;
  }
  &__price {
    margin-left: $gap-6;
    display: flex;
    align-items: center;
    font-size: 20px;
    span {
      font-size: inherit;
    }
  }
  &__details-btn {
    margin-right: $gap-6;
    position: relative;
    z-index: 1;
  }
  &__details {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: height 0.3s ease, opacity 0.3s ease;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $primary;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.2, $primary-lt),
        color-stop(0.7, $primary),
        color-stop(1, $primary-dk)
      );
      border-radius: 8px;
    }
    p {
      margin-bottom: $gap-4;
      padding-right: $gap-6;
      color: $secondary-font-color;
    }
  }
  &--detailed {
    img {
      transform: scale(50%) translatey(-225px);
    }
    .product-preview__info {
      transform: translatey(-200px);
    }
    .product-preview__details {
      height: 180px;
      opacity: 1;
      overflow: auto;
    }
  }
}
</style>