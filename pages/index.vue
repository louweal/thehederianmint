<template>
  <main class="main">
    <div class="bg"></div>
    <Header :fixed="true" />

    <Hero />

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-4xl">Most popular</h2>
          </div>
          <div class="col-xs-5 align-xs-end">
            <Button title="All coins" url="/coins" modifier="secondary" />
          </div>
        </div>

        <div class="grid">
          <div
            v-for="item in popularTokens"
            :key="item.ID"
            class="col-xs-12 col-l-4"
          >
            <Card :data="item" />
          </div>
        </div>
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-4xl">New</h2>
          </div>
          <div class="col-xs-5 align-xs-end">
            <Button title="All coins" url="/coins" modifier="secondary" />
          </div>
        </div>

        <div class="grid">
          <div
            v-for="item in newTokens"
            :key="item.ID"
            class="col-xs-12 col-l-4"
          >
            <Card :data="item" />
          </div>
        </div>
      </Container>
    </Section>

    <Footer />
  </main>
</template>

<script>
// import Header from "./../components/Header";
// import Footer from "./../components/Footer";
// import Hero from "./../components/Hero.vue";
// import Section from "./../components/Section.vue";
import tokens from "./../data/tokens.json";

export default {
  name: "Main",

  // components: { Header, Hero, Section, Footer },
  transition: "home",

  tokens: tokens,

  computed: {
    popularTokens() {
      return this.$options.tokens.filter((x) => x.popular !== false);
    },
    newTokens() {
      return this.$options.tokens.filter((x) => x.new !== false);
    },
  },
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
    rgba(0, 0, 0, 1) 30%,
    rgba(#403345, 1) 100%
  );
}
</style>
