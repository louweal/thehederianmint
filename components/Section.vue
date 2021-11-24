<template>
  <section class="section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section {
  position: relative;
  padding: 3rem 0;

  @include from(l) {
    padding: 5rem 0;
  }
}
</style>
