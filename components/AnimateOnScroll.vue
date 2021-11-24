<template>
  <div class="animate-on-scroll">
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
let Splitting = null;

if (process.client) {
  Splitting = require("splitting");
}

export default {
  name: "AnimateOnScroll",

  data: function () {
    return {
      splittingTargets: [],
      appearingTargets: [],
    };
  },

  methods: {
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
      console.log(this.appearingTargets);
      [].forEach.call(this.appearingTargets, (target) => {
        var rect = target.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // "top 75%"
        var isVisible = elemTop < window.innerHeight * 0.75; // && elemBottom >= 0;

        if (isVisible) {
          // split target if it was not splitted before
          if (!target.classList.contains("fade-in-up")) {
            // target.style.opacity = "1";
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
    this.splittingTargets = document.querySelectorAll("[data-aos='splitting']");
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
    // this.initSplitting(this.$refs["split-chars"]);

    // also run the function once directly
    this.updateScroll();
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
