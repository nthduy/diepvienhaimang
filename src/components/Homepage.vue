<template>
  <div class="homepage">
    <form class="homepage__form" @submit.prevent="onSubmit">
      <div v-if="!showRule" class="homepage__form__field">
        <VueFormField
          type="number"
          min="3"
          id="playerCount"
          title="Số luợng nguời chơi"
          v-model.number="internalPlayerCount"
        >
          <VueInput
            class="flat homepage__form__field__input"
            type="number"
            min="3"
            id="playerCount"
            v-model.number="internalPlayerCount"
          />
        </VueFormField>

        <VueFormField
          type="number"
          min="3"
          id="playTime"
          title="Thời gian chơi (giây)"
          v-model.number="internalPlayTime"
        >
          <VueInput
            class="flat homepage__form__field__input"
            type="number"
            :min="playerCount*60"
            id="playTime"
            :step="30"
            v-model.number="internalPlayTime"
          />
        </VueFormField>
      </div>

      <div v-if="showRule" class="homepage__form__rule">
        <p>Trong số các bạn có một kẻ nằm vùng ! Gần đây thông tin tình báo của các bạn đã bị lộ ra, một nguời trong các bạn là điệp viên hai mang. Hắn đã tiết lộ tất cả bí mật trong cuộc họp ra ngoài khiến cho tổ chức tổn thất nghiêm trong.</p>
        <p>May mắn thay, hắn không biết đuợc địa điểm họp tiếp theo của chúng ta, nhiệm vụ của các bạn là tìm ra hắn nhanh nhất có thể !</p>
        <p>Trong trò chơi này, ở vòng đầu tiên mọi nguời sẽ chuyền tay nhau điện thoại / tablet để đuợc thông báo về địa điểm họp tiếp theo, trong đó có 1 nguời ngẫu nhiên sẽ đuợc chọn là điệp viên hai mang</p>
        <p>Sau khi tất cả mọi nguời đã sẵn sàng, đồng hồ sẽ bắt đầu đếm nguợc. Mỗi nguời có một luợt chơi, trong đó bạn có quyền hỏi bất kì 1 ai 1 câu hỏi đúng sai để xác định xem nguời đó có biết điạ điểm họp hay không, ví dụ: Địa điểm đó là một nơi ở Sài Gòn ?</p>
        <p>Trò chơi có thể đuợc dừng bất kì lúc nào nếu bạn đã tìm ra ai là điệp viên hai mang. Kết thúc thời gian đếm nguợc, điệp viên hai mang sẽ thắng nếu không ai đoán đuợc danh tính của hắn</p>
      </div>

      <div class="homepage__form__cta">
        <VueButton :disabled="showRule" type="submit" class="homepage__form__cta__submit">Bắt đầu !</VueButton>
        <VueButton
          type="button"
          @click="toggleRule"
          value="orange"
          class="homepage__form__cta__help"
        >{{ruleLabel}}</VueButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Homepage",

  props: {
    playerCount: {
      type: Number,
      required: true
    },

    playTime: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      error: false,
      showRule: false,
      internalPlayerCount: this.playerCount,
      internalPlayTime: this.playTime
    };
  },

  computed: {
    ruleLabel() {
      return this.showRule ? "Ẩn luật chơi" : "Hiện luật chơi";
    }
  },

  methods: {
    onSubmit() {
      if (this.playerCount < 3) {
        this.error = true;
      } else {
        this.error = false;
        this.$emit("startGame", {
          playerCount: this.internalPlayerCount,
          playTime: this.internalPlayTime
        });
      }
    },

    toggleRule() {
      this.showRule = !this.showRule;
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
      flex: 0 1 calc(100% - 32px);
      overflow-y: scroll;
    }

    &__rule {
      flex: 0 1 calc(100% - 32px);
      overflow-y: scroll;
    }

    &__cta {
      flex: 32px 0 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__submit {
        flex: 48% 0 1;
      }

      &__help {
        flex: 48% 0 1;
      }
    }
  }
}
</style>
