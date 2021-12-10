<template>
      <Section>
      <Container>
        <div class="grid align-xs-middle">
          <div class="col-xs-12 col-l-4 offset-l-1">
            <h2 class="fs-4xl" data-anim="splitting">About</h2>

            <p data-anim="fade-in-up">
              <!-- The Hederian Mint was founded on 9 November 2021 in Leiden by
              Anneloes Louwe, a UX-designer and front-end developer by day and
              creative Hedera enthousiast by night. -->
              The Hederian Mint is the first place on the Hedera network where 
              you can buy collectable HBAR coins. Each 3-dimensional coin is decorated with an 
              unique design. A small set of exclusive coins is released only once each month. 
              You can also suggest your own ideas.
            </p>
            <p>Behind the scenes The Hederian Mint is also working on physical products. Stay tuned for more information!</p>

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