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
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 50px 0;
    padding: $gap-4 $gap-5;
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    @media screen and (min-width: $tablet) {
      padding: $gap-6 $gap-8;
    }
    @media screen and (min-width: $laptop) {
      margin: 80px auto;
    }
    @media screen and (min-width: $laptop-lg) {
      max-width: 1660px;
    }
  }
}
</style>