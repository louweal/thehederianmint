<template>
  <main class="main">

    <Section>
      <Container>
        <h2>Non-fungible tokens</h2>
        <h1 class="fs-5xl">Find the perfect coin for your inner hbarbarian</h1>

        ---
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="grid">
          <div
            v-for="item in $options.tokens"
            :key="item.ID"
            class="col-xs-12 col-l-4"
          >
            <Card :data="item" />
          </div>
        </div>
      </Container>
    </Section>

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
    rgba(0, 0, 0, 1) 0%,
    rgba(#403345, 1) 100%
  );
}
</style>
