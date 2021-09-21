<script>
import AppLayout from "@/components/layouts/AppLayout";

export default {
  components: {
    AppLayout
  }
};
</script>


<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<style lang="scss">
@import "./assets/style.css";
* {
  margin: unset;
  padding: unset;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
