<template>
  <div class="video">
    <h3 class="video__id">{{ id }}</h3>
    <video xxwidth="600" xxxheight="100%" autoplay loop muted playsinline>
      <source :src="`${url}#t=${start}`" type="video/webm" />
    </video>
  </div>
</template>

<!-- <source
      src="../videos/elephant-gold-hero.hevc.mp4"
      type='video/mp4; codecs="hvc1"'
    /> -->

<script>
export default {
  props: {
    id: {
      type: "String",
      default: "",
    },
    url: {
      type: "String",
      default: "#",
    },
    start: {
      type: "Number",
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
video {
  height: 100%;
  width: 100%;
}

.video {
  position: relative;
  width: 100%;
  height: 100%;
  // border: 1px solid red;

  @include from(l) {
  }

  &__id {
    position: absolute;
    right: 17%;
    top: 30%;
    font-size: 50px;
    color: get-color(primary);
    text-align: right;
    opacity: 0.4;
    z-index: -1;

    @include from(l) {
      font-size: 150px;
    }
  }
}
</style>
