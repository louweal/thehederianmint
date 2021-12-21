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
        </div>
        <div class="col-xs-12 col-l-3">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

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
        <div class="offset-l-1"></div>
        <div class="col-xs-6 col-l-2">
          <h4 class="fs-3xl">Shop</h4>

          <icon-link
            title="GoMint"
            icon="gomint"
            url="https://gomint.me/gallery/?creator=H190555"
          />
          <icon-link title="Etsy" icon="etsy" url="https://www.etsy.com" />
        </div>
        <div class="offset-l-1"></div>
        <div class="col-xs-6 col-l-2">
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
            url="https://discord.gg/6tqhdNRT6E"
          />
        </div>
        <div class="col-xs-12">
          <p class="footer__copyright">
            © {{ new Date().getFullYear() }} The Hederian Mint
          </p>
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

  &__copyright {
    font-size: 0.85rem;
    opacity: 0.5;
  }

  .fs-3xl {
    margin-bottom: 2rem;
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
  padding: 11px 22px 13px 22px !important;
  font-weight: 500;

  @include from(l) {
    padding: 11px 25px 13px 25px !important;
  }

  &:hover {
    opacity: 1;
  }
}
</style>
