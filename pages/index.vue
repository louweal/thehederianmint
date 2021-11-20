<template>
  <!-- <Tutorial/> -->
  <main class="main">
    <div class="bg"></div>
    <Header />

    hello
    <Hero />

    <Section />
  </main>
</template>

<script>
import Header from "./../components/Header";
import Hero from "./../components/Hero.vue";
import Section from "./../components/Section.vue";

export default {
  name: "Main",

  components: { Header, Hero, Section },
};
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(#403345, 1) 100%
  );
}
</style>
