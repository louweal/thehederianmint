<template>
  <div
    class="star"
    :style="{
      left: this.randomXPos,
      top: this.randomYPos,
      width: this.randomSize,
      height: this.randomSize,
      animationDelay: this.randomDelay,
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
      return 1 + Math.ceil(Math.random() * 5) + "px";
    },
    randomDelay() {
      return Math.ceil(Math.random() * 9) + "s";
    },
  },
};
</script>

<style lang="scss" scoped>
// $randomNumber: random(10);

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
  animation: pulse 3.5s ease-in-out infinite;
  // animation-delay: var(--animation-delay);
}

@keyframes pulse {
  from {
    transform: scale(100%);
    opacity: 1;
  }
  to {
    transform: scale(10%);
    opacity: 0;
  }
}
</style>
