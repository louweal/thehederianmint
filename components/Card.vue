<template>
  <div class="card">
    <div class="card__visual">img</div>

    <div class="card__body">


    <h3 class="fs-3xl">{{data.name}}</h3>
    <p>{{data.intro}}</p>

    <div class="card__footer">
      <StockIndicator :current="data.stock.current" :max="data.stock.max" />


      <div><span class="price">{{data.price}} HBAR</span> <Button title="Buy" url="#" /></div>
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
  

  &__visual {

  }

  &__body {
    padding: 25px;
    color: #fff;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
