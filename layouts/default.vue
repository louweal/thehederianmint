<template>
  <div>
    <div class="bg"></div>
    <Header :fixed="true" />

    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 30%,
    rgba(#403345, 1) 100%
  );
}
</style>