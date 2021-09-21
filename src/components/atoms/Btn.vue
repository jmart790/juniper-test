<script>
export default {
  name: "Btn",
  props: {
    variant: {
      type: String,
      required: false,
      default: "secondary" // primary, secondary, terciary
    },
    type: {
      type: String,
      required: false,
      default: "button"
    }
  }
};
</script>
<template>
  <button
    class="btn"
    :class="`btn--${variant}`"
    :type="type"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>


<style lang="scss">
.btn {
  padding: $gap-2 $gap-4;
  border-radius: $round-1;
  border: 1px solid $border-color;
  font-size: 14px;
  transition: background-color 200ms ease, color 200ms ease;
  font-weight: 700;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: $focus-shadow;
  }
  // variants
  &--primary {
    background-color: $primary;
    color: $white;
    border-color: $primary;
    &:hover {
      background-color: $primary-dk;
      border-color: $primary-dk;
    }
  }

  &--secondary {
    background-color: $white;
    color: $grey-8;
    border-color: $border-color;
    &:hover {
      background-color: $primary;
      border-color: $primary;
      color: $white;
    }
  }

  &--terciary {
    background-color: transparent;
    color: $grey-8;
    border-color: transparent;
    &:hover {
      border-color: $border-color;
      background-color: $grey-1;
    }
  }
}
</style>
