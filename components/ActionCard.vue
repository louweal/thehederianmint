<template>
  <div class="action-card">
    <div class="action-card__body">
      <h3 class="fs-4xl">Suggestions?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
        necessitatibus quis distinctio!
      </p>
    </div>

    <div class="card__footer">
      <div class="grid no-bottom-margin-cols">
        <div class="col-xs-6">
          <icon-link
            title="Twitter"
            icon="twitter"
            url="https://www.twitter.com/thehederianmint"
          />
          <icon-link
            title="Twitter"
            icon="twitter"
            url="https://www.twitter.com/thehederianmint"
          />
        </div>
        <div class="col-xs-6">
          <icon-link
            title="Twitter"
            icon="twitter"
            url="https://www.twitter.com/thehederianmint"
          />
          <icon-link
            title="Twitter"
            icon="twitter"
            url="https://www.twitter.com/thehederianmint"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.action-card {
  border: 1px solid rgba(#fff, 0.5);
  width: 100%;
  height: 100%;
  padding: 20px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // transition: background-color 0.3s 0.1s ease-in;

  @include from(l) {
    padding: 70px 50px 50px 50px;
  }

  &__body {
  }

  &__footer {
  }
}
</style>

<script>
export default {
  name: "Card",

  props: {
    data: {
      type: Object,
      default: {},
      // required: true,
    },
  },
};
</script>
