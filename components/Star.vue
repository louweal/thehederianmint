<template>
  <div
    class="star"
    :style="{
      left: this.randomXPos,
      top: this.randomYPos,
      width: this.randomSize,
      height: this.randomSize,
    }"
  />
</template>

<script>
export default {
  name: "Star",

  computed: {
    randomXPos() {
      return Math.ceil(Math.random() * 100) + "%";
    },
    randomYPos() {
      return Math.ceil(Math.random() * 100) + "%";
    },
    randomSize() {
      return 3 + Math.ceil(Math.random() * 8) + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
.star {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8841911764705882) 1%,
    rgba(255, 255, 255, 0.09987745098039214) 100%
  );
}
</style>
