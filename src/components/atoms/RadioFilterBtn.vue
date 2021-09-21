<script>
export default {
  name: "RadioFilterBtn",
  model: {
    props: "value",
    event: "change"
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      required: true
    },
    selected: {
      type: [Boolean, Number, String],
      default: false
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <label class="radio-filter">
    <input
      type="radio"
      class="radio-filter__input"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners"
      :checked="value === selected"
      @input="$emit('change', $event.target.checked)"
      aria-label="radio"
    />
    <div class="radio-filter__fake-input">
      {{ label }}
    </div>
  </label>
</template>

<style lang="scss">
.radio-filter {
  display: flex;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-transform: capitalize;

  /* Hide the browser's default radio button */
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &__fake-input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $gap-2 $gap-4;
    border-radius: $round-1;
    border: 1px solid $border-color;
    font-size: 14px;
    font-weight: 700;
    color: $grey-3;
  }

  &__input:checked ~ &__fake-input {
    background-color: $primary;
    border-color: $primary;
    color: $white;
  }

  &__fake-input:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    box-shadow: $focus-shadow;
    opacity: 0;
  }
  &__input:hover ~ &__fake-input {
    border-color: $primary;
  }
  &__input:focus ~ &__fake-input:after {
    opacity: 1;
  }
}
</style>