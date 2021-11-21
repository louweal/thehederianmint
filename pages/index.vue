<template>
  <main class="main">
    <div class="bg"></div>
    <Header :fixed="true" />

    <Hero />

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-3xl">Most popular</h2>
          </div>
          <div class="col-xs-5 align-xs-end">
            <Button
              title="Visit GoMint"
              url="https://www.gomint.me/"
              :secondary="true"
            />
          </div>
        </div>

        <div class="grid align-xs-middle">
          <div
            v-for="data in $options.tokens"
            :key="data.ID"
            class="col-xs-6 col-l-4"
          >
            <Card :data="data" />
          </div>
        </div>
      </Container>
    </Section>

    <Footer />
  </main>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Hero from "./../components/Hero.vue";
import Section from "./../components/Section.vue";
import tokens from "./../data/tokens.json";

export default {
  name: "Main",

  components: { Header, Hero, Section, Footer },
  transition: "home",

  tokens: tokens,
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
