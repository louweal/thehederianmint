<template>
  <Section>
    <Container>
      <div class="grid align-xs-middle">
        <div class="offset-xs-0 offset-l-1"></div>
        <div class="col-xs-12 col-l-4">
          <h2 class="fs-4xl" data-anim="splitting">About</h2>

          <p data-anim="fade-in-up">
            The Hederian Mint is the first place on the Hedera network where you
            can buy collectable 3-dimensional HBAR coins.
          </p>
          <p data-anim="fade-in-up">
            Behind the scenes The Hederian Mint is also working on physical
            HBAR-related products. Stay tuned for more information. :)
          </p>
        </div>
        <div class="offset-xs-0 offset-l-1"></div>
        <div class="col-xs-12 col-l-5">
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
</template>
