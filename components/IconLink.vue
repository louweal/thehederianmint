<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="icon-link">
    <div class="icon-link__icon">
      <i :class="`icon-${icon}`"></i>
    </div>
    <div class="icon-link__label" v-text="title" />
  </a>
</template>

<style lang="scss" scoped>
.icon-link {
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  margin: 0.5rem 0;
  column-gap: 20px;
  transition: all 0.3 ease-in;
  color: rgba(#fff, 0.75);
  font-family: $base-font;

  &:hover {
    color: rgba(get-color(primary), 0.75);

    .icon-link__icon {
      border-color: get-color(primary);

      i {
        color: get-color(primary);
      }
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: 1px solid #fff;
    opacity: 0.5;
  }
}
</style>

<script>
export default {
  name: "IconLink",

  props: {
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
