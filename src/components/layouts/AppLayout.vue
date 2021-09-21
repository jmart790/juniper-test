<script>
export default {
  name: "AppLayout"
};
</script>

<template>
  <div class="app-layout">
    <header class="app-layout__header">
      <div class="app-layout__header-inner">
        <img
          src="http://images.repzio.com/productimages/772/logo772_lg.jpg?height=75"
          alt="Company logo"
        />
      </div>
    </header>
    <main class="app-layout__page">
      <slot />
    </main>
  </div>
</template>


<style lang="scss">
.app-layout {
  width: 100vw;

  &__header {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    background: $off-white;
    border-bottom: 1px solid $border-color;
  }
  &__header-inner {
    padding: 0 $gap-5;
    @media screen and (min-width: $tablet) {
      padding: 0 $gap-8;
    }
    @media screen and (min-width: $laptop-lg) {
      max-width: 1660px;
      margin: 0 auto;
    }
    img {
      mix-blend-mode: darken;
    }
  }
  &__page {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin-top: 80px 0;
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
    @media screen and (min-width: $laptop-lg) {
      max-width: 1660px;
      margin: 80px auto;
    }
  }
}
</style>