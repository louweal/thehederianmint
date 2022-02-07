<template>
  <main class="main">
    <Section>
      <Container>
        <div class="grid collapse">
          <div class="col-xs-11 col-l-5">
            <!-- <h2 class="fs-2xl f-base fade-in-up">
              Non-fungible tokens
            </h2> -->
            <h1 class="fs-5xl" data-anim="splitting">
              Find the perfect coin for your inner hbarbarian
            </h1>
          </div>
        </div>

        <hr class="fade-in-up delay-500" />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="grid collapse align-l-middle no-bottom-margin-cols">
          <div class="col-xs-12 col-l-7 align-xs-center align-l-start">
            <h2 class="fs-4xl" data-anim="splitting">Alpha Series</h2>
          </div>
          <div class="col-xs-12 col-l-5 align-xs-center align-l-end">
            Release date: Dec 7nd 2021
          </div>
        </div>
        <br /><br />
        <div class="grid">
          <div
            v-for="(item, index) in alphaSet"
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
    </Section>

    <Section>
      <Container>
        <div class="grid collapse align-l-middle xxxno-bottom-margin-cols">
          <div class="col-xs-12 col-l-7 align-xs-center align-l-start">
            <h2 class="fs-4xl" data-aos="splitting">Beta Series</h2>
          </div>
          <div
            class="col-xs-12 col-l-5 align-xs-center align-l-end"
            data-aos="fade-in-up"
          >
            Release date: Feb 7th
          </div>
        </div>
        <br /><br />
        <div class="grid">
          <div
            v-for="(item, index) in betaSet"
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
        <!-- </div> -->
      </Container>
      <div id="contact"></div>
    </Section>
  </main>
</template>

<script>
import tokens from "./../data/tokens.json";

export default {
  name: "Coins",

  transition: "home",

  tokens: tokens.sort((a, b) => (a.ID > b.ID ? 1 : -1)),

  computed: {
    alphaSet() {
      return this.$options.tokens.filter((t) => t.set === "alpha");
    },

    betaSet() {
      return this.$options.tokens.filter((t) => t.set === "beta");
    },
  },
};
</script>

<style lang="scss" scoped></style>
