<template>
  <div class="video">
    <h3 class="video__id">#001</h3>

    <video xxwidth="600" xxxheight="100%" autoplay loop muted playsinline>
      <!-- <source
      src="../videos/elephant-gold-hero.hevc.mp4"
      type='video/mp4; codecs="hvc1"'
    /> -->
      <source src="../videos/elephant.webm" type="video/webm" />
    </video>
  </div>
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

.video {
  position: relative;
  width: 100%;
  height: 100%;
  // border: 1px solid red;

  &__id {
    position: absolute;
    right: 17%;
    top: 30%;
    font-size: 150px;
    color: get-color(primary);
    text-align: right;
    opacity: 0.4;
    z-index: -1;
  }
}
</style>
