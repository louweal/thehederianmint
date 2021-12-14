<template>
  <main>
    <Section>
      <Container>
        <div class="grid">
          <div class="col-xs-12 col-l-7">
            <h2 data-anim="fade-in-up">Oh no. This page does not exist.</h2>
            <br />
            <p class="fade-in-up delay-500">
              Sorry the page you are looking for is not available right now.
              Please come back later or fill in the contact form if you have
              questions.
            </p>
            <Button
              title="Back to homepage"
              url="/"
              modifier="secondary"
              class="fade-in-up delay-1000"
            />
          </div>

          <div class="col-xs-12 col-l-3 offset-l-2">
            <div class="box fade-in-up delay-1250">
              <h3>Looking for NFTs?</h3>
              <p>You can find them here!</p>
              <Button title="NFTs" url="/nft" />
            </div>
          </div>
        </div>
      </Container>
    </Section>

    <Section />
    <Section />
  </main>
</template>

<script>
let Splitting = null;

if (process.client) {
  Splitting = require("splitting");
}

export default {
  name: "Default",

  data: function () {
    return {
      animSplitting: [],
      aosSplitting: [],
      animFadeInUp: [],
      aosFadeInUp: [],
    };
  },

  methods: {
    beforeEnter: function (el) {
      if (this.$route.hash[0] !== "#") {
        window.scrollTo(0, 0);
      }
    },
    initAnimations() {
      let allTargets = document.querySelectorAll(
        "[data-aos='splitting'], [data-aos='fade-in-up'], [data-anim='splitting'], [data-anim='fade-in-up']"
      );
      [].forEach.call(allTargets, (target) => {
        // hide all targets
        target.style.opacity = "0";
      });

      this.aosSplitting = document.querySelectorAll("[data-aos='splitting']");

      this.aosFadeInUp = document.querySelectorAll("[data-aos='fade-in-up']");

      this.animSplitting = document.querySelectorAll("[data-anim='splitting']");
      this.animFadeInUp = document.querySelectorAll("[data-anim='fade-in-up']");

      window.addEventListener("scroll", this.aosSplittingFun);
      window.addEventListener("scroll", this.aosFadeInUpFun);

      this.aosSplittingFun();
      this.aosFadeInUpFun();
      this.animSplittingFun();
      this.animFadeInUpFun();
    },

    afterEnter: function (el, done) {
      // console.log("enter");
      this.initAnimations();
    },
    leave: function (el, done) {
      // console.log("leave");
      // done();
    },
    animSplittingFun() {
      [].forEach.call(this.animSplitting, (target) => {
        if (!target.classList.contains("splitting")) {
          target.style.opacity = "1";
          this.initSplitting(target);
        }
      });
    },
    animFadeInUpFun() {
      [].forEach.call(this.animFadeInUp, (target) => {
        if (!target.classList.contains("fade-in-up")) {
          target.classList.add("fade-in-up");
        }
      });
    },
    aosSplittingFun() {
      [].forEach.call(this.aosSplitting, (target) => {
        var rect = target.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

        if (isVisible) {
          // split target if it was not splitted before
          if (!target.classList.contains("splitting")) {
            target.style.opacity = "1";
            this.initSplitting(target);
          }
        }
      });
    },

    aosFadeInUpFun() {
      [].forEach.call(this.aosFadeInUp, (target) => {
        var rect = target.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // "top 70%"

        var isVisible = elemTop < window.innerHeight * 0.9; // && elemBottom >= 0;

        if (isVisible) {
          if (!target.classList.contains("fade-in-up")) {
            target.classList.add("fade-in-up");
          }
        }
      });
    },
    initSplitting: function (target) {
      Splitting({
        target: target,
        by: "chars",
        key: null,
      });
    },
  },

  mounted() {
    this.initAnimations();
    let gaScript = document.createElement("script");
    gaScript.setAttribute(
      "src",
      "https://www.googletagmanager.com/gtag/js?id=G-HNSQMHP9VF"
    );
    document.head.appendChild(gaScript);
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-HNSQMHP9VF");
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.aosSplittingFun);
    window.removeEventListener("scroll", this.aosFadeInUpFun);

    [].forEach.call(this.aosFadeInUp, (target) => {
      if (target.classList.contains("fade-in-up")) {
        target.classList.remove("fade-in-up");
      }
    });
  },
};
</script>
