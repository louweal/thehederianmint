<template>
  <div class="hero">
    <div class="hero__bg">
      <div class="grid collapse no-bottom-margin-cols">
        <div class="col-xs-4 col-l-6">
          <Hero-Video
            class="fade-in-up delay-1000"
            id="#001"
            :url="require(`~/videos/elephant.webm`)"
          />
        </div>
        <div class="col-xs-4 col-l-6">
          <Hero-Video
            class="fade-in-up delay-1000"
            id="#002"
            start="1"
            :url="require(`~/videos/whale-silver_VP9.webm`)"
          />
        </div>
        <div class="col-xs-4 col-l-6 hide--xs display--l">
          <Hero-Video
            class="fade-in-up delay-1250"
            id="#003"
            start="2"
            :url="require(`~/videos/kangaroo-silver_VP9.webm`)"
          />
        </div>
        <div class="col-xs-4 col-l-6">
          <Hero-Video
            class="fade-in-up delay-1250"
            id="#004"
            :url="require(`~/videos/dutchman-gold_VP9.webm`)"
          />
        </div>
      </div>
    </div>
    <Container class="hero__inner">
      <div class="grid no-bottom-margin-cols">
        <div class="offset-xs-0 offset-l-1"></div>
        <div class="col-xs-12 col-l-6">
          <h1 class="fs-6xl" data-anim="splitting">
            Take your hbarbarianism to the next level
          </h1>
        </div>
        <div class="col-xs-12"><!-- empty --></div>
        <div class="offset-xs-0 offset-l-1"></div>
        <div class="col-xs-12 col-l-5">
          <p class="fade-in-up delay-1000">
            Discover the very first set of exclusive high-quality HBAR coins
            ever minted on the Hedera network. Collectable bullion coins for
            Hederians and Hbarbarians
          </p>

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

  data: function () {
    return {
      id: "",
      title: "",
      priceSilver: "",
      priceGold: "",
    };
  },
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

  &__inner {
    button {
      z-index: 2424235235;
    }
  }

  &__bg {
    @include pin;
    display: flex;
    justify-content: flex-start;
    bottom: 50%;
    display: none;

    @include from(l) {
      display: block;
      align-items: center;
      justify-content: flex-end;
      bottom: 0;
      left: 40%;
    }
  }
}
</style>
