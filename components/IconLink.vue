<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="icon-link">
    <div class="icon-link__icon">
      <i :class="`icon-${icon}`">ii</i>
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

  &:hover {
    .icon-link__icon {
      border-color: get-color(primary);

      i {
        color: get-color(primary);
      }
    }
  }

  &__icon {
    width: 38px;
    height: 38px;
    border: 1px solid rgba(#fff, 0.5);
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
