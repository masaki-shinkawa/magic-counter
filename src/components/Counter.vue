<template>
  <div class="md-layout-item">
    <img :class="counterClass" :src="cardImage" />
    <div v-show="isNone" class="counter">
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
import config from '../config';
import { cardImage } from '../constants/images';

export default {
  name: 'counter',
  props: {
    index: Number,
  },
  created() {
    this.$store.dispatch('initializeCounter', this.index);
  },
  data: () => {
    return {
      counter: 0,
      cardImage,
    };
  },
  computed: {
    counterClass() {
      const counterClass = { card__image: true };
      counterClass[config.field.type[this.index]] = true;

      return counterClass;
    },
    isNone() {
      return config.field.type[this.index] !== 'none';
    },
  },
  methods: {
    incrementCounter() {
      this.$store.dispatch('incrementCounter', this.index);
      this.counter = this.$store.getters.getCounter(this.index);
    },
    decrementCounter() {
      this.$store.dispatch('decrementCounter', this.index);
      this.counter = this.$store.getters.getCounter(this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-clear {
  border: solid 0;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  width: 100%;
}
.btn-real {
  display: inline-block;
  text-decoration: none;
  color: rgba(0, 152, 152, 0.43);
  width: 90%;
  height: 1.2rem;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  font-weight: bold;
  background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.5),
    0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: solid 2px #b5b5b5;
}
.btn-real i {
  line-height: 1rem;
}
.btn-real:active {
  /*押したとき*/
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: none;
}
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;

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
