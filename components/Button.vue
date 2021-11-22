<template>
  <div class="button-container">
    <NuxtLink
      v-if="url[0] === '/'"
      :to="url"
      class="button"
      :class="`button--${modifier}`"
    >
      {{ title }}
    </NuxtLink>
    <a v-else class="button" :class="{ 'button--secondary': modifier === 'secondary' }">
      {{ title }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  display: inline-block;
}

.button {
  background-color: #b8ac84; //get-color("primary");
  padding: 9px 25px;
  color: #000;
  display: inline-block;
  transition: all 0.3s ease-in;
  text-transform: uppercase;
  font-size: 16px;

  &:hover {
    filter: brightness(1.2);
    background: get-color(accent);
    color: #fff;
  }

  &--secondary {
    background-color: transparent;
    box-shadow: inset 0 0 0 1px #fff;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: get-color(accent);
    }
  }
}
</style>

<script>
export default {
  name: "Button",

  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    url: {
      type: String,
      default: "#",
      required: true,
    },
    modifier: {
      type: String,
      default: "",
    },
  },
};
</script>
