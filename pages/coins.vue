<template>
  <main class="main">
    <div class="bg"></div>
    <Header :fixed="true" />

    <Section>
      <Container> this is nft page </Container>
    </Section>

    <Footer />
  </main>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Hero from "./../components/Hero.vue";
import Section from "./../components/Section.vue";

export default {
  name: "Main",

  components: { Header, Hero, Section, Footer },
  transition: "home",
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
