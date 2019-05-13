<template>
  <div class="homepage">
    <form class="homepage__form" @submit="onSubmit">
      <div class="homepage__form__field">
        <VueFormField
          type="number"
          min="3"
          id="playerCount"
          title="Số luợng nguời chơi"
          v-model.number="playerCount"
        >
          <VueInput
            class="flat homepage__form__field__input"
            type="number"
            min="3"
            id="playerCount"
            v-model.number="playerCount"
          />
        </VueFormField>

        <VueFormField
          type="number"
          min="3"
          id="playTime"
          title="Thời gian chơi (giây)"
          v-model.number="playTime"
        >
          <VueInput
            class="flat homepage__form__field__input"
            type="number"
            :min="playerCount*60"
            id="playTime"
            v-model.number="playTime"
          />
        </VueFormField>
      </div>

      <VueButton type="submit" class="homepage__form__submit">Bắt đầu !</VueButton>
    </form>
  </div>
</template>

<script>
export default {
  name: "Homepage",

  data() {
    return {
      error: false,
      playerCount: 3,
      playTime: 180
    };
  },

  methods: {
    onSubmit() {
      if (this.playerCount < 3) {
        this.error = true;
      } else {
        this.error = false;
        this.$emit("startGame", {
          playerCount: this.playerCount,
          playTime: this.playTime * 1000
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "../style/color.scss";

.homepage {
  height: 100%;
  &__form {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__field {
      flex: auto 1 1;
    }
    &__submit {
      flex: 32px 0 0;
    }
  }
}
</style>
