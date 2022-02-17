<template>
  <main>
    <Section>
      <Container>
        <div class="grid">
          <div class="offset-l-1"></div>
          <div class="col-xs-12 col-l-5">
            <h2 class="fade-in-up start-animation">
              Oh no. This page does not exist.
            </h2>
            <br />
            <p class="fade-in-up delay-500 start-animation">
              Sorry the page you are looking for is not available right now.
              Please come back later or fill in the contact form if you have
              questions.
            </p>
            <Button
              title="Back to homepage"
              url="/"
              modifier="secondary"
              class="fade-in-up delay-1000 start-animation"
            />
          </div>
          <div class="offset-l-1"></div>
          <div class="col-xs-12 col-l-3">
            <div class="box fade-in-up delay-1250 start-animation">
              <h3>Looking for NFTs?</h3>
              <p>You can find them here!</p>
              <Button title="NFTs" url="/nft" />
            </div>
          </div>
        </div>
      </Container>
    </Section>

    <!-- <Section /> -->
    <Section />
  </main>
</template>
