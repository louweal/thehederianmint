<template>
  <main class="main">
    <Section>
      <Container>
        <div class="grid collapse">
          <div class="col-xs-11 col-l-5">
            <h2 class="fs-2xl f-base fade-in-up delay-1250">
              The Hederian Mint
            </h2>
            <h1 class="fs-5xl" data-anim='splitting'>
              Exclusive NFTs for true Hederians
            </h1>
          </div>
        </div>

        <hr />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-12 col-l-4 offset-l-1">
            <h2 class="fs-4xl" data-anim="splitting">About</h2>

            <p data-anim="fade-in-up">
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
          <div class="col-xs-12 col-l-4">
            <h2 class="fs-4xl" data-aos="splitting">Release schedule</h2>

            <p data-aos="fade-in-up">
              Coming soon
            </p>

          </div>

        </div>
      </Container>
  <div id="contact"></div>
    </Section>
  </main>
</template>

<script>

export default {
  name: "About",

  transition: "home",

};
</script>

<style lang="scss" scoped>

</style>
