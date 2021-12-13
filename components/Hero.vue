<template>
  <div class="hero">
    <div class="hero__bg">
      <div class="hero__test">
        <h2>Alpha<br />Set</h2>
      </div>
      <div class="grid collapse no-bottom-margin-cols">
        <div class="col-xs-3 col-l-6">
          <Hero-Video />
        </div>
        <div class="col-xs-3 col-l-6">
         <Hero-Video />
        </div>
        <div class="col-xs-3 col-l-6">
          <Hero-Video />
        </div>
        <div class="col-xs-3 col-l-6">
          <Hero-Video />  
        </div>
       </div>
    </div>
    <Container class="hero__inner">
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

  &__inner {
    button {
      z-index: 2424235235;
    }
  }

  &__bg {
    @include pin;
    display: flex;
    justify-content: flex-end;
    
    // border: 3px solid plum;
    // background-color: rgba(255,0,0,0.3);
    // z-index: 2324234235;

    @include from(l) {
      align-items: center;
      left: 40%;
    }
  }

  &__test {
    // border: 1px solid plum;
    @include pin(); 
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 210px;
      color: rgba(#b8ac84, 0.5); ////get-color(primary); // rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 1;
      z-index: -1;
      transform: rotate(10deg);
    }
  }
}
</style>
