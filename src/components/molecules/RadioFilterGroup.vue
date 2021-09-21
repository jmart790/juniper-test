<script>
import RadioFilterBtn from "@/components/atoms/RadioFilterBtn.vue";

export default {
  name: "RadioFilterGroup",
  components: { RadioFilterBtn },
  model: {
    props: "selected",
    event: "change"
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number, Object],
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<template>
  <div class="radio-filter-group">
    <RadioFilterBtn
      v-for="(option, index) in options"
      :key="`${option.label}-${index}`"
      :label="option.label"
      :value="option.value"
      :selected="value"
      @change="updateValue(option.value)"
    />
  </div>
</template>


<style lang="scss">
.radio-filter-group {
  display: flex;
  gap: $gap-4;
}
</style>