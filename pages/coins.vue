<template>
  <main class="main">
    <Section>
      <Container>
        <div class="grid collapse">
          <div class="col-xs-11 col-l-5">
            <h2 class="fs-2xl f-base fade-in-up delay-1000">
              Non-fungible tokens
            </h2>
            <h1 class="fs-5xl" ref="splitting">
              Find the perfect coin for your inner hbarbarian
            </h1>
          </div>
        </div>

        <hr />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="grid">
          <div
            v-for="(item, index) in $options.tokens"
            :key="item.ID"
            :class="`delay-l-${(index % 3) * 200}`"
            class="col-xs-12 col-l-4"
            data-aos="fade-in-up"
          >
            <Card :data="item" />
          </div>
          <div class="col-xs-12 col-l-4 delay-l-400" data-aos="fade-in-up">
            <ActionCard />
          </div>
        </div>
      </Container>
          <div id="contact"></div>
    </Section>
  </main>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Hero from "./../components/Hero.vue";
import Section from "./../components/Section.vue";
import tokens from "./../data/tokens.json";

let Splitting = null;

if (process.client) {
  Splitting = require("splitting");
}

export default {
  name: "Main",

  components: { Header, Hero, Section, Footer },
  transition: "home",

  tokens: tokens,

  methods: {
    initSplitting: function (target) {
      Splitting({
        target: target,
        by: "chars",
        key: null,
      });
    },
  },
  mounted() {
    let target = this.$refs["splitting"];
    this.initSplitting(target);
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
    rgba(0, 0, 0, 1) 0%,
    rgba(#403345, 1) 100%
  );
}
</style>
