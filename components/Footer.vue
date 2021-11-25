<template>
  <footer class="footer">
    <Container>
      <div class="grid">
        <div class="col-xs-12 col-l-3">
          <h4 class="fs-3xl">Contact</h4>

          <p>
            Submit your questions and suggestions using the contact form, or
            reach out through Twitter, Instagram or Discord.
          </p>

          <!-- <p>
            Nulla sit condimentum morbi pulvinar leo velit ultrices. Vitae ipsum
            posuere netus nibh vitae. Ut risus quis non.
          </p> -->
        </div>
        <div class="col-xs-12 col-l-3">
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                <input type="email" name="email" placeholder="E-mail"
              /></label>
            </p>
            <p>
              <label>
                <textarea name="message" placeholder="Message"></textarea>
              </label>
            </p>
            <p>
              <button class="button button--secondary" type="submit">
                Send
              </button>
            </p>
          </form>
        </div>

        <div class="col-xs-6 col-l-2 offset-l-1">
          <h4 class="fs-3xl">Shop</h4>

          <icon-link title="GoMint" icon="gomint" url="https://www.gomint.me" />
          <icon-link title="Etsy" icon="etsy" url="https://www.etsy.com" />
        </div>
        <div class="col-xs-6 col-l-2 offset-l-1">
          <h4 class="fs-3xl">Follow</h4>
          <icon-link
            title="Instagram"
            icon="instagram"
            url="https://www.instagram.com/thehederianmint"
          />
          <icon-link
            title="Twitter"
            icon="twitter"
            url="https://www.twitter.com/thehederianmint"
          />
          <icon-link title="Etsy" icon="etsy" url="https://www.etsy.com" />
          <icon-link
            title="Dribbble"
            icon="dribbble"
            url="https://dribbble.com/TheHederianMint/"
          />
          <icon-link
            title="Discord"
            icon="discord"
            url="https://www.discord.com"
          />
        </div>
        <div class="col-xs-12">
          <p>© {{ new Date().getFullYear() }} The Hederian Mint</p>
        </div>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 4rem;
  font-size: 16px;

  p {
    font-size: 16px;
  }
}

input,
textarea {
  outline: none;
  font-size: 16px;
  // font-family: $base-font;
  box-shadow: none;
}

input[type="email"] {
  width: 100%;
  height: 38px;
  background-color: transparent;
  border-color: rgba(#fff, 0.66);
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  color: #fff;
  transition: border-color 0.3s ease-in;

  &:hover,
  &:active {
    border-color: #fff;
  }
}

textarea {
  width: 100%;
  height: 3 * 38px;
  background-color: transparent;

  border-color: rgba(#fff, 0.66);
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  color: #fff;
  font-family: $base-font;
  transition: border-color 0.3s ease-in;

  &:hover,
  &:active {
    border-color: #fff;
  }
}

button.button {
  opacity: 0.75;
  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 1;
  }
}
</style>

<script>
import IconLink from "./IconLink";
// import IconLink from "./IconLink.vue";

export default {
  components: { IconLink },
};
</script>
