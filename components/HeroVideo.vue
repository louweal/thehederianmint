<template>
    <video xxwidth="600" xxxheight="100%" autoplay loop muted playsinline>
    <!-- <source
      src="../videos/elephant-gold-hero.hevc.mp4"
      type='video/mp4; codecs="hvc1"'
    /> -->
    <source src="../videos/elephant.webm" type="video/webm" />
  </video>
</template>

<style lang="scss" scoped>
    video {
      height: 100%;
      // transform: scale(200%);
      // background-color: yellow;
      width: 100%;
      // background-color: yellow;

      @include from(l) {
        // height: auto;
        // width: 70%;
      }
    }
</style>