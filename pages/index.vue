<template>
  <main class="main">
    <Hero />

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-4xl f-no-margin" data-aos="splitting">Newest</h2>
            <!-- <p class="f-no-margin"><i>The First Set</i></p> -->
          </div>
          <div class="col-xs-5 align-xs-end">
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
    </Section>

    <AboutSection />

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-4xl f-no-margin" data-aos="splitting">
              Most popular
            </h2>
          </div>
          <div class="col-xs-5 align-xs-end">
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
    </Section>

    <Section>
      <Container>
                <div class="grid align-xs-middle collapse">
          <div class="col-xs-6">
            <h2 class="fs-4xl f-no-margin" data-aos="splitting">
              Etsy Store
            </h2>
          </div>
          <div class="col-xs-6 align-xs-end">
            <Button title="Coming soon!" url="/nft" modifier="secondary" />
          </div>
        </div>

        <div class="grid collapse no-bottom-margin-cols" data-aos="fade-in-up">
          <div class="col-xs-12 col-l-6">
            <div
              class="img ratio-16x9"
              :style="{
                backgroundImage: `url(` + require(`~/images/hbar-3d.png`) + `)`,
              }"
            />
          </div>
          <div class="col-xs-12 col-l-6">
            <div
              class="img ratio-16x9"
              :style="{
                backgroundImage: `url(` + require(`~/images/elephant-3d.png`) + `)`,
              }"
            />
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
        .filter((x) => x.popular !== false)
        .sort((a, b) => ((a.stock.max - a.stock.current) < (b.stock.max - b.stock.current) ? 1 : -1));
    },
    newTokens() {
      return this.$options.tokens
        .filter((x) => x.new !== false)
        .sort((a, b) => (a.new > b.new ? 1 : -1));
    },
  },
};
</script>
