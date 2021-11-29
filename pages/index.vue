<template>
  <main class="main">
    <Hero />

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-4xl f-no-margin" data-aos="splitting">Newest</h2>
            <p class="f-no-margin"><i>The First Set</i></p>
          </div>
          <div class="col-xs-5 align-xs-end">
            <Button title="All NFTs" url="/coins" modifier="secondary" />
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



    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-12 col-l-4 offset-l-1">
            <h2 class="fs-4xl" data-aos="splitting">About</h2>

            <p data-aos="fade-in-up">
              The Hederian Mint was founded on 9 November 2021 in Leiden by
              Anneloes Louwe, a UX-designer and front-end developer by day and
              creative Hedera enthousiast by night.
            </p>

          </div>
          <div class="col-xs-12 offset-l-2 col-l-5">
            <div
            data-aos="fade-in-up"
              class="img ratio-4x3"
              :style="{
                backgroundImage: `url(` + require(`~/images/about-1.png`) + `)`,
              }"
            />
          </div>
        </div>
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-4xl f-no-margin" data-aos="splitting">Most popular</h2>
          </div>
          <div class="col-xs-5 align-xs-end">
            <Button title="All NFTs" url="/coins" modifier="secondary" />
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
      return this.$options.tokens.filter((x) => x.popular !== false).sort((a, b) => (a.popular > b.popular) ? 1 : -1);
    },
    newTokens() {
      return this.$options.tokens.filter((x) => x.new !== false).sort((a, b) => (a.new > b.new) ? 1 : -1);
    },
  },
};
</script>
