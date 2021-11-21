<template>
  <div class="card">
    <div class="card__visual">img</div>
    <h3 class="fs-3xl">Ttiel</h3>
    <p>test</p>

    <div class="card__footer">
      <div class="stock"></div>

      <div class="buy">1024 HBAR <Button title="Buy" url="#" /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgba(#403345, 0.2);
  width: 100%;
  height: 100%;
  padding: 9px 25px;
  color: #000;
  display: inline-block;
  transition: all 0.3s ease-in;

  &:hover {
    filter: brightness(1.2);
  }

  &--secondary {
    background-color: transparent;
    box-shadow: inset 0 0 0 1px #fff;
    color: #fff;
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
