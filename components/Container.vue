<template>
  <div class="container" :class="{ 'container--fluid': fluid }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  position: relative;
  width: 90%;
  max-width: $container-max-width;

  @include from(xl) {
    width: 95%;
  }

  &--fluid {
    max-width: none;
  }
}
</style>

<script>
export default {
  name: "Container",

  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
