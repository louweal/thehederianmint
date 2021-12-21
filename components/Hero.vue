<template>
  <div class="hero">
    <div class="hero__bg">
      <!-- <div class="hero__token" ref="token">
        <span class="hero__token__id">{{ id }}</span>
        <span>{{ title }}</span>
        <span>{{ priceSilver !== "" ? "SILVER" : "" }}</span>
        <span class="hero__token__price">{{ priceSilver }}</span>
        <span>{{ priceSilver !== "" ? "GOLD" : "" }}</span>
        <span class="hero__token__price">{{ priceGold }}</span>
      </div> -->
      <div class="grid collapse no-bottom-margin-cols">
        <div
          class="col-xs-3 col-l-6"
          @mouseover="
            updateInfo('#001', 'The Hederian Elephant', '128 HBAR', '1024 HBAR')
          "
          @mouseleave="updateInfo('', '', '', '')"
        >
          <Hero-Video class="fade-in-up delay-1000" />
        </div>
        <div
          class="col-xs-3 col-l-6"
          @mouseover="
            updateInfo('#002', 'The Hederian Whale', '128 HBAR', '1024 HBAR')
          "
          @mouseleave="updateInfo('', '', '', '')"
        >
          <Hero-Video class="fade-in-up delay-1000" />
        </div>
        <div
          class="col-xs-3 col-l-6"
          @mouseover="
            updateInfo('#003', 'The Hederian Kangaroo', '128 HBAR', '1024 HBAR')
          "
          @mouseleave="updateInfo('', '', '', '')"
        >
          <Hero-Video class="fade-in-up delay-1250" />
        </div>
        <div
          class="col-xs-3 col-l-6"
          @mouseover="
            updateInfo('#004', 'The Hederian Dutchman', '128 HBAR', '1024 HBAR')
          "
          @mouseleave="updateInfo('', '', '', '')"
        >
          <Hero-Video class="fade-in-up delay-1250" />
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

  data: function () {
    return {
      id: "",
      title: "",
      priceSilver: "",
      priceGold: "",
    };
  },
  // watch: {
  //   id: function (val) {
  //     if (val !== "" && !this.$refs.token.classList.contains("fade-in-up")) {
  //       this.$refs.token.classList.add("fade-in-up");
  //     } else {
  //       if (this.$refs.token.classList.contains("fade-in-up")) {
  //         this.$refs.token.classList.remove("fade-in-up");
  //       }
  //     }
  //   },
  // },

  methods: {
    updateInfo(id, title, priceSilver, priceGold) {
      // this.id = id;
      // this.title = title;
      // this.priceSilver = priceSilver;
      // this.priceGold = priceGold;
    },
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
    justify-content: flex-end;

    // border: 3px solid plum;
    // background-color: rgba(255,0,0,0.3);
    // z-index: 2324234235;

    @include from(l) {
      align-items: center;
      left: 40%;
    }
  }

  // &__token {
  //   // border: 1px solid plum;
  //   @include pin();
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   z-index: -1;

  //   span {
  //     margin-bottom: 10px;
  //   }

  //   &__id,
  //   &__title,
  //   &__price {
  //     text-align: center;
  //     line-height: 1;
  //     color: rgba(#b8ac84, 0.9);
  //   }

  //   &__id {
  //     font-size: 100px;
  //     color: rgba(#b8ac84, 0.6);
  //   }

  //   &__title {
  //     font-size: 120px;
  //   }
  // }
}
</style>
