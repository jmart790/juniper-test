<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <header class="app-header">
    <nav class="app-nav">
      <router-link to="/">
        <img
          class="app-nav__brand"
          src="http://images.repzio.com/productimages/772/logo772_lg.jpg?height=75"
          alt="Company logo"
        />
      </router-link>
      <div class="app-nav__links">
        <router-link class="app-nav__link" to="/" exact>
          Home
        </router-link>
        <router-link class="app-nav__link" to="/sales-rep">
          Sales Rep
        </router-link>
      </div>
    </nav>
  </header>
</template>


<style lang="scss">
.app-header {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  background: $off-white;
  border-bottom: 1px solid $border-color;
}
.app-nav {
  padding: 0 $gap-5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: $tablet) {
    padding: 0 $gap-8;
  }
  @media screen and (min-width: $laptop-lg) {
    max-width: 1660px;
    margin: 0 auto;
  }
  &__brand {
    max-height: 50px;
    mix-blend-mode: darken;
    @media screen and (min-width: $laptop) {
      max-height: unset;
    }
  }
  &__link {
    position: relative;
    margin: 0 $gap-2;
    padding: $gap-1;
    font-weight: 600;
    color: $third-font-color;
    text-decoration: none;
    letter-spacing: 1px;
    transition: color 0.2s ease-in-out;
    @media screen and (min-width: $tablet) {
      margin: 0 $gap-4;
      padding: $gap-2;
    }
    &:hover,
    &:focus {
      color: $primary-font-color;
    }
    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      right: 0;
      width: 0;
      height: 2px;
      margin: 0 auto;
      background: $primary;
      border-radius: $round-2;
      transition: width 0.35s ease-in-out;
    }
    &.router-link-active {
      color: $primary-font-color;
      font-weight: 700;
      &::before {
        width: 100%;
        transition: width 0.35s ease-in-out;
      }
    }
  }
}
</style>