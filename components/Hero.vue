<template>
  <div class="hero">
    <div class="hero__bg">
      <div class="hero__bgvideo">
        <!-- <video playsinline muted loop autoplay src="../videos/thm-v1.mp4">
          <div class="video-error">Unable to play video on this device</div>
        </video> -->
        <video xxwidth="600" xxxheight="100%" autoplay loop muted playsinline>
          <!-- <source
            src="../videos/elephant-gold-hero.hevc.mp4"
            type='video/mp4; codecs="hvc1"'
          /> -->
          <source src="../videos/elephant.webm" type="video/webm" />
        </video>
      </div>
    </div>
    <Container>
      <div class="grid no-bottom-margin-cols">
        <div class="col-xs-12 col-l-6 offset-l-1">
          <h1 class="fs-6xl" data-anim="splitting">
            Take your hbarbarianism to the next level
          </h1>
        </div>
        <div class="col-xs-12"><!-- empty --></div>
        <div class="col-xs-12 col-l-5 offset-l-1">
          <p class="fade-in-up delay-1000">
            Discover the very first set of exclusive high-quality HBAR coins
            ever minted on the Hedera network. Collectable bullion coins for
            Hederians and Hbarbarians
          </p>

          <!-- <Button title="Visit GoMint" url="https://www.gomint.me/" /> -->
          <Button
            title="Browse nfts"
            url="/nft"
            modifier="secondary"
            class="fade-in-up delay-1250"
          />

          <br /><br />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: calc(100vh - 97px);
  padding-top: 60px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @include from(l) {
    height: calc(100vh - 108px);
  }

  &__bg {
    @include pin;
    right: 8%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // border: 3px solid plum;
    z-index: 2324234235;
  }

  &__bgvideo {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100vh;
    // max-height: 100vh;
    right: 53%;
    overflow: hidden;
    // background-color: red;
    // filter: brightness(0.6);
    // border: 1px solid red;

    video {
      height: 170vh;
      // transform: scale(200%);
      // background-color: yellow;
      width: 100vw;

      @include from(l) {
        // height: auto;
        width: 65vw;
      }
    }

    @include from(l) {
      max-width: 1137px;
      max-height: 720px;
      filter: brightness(0.8);
    }
  }
}
</style>
