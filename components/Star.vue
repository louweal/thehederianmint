<template>
  <div
    class="star"
    :style="{
      background: this.randomGradient,
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

  props: {
    min: {
      //y
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },

  computed: {
    randomGradient() {
      return `radial-gradient( circle, ${this.randomRGB(
        0.7
      )} 0%, ${this.randomRGB(0.75)} 100%)`;
    },
    randomXPos() {
      return Math.ceil(Math.random() * 100) + "%";
    },
    randomYPos() {
      return this.min + Math.ceil(Math.random() * (this.max - this.min)) + "%";
    },
    randomSize() {
      return 6 + Math.ceil(Math.random() * 20) + "px";
    },
    randomDelay() {
      return Math.ceil(Math.random() * 15) + "s";
    },
  },

  methods: {
    randomColor(min, max) {
      return min + Math.ceil(Math.random() * (max - min));
    },

    randomRGB(opacity) {
      return `rgba(${this.randomColor(10, 30)}, ${this.randomColor(
        10,
        30
      )}, ${this.randomColor(160, 215)}, ${opacity})`;
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
  border: 1px solid (#fff, 0.2);
  border-radius: 50%;
  background-color: red; //var(--color1);
  // background: radial-gradient(
  //   circle,
  //   rgba(63, 94, 251, 1) 0%,
  //   rgba(252, 70, 107, 1) 100%
  // );
  animation: pulse 5.5s ease-in-out infinite;
  // animation-delay: var(--animation-delay);
}

@keyframes pulse {
  0% {
    transform: scale(10%) translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: scale(100%) translateY(0px);
    opacity: 1;
  }
  100% {
    transform: scale(10%) translateY(-100px);
    opacity: 0;
  }
}
</style>
