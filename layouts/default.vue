<template>
  <div id="top">
    <div class="bg">
      <Star v-for="i in 20" :key="i" />
    </div>
    <Header :fixed="true" />

    <Pushmenu />
    <transition
      v-on:before-enter="beforeEnter"
      v-on:after-enter="afterEnter"
      xxxv-on:leave="leave"
    >
      <Nuxt />
    </transition>

    <Footer />
  </div>
</template>

<script>
let Splitting = null;

if (process.client) {
  Splitting = require("splitting");
}

export default {
  name: "Default",

  methods: {
    beforeEnter: function (el) {
      if (this.$route.hash[0] !== "#") {
        window.scrollTo(0, 0);
      }
    },

    afterEnter: function (el, done) {},

    sos() {
      let animTargets = document.querySelectorAll("[data-sos]");
      [].forEach.call(animTargets, (target) => {
        let startAt = parseInt(target.dataset.sos);
        var rect = target.getBoundingClientRect();
        var elemTop = rect.top;

        let startTrigger =
          elemTop < window.innerHeight * (startAt / 100) && elemTop > 0;

        if (startTrigger) {
          if (!target.classList.contains("splitting")) {
            target.style.opacity = "1";
            this.initSplitting(target);
          }
        }
      });
    },

    aos() {
      // console.log("aos");
      let animTargets = document.querySelectorAll("[data-aos]");
      [].forEach.call(animTargets, (target) => {
        let startAt = parseInt(target.dataset.aos);
        let rect = target.getBoundingClientRect();
        let elemTop = rect.top;

        target.style.opacity = "0"; // hide element by default

        let startTrigger =
          elemTop < window.innerHeight * (startAt / 100) && elemTop > 0;

        if (startTrigger) {
          if (!target.classList.contains("start-animation")) {
            target.classList.add("start-animation");
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
    this.aos();
    window.addEventListener("scroll", this.aos);

    this.sos();
    window.addEventListener("scroll", this.sos);

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
    window.removeEventListener("scroll", this.sos);
  },
};
</script>
