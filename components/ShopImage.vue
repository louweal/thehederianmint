<template>
  <a
    class="shop-image img ratio-16x9"
    target="_blank"
    rel="noreferrer nofollow"
  >
    <div
      class="shop-image__default img ratio-16x9"
      :style="{
        backgroundImage: `url(` + item.image + `)`,
      }"
    />
    <div
      class="shop-image__hovered img ratio-16x9"
      :style="{
        backgroundImage: `url(` + item.hoverImage + `)`,
      }"
    />
  </a>
</template>

<script>
import "../assets/css/components/_img.scss";

export default {
  props: {
    item: {
      type: [Array, Boolean],
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-image {
  position: relative;
  display: block;
  cursor: pointer;

  &__default,
  &__hovered {
    transition: opacity 0.35s 0.05s linear;
  }

  &:hover {
    .shop-image__default {
      // display: none;
      opacity: 0;
    }
    .shop-image__hovered {
      opacity: 1;
    }
  }

  &__hovered {
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 100;
  }
}
</style>
