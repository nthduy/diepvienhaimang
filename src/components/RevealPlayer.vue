<template>
  <div class="reveal-player">
    <p class="reveal-player__tips">Hãy nhớ kĩ danh tính của bạn và đừng để nguời khác biết nhé</p>
    <div v-if="ready" class="reveal-player__readied">
      <div v-if="!isSecretAgent" class="reveal-player__readied__destination">
        <h4
          class="reveal-player__readied__destination__label"
        >Nguời chơi thứ {{ currentPlayer+1 }}, địa điểm bí mật là:</h4>
        <h2 class="reveal-player__readied__destination__name">🗺 {{ destination }}</h2>
      </div>
      <div v-if="isSecretAgent" class="reveal-player__readied__secret-agent">
        <h2>Nguời chơi thứ {{ currentPlayer+1 }}, bạn là điệp viên 2 mang 😈</h2>
      </div>

      <VueButton class="reveal-player__readied__next" @click="next">OK, xong 👌</VueButton>
    </div>

    <div v-if="!ready" class="reveal-player__not-readied">
      <p class="reveal-player__not-readied__text">Sẵn sàng ?</p>
      <VueButton class="reveal-player__not-readied__ready" @click="readied">GO 🔥</VueButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "RevalPlayer",

  props: {
    secretAgent: {
      type: Number,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    playerCount: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      currentPlayer: 0,
      ready: false
    };
  },

  computed: {
    isSecretAgent() {
      return this.currentPlayer === this.secretAgent;
    }
  },

  methods: {
    next() {
      this.ready = false;
      this.currentPlayer++;

      if (this.currentPlayer === this.playerCount) {
        this.$emit("finish", true);
      }
    },

    readied() {
      this.ready = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/color.scss";

.reveal-player {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__tips {
    text-align: justify;
    color: $secondary;
    font-style: italic;
    margin-bottom: 1rem;
    flex: 32px 0 0;
  }

  &__not-readied {
    flex: calc(100% - 32px) 1 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__text {
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
    }
  }

  &__readied {
    flex: calc(100% - 32px) 1 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__destination {
      text-align: center;

      &__label {
        color: $accent;
      }

      &__name {
        display: block;
      }
    }

    &__secret-agent {
      h2 {
        color: $accent;
      }
    }
  }
}
</style>
