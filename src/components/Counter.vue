<template>
  <div class="md-layout-item">
    <img :class="counterClass" :src="cardImage" />
    <div
      v-show="isNone"
      class="counter"
      @touchstart="clearCountStart"
      @touchend="clearCountEnd"
    >
      <button class="btn-clear" @click="incrementCounter">
        <i class="fas fa-caret-up"></i>
      </button>
      <p class="counter__value">{{ counter }}</p>
      <button class="btn-clear" @click="decrementCounter">
        <i class="fas fa-caret-down"></i>
      </button>
    </div>
  </div>
</template>

<script>
import config from "../config";
import { cardImage } from "../constants/images";
import { setTimeout, clearTimeout } from "timers";

export default {
  name: "counter",
  props: {
    index: Number
  },
  created() {
    this.$store.dispatch("initializeCounter", this.index);
  },
  data: () => {
    return {
      cardImage,
      clearThreadId: 0
    };
  },
  computed: {
    counterClass() {
      const counterClass = { card__image: true };
      counterClass[config.field.type[this.index]] = true;

      return counterClass;
    },
    isNone() {
      return config.field.type[this.index] !== "none";
    },
    counter() {
      return this.$store.getters.getCounter(this.index);
    }
  },
  methods: {
    incrementCounter() {
      this.$store.dispatch("incrementCounter", this.index);
    },
    decrementCounter() {
      this.$store.dispatch("decrementCounter", this.index);
    },
    clearCountStart() {
      this.clearThreadId = setTimeout(() => {
        this.$store.dispatch("clearCounter", this.index);
      }, 1000);
    },
    clearCountEnd() {
      clearTimeout(this.clearThreadId);
    }
  }
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 0.2rem;

  .counter__value {
    font-size: 1rem;
    padding: 0.25rem;
    background-color: white;
    margin: 0;
    width: 100%;
  }
}
.card__image {
  width: calc(100vw / 7);
  height: auto;
  position: absolute;
  padding: 2px;
}

.none {
  display: none;
}
.deck {
  // デッキ
  filter: hue-rotate(340deg);
}
.magic {
  // 魔法罠
  filter: hue-rotate(90deg);
}
.extra {
  // エクストラ
  filter: hue-rotate(240deg);
}
.graveyard {
  // 墓地
  filter: grayscale(100%);
}
.monster {
  // モンスター
  filter: hue-rotate(0deg);
}
.field {
  // フィールド魔法
  filter: hue-rotate(140deg) brightness(1.5);
}
.banish {
  // 除外
  filter: grayscale(100%) brightness(2);
}
.link {
  // リンクエリア
  filter: hue-rotate(180deg) brightness(1.8);
}
</style>
