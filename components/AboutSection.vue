<template>
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

</template>