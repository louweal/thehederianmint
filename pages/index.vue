<template>
  <main class="main">
    <Hero />

    <Section>
      <Container>
        <div class="grid collapse align-xs-middle">
          <div class="col-xs-6">
            <h2 class="fs-4xl f-no-margin" data-sos="85">Popular</h2>
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
            class="col-xs-12 col-l-4 fade-in-up"
            data-aos="90"
          >
            <Card :data="item" />
          </div>
        </div>
      </Container>
    </Section>

    <AboutSection />

    <Section>
      <Container>
        <div class="grid collapse align-xs-middle">
          <div class="col-xs-6">
            <h2 class="fs-4xl f-no-margin" data-sos="85">Featured</h2>
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
            class="col-xs-12 col-l-4 fade-in-up"
            data-aos="90"
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
            <h2 class="fs-4xl f-no-margin" data-sos="85">Etsy Store</h2>
          </div>
          <div class="col-xs-6 align-xs-end">
            OPENS SOON
            <!-- <Button
              title="Coming soon!"
              url="#"
              modifier="secondary"
              class="button--ghost"
            /> -->
          </div>
        </div>

        <div
          class="grid collapse no-bottom-margin-cols fade-in-up"
          data-aos="90"
        >
          <div
            v-for="(item, index) in $options.shopItems"
            :key="index"
            class="col-xs-12 col-l-6"
          >
            <shop-image :item="item" />
          </div>
        </div>
      </Container>

      <div id="contact"></div>
    </Section>
  </main>
</template>

<script>
import tokens from "./../data/tokens.json";

export default {
  name: "Main",

  transition: "home",

  tokens: tokens.sort((a, b) => (a.ID > b.ID ? 1 : -1)),

  shopItems: [
    {
      image: require(`~/images/hbar-3d.png`),
      hoverImage: require(`~/images/hbar-3d-hover.png`),
      url: "#",
    },
    {
      image: require(`~/images/elephant-3d.png`),
      url: "#",
    },
  ],

  computed: {
    popularTokens() {
      return [...this.$options.tokens]
        .sort((a, b) =>
          a.stock.current / a.stock.max < b.stock.current / b.stock.max ? -1 : 1
        )
        .slice(0, 3);
    },
    newTokens() {
      return [...this.$options.tokens.filter((x) => x.new !== false)].sort(
        (a, b) => (a.new > b.new ? 1 : -1)
      );
    },
  },
};
</script>
