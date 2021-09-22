<script>
import AppHeader from "@/components/organisms/AppHeader";

export default {
  name: "AppLayout",
  components: { AppHeader }
};
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="app-layout__page">
      <slot />
    </main>
  </div>
</template>


<style lang="scss">
.app-layout {
  width: 100vw;
  &__page {
    max-width: $container-max;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 50px 0;
    padding: $gap-4 $container-gap-1;
    @media screen and (min-width: $tablet) {
      padding: $gap-8 $container-gap-2;
    }
    @media screen and (min-width: $laptop) {
      padding: $gap-12 $container-gap-3;
      margin: 80px auto;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
}
</style>