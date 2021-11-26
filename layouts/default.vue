<template>
  <div id="top">
    <div class="bg"></div>
    <Header :fixed="true" />

    <Pushmenu />
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
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

  data: function () {
    return {
      splittingTargets: [],
      appearingTargets: [],
    };
  },

  methods: {
    beforeEnter: function (el) {
      console.log("before enter");

      console.log(this.$route);
      if(this.$route.hash[0] !== '#'){
        window.scrollTo(0, 0);
      }
       
    },
    initAnimations() {
      this.splittingTargets = document.querySelectorAll(
        "[data-aos='splitting']"
      );
      [].forEach.call(this.splittingTargets, (target) => {
        // hide all targets
        target.style.opacity = "0";
      });

      this.appearingTargets = document.querySelectorAll(
        "[data-aos='fade-in-up']"
      );
      [].forEach.call(this.appearingTargets, (target) => {
        // hide all targets
        target.style.opacity = "0";
      });

      window.addEventListener("scroll", this.updateScroll);
      // also run the function once directly
      this.updateScroll();
    },

    enter: function (el, done) {
      console.log("enter");
      this.initAnimations();
    },
    leave: function (el, done) {
      console.log("leave");
      // done();
     
    },
    updateScroll() {
      [].forEach.call(this.splittingTargets, (target) => {
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

      //fade in up animation
      // console.log(this.appearingTargets);
      [].forEach.call(this.appearingTargets, (target) => {
        var rect = target.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // "top 90%"
        var isVisible = elemTop < window.innerHeight * 0.9; // && elemBottom >= 0;

        if (isVisible) {
          // start animation
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
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);

    [].forEach.call(this.appearingTargets, (target) => {
      if (target.classList.contains("fade-in-up")) {
        target.classList.remove("fade-in-up");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
// .bg {
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   z-index: -1;
//   background: linear-gradient(
//     180deg,
//     rgba(0, 0, 0, 1) 30%,
//     rgba(#403345, 1) 100%
//   );
// }
</style>
