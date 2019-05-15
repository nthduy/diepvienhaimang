<template>
  <div class="app">
    <div class="app__title">
      <h1 class="app__title__text">Điệp Viên Hai Mang</h1>
      <span class="app__title__icon">👓</span>
    </div>

    <div class="app__content">
      <Homepage v-if="step === 1" @startGame="startGame"/>

      <RevealPlayer
        v-if="step === 2"
        :secret-agent="secretAgent"
        :player-count="playerCount"
        :destination="destination"
        @finish="finishReveal"
      />

      <div v-if="step === 3" class="countdown">
        <countdown ref="countdown" :time="playTime" @end="notFound" :transform="transform">
          <template slot-scope="props">
            <h4>Thời gian còn lại</h4>
            <p class="countdown__time">{{ props.minutes }} : {{ props.seconds }}</p>
          </template>
        </countdown>

        <VueButton class="countdown__abort" type="button" @click="found">Đã tìm ra 🔪</VueButton>
      </div>

      <div v-if="step === 4" class="endgame">
        <div class="endgame__lost" v-if="isLost">
          <p class="endgame__lost__icon">😭</p>
          <p class="endgame__lost__text">Điệp viên hai mang là nguời chơi thứ {{secretAgent +1}}</p>
        </div>

        <div class="endgame__win" v-if="!isLost">
          <p class="endgame__win__icon">😇</p>
          <p
            class="endgame__win__text"
          >Điệp viên hai mang đã bị chặn đứng, hắn là nguời chơi thứ {{secretAgent +1}}</p>
        </div>

        <VueButton @click="restart" class="endgame__button">Chơi lại</VueButton>
      </div>
    </div>
  </div>
</template>

<script>
import Homepage from "./components/Homepage";
import RevealPlayer from "./components/RevealPlayer";
import { Random } from "random-js";

const destinations = [
  "bãi giữ xe nghĩa trang Bình Hưng Hoà",
  "cổng chính bệnh viện 115",
  "Doanh trại quân đội",
  "Giữa ngã tư Bảy Hiền",
  "Đối diện nhà thờ Đức Bà Sài Gòn",
  "Chùa Một Cột",
  "Chợ Bà Chiều",
  "Địa đạo củ chi",
  "Phúc Long",
  "Starbucks",
  "Ngã năm chuồng chó",
  "Thảo cầm viên",
  "Trại tiêm chủng",
  "Phòng thử đồ",
  "Bệnh viện chợ rẫy",
  "Duới cột cờ",
  "Phòng khám thai",
  "Nhà vệ sinh công cộng",
  "Khoa sản bệnh viện Từ Dũ",
  "Sân thuợng Landmark 81",
  "Chân cầu chữ Y",
  "Kênh nhiêu lộc",
  "Đồi thông hai mộ Đà Lạt",
  "Hồ bơi Cộng Hoà",
  "Rừng ngập mặn",
  "Sa mạc Sahara",
  "Đảo Phú Quốc",
  "Phòng thử đồ H&M",
  "Cầu rồng Đà Nẵng"
];

export default {
  name: "app",

  components: {
    Homepage,
    RevealPlayer
  },

  data() {
    return {
      step: 1,
      playerCount: 3,
      error: false,
      errorMessage: "",
      currentPlayer: 0,
      secretAgent: -1,
      destination: "",
      end: false,
      isLost: false,
      playTime: 0
    };
  },

  methods: {
    restart() {
      this.step = 1;
      this.playerCount = 3;
      this.error = false;
      this.errorMessage = "";
      this.currentPlayer = 0;
      this.secretAgent = -1;
      this.destination = "";
      this.end = false;
      this.isLost = false;
      this.playTime = 0;
    },

    startGame({ playerCount, playTime }) {
      this.playerCount = playerCount;
      const random = new Random(); // uses the nativeMath engine
      // Who is the secret agent ?
      this.secretAgent = random.integer(0, playerCount - 1);
      this.destination = random.shuffle(destinations)[0];
      this.playTime = playTime;

      this.end = false;
      this.step++;
    },

    finishReveal() {
      this.step++;
    },

    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        // Adds leading zero
        const digits = value < 10 ? `0${value}` : value;
        props[key] = digits;
      });

      return props;
    },

    found() {
      this.step++;
      this.isLost = false;
      this.end = true;
    },

    notFound() {
      this.step++;
      this.isLost = true;
      this.end = true;
    }
  }
};
</script>

<style lang="scss">
@import "~@vue/ui/dist/vue-ui.css";
@import url("https://fonts.googleapis.com/css?family=Mali|Sedgwick+Ave");
@import "./style/color.scss";

body,
html {
  height: 100%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.app {
  font-family: "Mali", cursive;
  color: $white;
  background: $black;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  padding: 3rem;

  &__title {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    height: auto;

    &__text {
      font-family: "Sedgwick Ave", cursive;
      color: $primary;
      font-size: 2rem;
    }
    &__icon {
      font-size: 2rem;
    }
  }

  &__content {
    height: calc(100% - 132px);
  }

  .countdown {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    &__time {
      font-size: 5rem;
      font-weight: bold;
      color: $secondary;
    }
  }

  .endgame {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    &__win,
    &__lost {
      &__icon {
        font-size: 4rem;
      }
      &__text {
        font-size: 2rem;
      }
    }
  }
  .vue-ui-input > .content > .input-wrapper > .input {
    color: $white;
  }

  button.vue-ui-button {
    color: $black;
    background-color: $white;
  }
}
</style>
