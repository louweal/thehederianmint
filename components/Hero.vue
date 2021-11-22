<template>
  <div class="hero">
    <div class="hero__bg">
      <div class="hero__bgvideo">
        <video
          playsinline
          muted
          loop
          autoplay
          src="#../videos/whale-gold.mp4"
          data-src-mobile="mobile.mp4"
          data-src-desktop="desktop.mp4"
        >
          <div class="video-error">Unable to play video on this device</div>
        </video>
      </div>
    </div>
    <Container>
      <div class="grid">
        <div class="col-xs-12 col-l-5 offset-l-1">
          <h1 class="fs-6xl">Take your hbarbarianism to the next level</h1>

          <p>
            Nulla sit condimentum morbi pulvinar leo velit ultrices. Vitae ipsum
            posuere netus nibh vitae. Ut risus quis non, ac aliquam dictum. Amet
            egestas dui egestas consequat orci.
          </p>

          <p>
            <Button title="Visit GoMint" url="https://www.gomint.me/" />
            <Button title="All NFTs" url="/coins" modifier="secondary" />
          </p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "./../components/Container";
import Button from "./../components/Button";

export default {
  name: "Hero",

  components: { Container, Button },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: calc(100vh - 108px);
  padding-top: 60px;
  display: flex;
  align-items: center;

  &__bg {
    @include pin;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // border: 3px solid plum;
  }

  &__bgvideo {
    display: flex;
    align-items: center;
    max-width: 1137px;
    max-height: 720px;
    right: 0;
    overflow: hidden;
  }
}
</style>
