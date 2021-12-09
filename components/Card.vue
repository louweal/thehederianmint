<template>
  <div class="card">
    <div>
      <div class="card__header ratio-16x9">
        <div
          class="card__visual ratio-16x9"
          :style="{
            backgroundImage: `url(` + require(`~/images/${data.image}`) + `)`,
          }"
        >
          <div class="card__play">
            <div>
              <i class="icon-360" />
              <span class="hide--xs display--l">Hover</span>
              <span class="hide--l">Click</span> to view in 3D
            </div>
          </div>
        </div>

        <div class="card__video">
          <video
            playsinline
            muted
            loop
            autoplay
            :src="require(`~/videos/${data.video}`)"
          >
            <div class="video-error">Unable to play video on this device</div>
          </video>
        </div>

        <!-- <div class="card__id">
          ID: {{data.token_id}}
        </div> -->
      </div>

      <div class="card__body">
        <h3 class="fs-3xl">{{ data.token_id }}. {{ data.name }}</h3>
        <p>{{ data.intro }}</p>
      </div>
    </div>

    <div class="card__footer">
      <StockIndicator :current="gomint.supply.status.on_sale" :max="data.stock.max" />

      <div v-if="inStock">
        <span class="price">{{ data.price }} HBAR</span>
        <Button title="Buy" :url="`https://gomint.me/gallery/?network=mainnet&tokenId=${data.gomint_id}`" />
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
  transition: background-color 0.3s 0.1s ease-in;

  &:hover .card__header .card__visual {
    opacity: 0;
  }

  &:hover .card__header .card__video {
    opacity: 1;
  }

  &__header {
    position: relative;
    overflow: hidden;
  }

  &__play {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5px 7px;
    text-transform: uppercase;
    font-family: $base-font;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 600;
    opacity: 0.7;
  }

  &__id {
    position: absolute;
    font-family: $heading-font;
    top: 10px;
    left: 16px;
    font-size: 16px;
  }

  &__visual {
    position: absolute;
    background-size: cover;
    background-position: center;
    transition: opacity 0.6s ease-in;
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
    transition: opacity 0.6s ease-in;

    video {
      height: 120%;
    }
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

  data () {
    return {
      gomint: {
        "supply": {
          "status": {
            "on_sale": 0
          }
        }
      },
    }
  },

  computed: {
    inStock() {
      return this.gomint.supply.status.on_sale > 0;
    },
  },

  async mounted () {
    let response = await fetch(`https://gomint.me/saas/v1/token/supply.php?tokenId=${this.data.gomint_id}`)
    let gomint = await response.json()
    this.gomint = gomint
  },
};
</script>
