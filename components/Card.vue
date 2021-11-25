<template>
  <div class="card">
    <div>
      <div class="card__header ratio-16x9">
        <div
          class="card__visual ratio-16x9"
          :style="{
            backgroundImage: `url(` + require(`~/images/${data.image}`) + `)`,
          }"
        />

                <div
          class="card__video">
video
          </div>
      </div>

      <div class="card__body">
        <h3 class="fs-3xl">{{ data.name }}</h3>
        <p>{{ data.intro }}</p>
      </div>
    </div>

    <div class="card__footer">
      <StockIndicator :current="data.stock.current" :max="data.stock.max" />

      <div v-if="inStock">
        <span class="price">{{ data.price }} HBAR</span>
        <Button title="Buy" url="#" />
      </div>
      <div v-else>SOLD OUT</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgba(#403345, 0.2);
  width: 100%;
  height: 100%;
  padding: 0;
  display: inline-block;
  transition: all 0.3s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // opacity: 0;
  // transform: translateY(40px);
  transition: background-color 0.3s 0.1s ease-in;

  &:hover .card__header div:nth-of-type(1):not(:last-child) {
    opacity: 0;
    // transform: scale(105%);
  }

  &:hover .card__header div:nth-of-type(2) {
    opacity: 1;
  }

  &__header {
    position: relative;
  }

  &__visual {
        position: absolute;
    background-size: cover;
    background-position: center;
    transition: opacity 0.3s ease-in;
  }

  &__video {
    position: absolute;
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease-in;
  }

  &__body {
    padding: 25px;
    padding-bottom: 20px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    padding-top: 0;

    .button-container {
      margin-left: 15px;
    }
  }

  &:hover {
    background-color: rgba(#403345, 0.4); //rgba(#000, 0.2);
    cursor: pointer;
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
      required: true,
    },
  },

  computed: {
    inStock() {
      return this.data.stock.current > 0;
    },
  },
};
</script>
