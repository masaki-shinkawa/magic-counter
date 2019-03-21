<template>
  <div :class="counterClass">
    <button class="btn-real" @click="incrementCounter">
      <i class="fas fa-plus"></i>
    </button>
    <p class="counter__value">{{counter}}</p>
    <button class="btn-real" @click="decrementCounter">
      <i class="fas fa-minus"></i>
    </button>
  </div>
</template>

<script>
import config from "../config";

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
      counter: 0
    };
  },
  computed: {
    counterClass() {
      const counterClass = { counter: true };
      counterClass[config.field.type[this.index]] = true;
      console.warn(counterClass);

      return counterClass;
    }
  },
  methods: {
    incrementCounter() {
      this.$store.dispatch("incrementCounter", this.index);
      this.counter = this.$store.getters.getCounter(this.index);
    },
    decrementCounter() {
      this.$store.dispatch("decrementCounter", this.index);
      this.counter = this.$store.getters.getCounter(this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
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
.fa-plus,
.fa-minus {
  font-size: 1rem;
}
.counter {
  // border: solid 1px;
  border-radius: 5px;
  padding: 0.25rem;
  width: 90%;

  .counter__value {
    font-size: 1rem;
    padding: 0.25rem;
    background-color: white;
    margin: 0.5rem 0.25rem;
  }
}
.none {
  display: none;
}
.deck {
  background-color: brown;
} // デッキ
.magic {
  background-color: green;
} // 魔法罠
.extra {
  background-color: purple;
} // エクストラ
.graveyard {
  background-color: gray;
} // 墓地
.monster {
  background-color: brown;
} // モンスター
.field {
  background-color: lightseagreen;
} // フィールド魔法
.banish {
  background-color: whitesmoke;
} // 除外
.link {
  background-color: blue;
} // リンクエリア
</style>
