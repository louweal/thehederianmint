<template>
  <div class="card">
    <div>

    <div
      class="card__visual ratio-16x9"
      :style="{
        backgroundImage: `url(` + require(`~/images/${data.image}`) + `)`,
      }"
    />

    <div class="card__body">
      <h3 class="fs-3xl">{{ data.name }}</h3>
      <p>{{ data.intro }}</p>

    </div>
  </div>
  
      <div class="card__footer">
        <StockIndicator :current="data.stock.current" :max="data.stock.max" />

        <div>
          <span class="price">{{ data.price }} HBAR</span>
          <Button title="Buy" url="#" />
        </div>
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

  &__visual {
    background-size: cover;
    background-position: center;
  }

  &__body {
    padding: 25px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    span.price {
      margin-right: 15px;
    }
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
};
</script>
