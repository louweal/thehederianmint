<template>
  <main class="main">
    <Section>
      <Container>
        <div class="grid collapse">
          <div class="col-xs-11 col-l-6">
            <!-- <h2 class="fs-2xl f-base fade-in-up xxxdelay-1250">
              The Hederian Mint
            </h2> -->
            <h1 class="fs-5xl" data-anim="splitting">
              Collectable NFT coins for hederians and hbarbarians
            </h1>
          </div>
        </div>

        <hr class="fade-in-up delay-500" />
      </Container>
      <div id="contact"></div>
    </Section>

    <AboutSection />

    <!-- <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-12 col-l-4">
            <h2 class="fs-4xl" data-aos="splitting">Release schedule</h2>

            <p data-aos="fade-in-up">
              The Alpha Set: Dec 7th 2021<br/>
              The Beta Set: Jan 7th 2022
            </p>

          </div>

        </div>
      </Container>

    </Section> -->
  </main>
</template>

<script>
export default {
  name: "About",

  transition: "home",
};
</script>
