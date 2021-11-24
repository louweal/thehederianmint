<template>
  <main class="main">
    <Hero />

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-7">
            <h2 class="fs-4xl" data-aos="splitting">Most popular</h2>
          </div>
          <div class="col-xs-5 align-xs-end">
            <Button title="All" url="/coins" modifier="secondary" />
          </div>
        </div>

        <div class="grid">
          <div
            v-for="(item, index) in popularTokens"
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

    <Section id="about">
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-12 col-l-4 offset-l-1">
            <h2 class="fs-4xl" data-aos="splitting">About</h2>
            <!-- <p>
              The Hederian Mint is the first to mint exclusive sets of HBAR
              coins on the Hedera Network containing
              <span class="underline">high-quality</span>
              <span class="underline">three-dimensional</span> coins.
            </p> -->

            <p data-aos="fade-in-up">
              The Hederian Mint was founded on 9 November 2021 in Leiden by
              Anneloes Louwe, a UX-designer and front-end developer by day and
              creative Hedera enthousiast by night.
            </p>
            <!-- <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint ex velit quam provident repellat, 
                sunt deserunt assumenda aperiam voluptas consectetur. Voluptas suscipit nesciunt deleniti neque ex nam in dolore.
              </p> -->

            <!-- <Button url="/about" title="More" modifier="secondary" />  -->
          </div>
          <div class="col-xs-12 offset-l-2 col-l-5">
            <div
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
            <h2 class="fs-4xl" data-aos="splitting">New</h2>
          </div>
          <div class="col-xs-5 align-xs-end">
            <Button title="All" url="/coins" modifier="secondary" />
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
  </main>
</template>

<script>
import tokens from "./../data/tokens.json";
import "../assets/css/components/_img.scss";
import AnimateOnScroll from "../components/AnimateOnScroll.vue";

export default {
  components: { AnimateOnScroll },
  name: "Main",

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
