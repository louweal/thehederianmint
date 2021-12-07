<template>
  <header class="header" :class="{ 'header--fixed': fixed }">
    <Container :fluid="true">
      <div class="grid collapse no-bottom-margin-cols align-xs-middle">
        <div class="col-xs-4">
          <div class="hamburger" @click="togglePushmenu">
            <span />
          </div>
        </div>
        <div class="col-xs-4 align-xs-center">
          <NuxtLink to="/#top">
            <div class="header__logo"></div>
          </NuxtLink>
        </div>
        <div class="col-xs-4 align-xs-end hide--xs display--l">
          <Button title="Visit GoMint" url="https://gomint.me/gallery/?creator=H190555" />
        </div>
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8841911764705882) 0%,
    rgba(0, 0, 0, 0.09987745098039214) 100%
  );
  z-index: 300;

  &--fixed {
    position: sticky;
    top: 0;
  }

  &__logo {
    display: inline-block;
    width: 117px * 0.8;
    height: 60px * 0.8;
    box-sizing: border-box;
    background-size: cover;
    background-image: url(../images/logo.svg);

    @include from(m) {
      width: 117px;
      height: 60px;
    }

    img,
    svg {
      width: 100%;
      display: block;
    }
  }
}
</style>

<script>
export default {
  name: "Header",

  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    togglePushmenu() {
      let pushmenu = document.querySelector(".pushmenu");
      // console.log(pushmenu);
      pushmenu.classList.toggle("pushmenu--active");

      let hamburger = document.querySelector(".hamburger");
      // console.log(hamburger);
      hamburger.classList.toggle("hamburger--active");
    },
  },
};
</script>
