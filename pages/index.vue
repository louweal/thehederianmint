<template>
  <main class="main">
    <Hero />

    <Section>
      <Container>
        <div class="grid collapse align-xs-middle">
          <div class="col-xs-6">
            <h2 class="fs-4xl f-no-margin" data-aos="splitting">Popular</h2>
          </div>
          <div class="col-xs-6 align-xs-end">
            <Button title="All NFTs" url="/nft" modifier="secondary" />
          </div>
        </div>

        <div class="grid">
          <div
            v-for="(item, index) in popularTokens"
            :key="item.ID"
            :class="`delay-l-${(index % 3) * 200}`"
            class="col-xs-12 col-l-4"
            data-aos="fade-in-up"
          >
            <Card :data="item" />
          </div>
        </div>
      </Container>

      <div id="contact"></div>
    </Section>

    <AboutSection />

    <Section>
      <Container>
        <div class="grid collapse align-xs-middle">
          <div class="col-xs-6">
            <h2 class="fs-4xl f-no-margin" data-aos="splitting">New</h2>
            <!-- <p class="f-no-margin"><i>The First Set</i></p> -->
          </div>
          <div class="col-xs-6 align-xs-end">
            <Button title="All NFTs" url="/nft" modifier="secondary" />
          </div>
        </div>

        <div class="grid">
          <div
            v-for="(item, index) in newTokens"
            :key="item.ID"
            :class="`delay-${(index % 3) * 200}`"
            class="col-xs-12 col-l-4"
            data-aos="fade-in-up"
          >
            <Card :data="item" />
          </div>
        </div>
      </Container>
      <div id="contact"></div>
    </Section>
  </main>
</template>

<script>
import tokens from "./../data/tokens.json";
import "../assets/css/components/_img.scss";

export default {
  name: "Main",

  transition: "home",

  tokens: tokens,

  computed: {
    popularTokens() {
      return this.$options.tokens
        .sort((a, b) =>
          a.stock.current / a.stock.max < b.stock.current / b.stock.max ? -1 : 1
        )
        .slice(0, 3);
    },
    newTokens() {
      return this.$options.tokens
        .filter((x) => x.new !== false)
        .sort((a, b) => (a.new > b.new ? 1 : -1));
    },
  },
};
</script>
