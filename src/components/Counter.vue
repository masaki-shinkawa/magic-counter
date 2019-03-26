<template>
  <div class="card">
    <v-img
      v-show="isNone"
      :class="counterClass"
      :src="getImage"
      :aspect-ratio="1 / 1.424"
      @touchstart="clearCountStart"
      @touchend="clearCountEnd"
    >
      <div class="btn-group">
        <v-btn
          flat
          icon
          color="primary"
          class="counter__controler"
          @click="incrementCounter"
        >
          <v-icon>add_circle</v-icon>
        </v-btn>
        <div class="text-xs-center">
          <v-chip class="counter__v-chip">{{ counter }}</v-chip>
        </div>
        <v-btn
          flat
          icon
          color="error"
          class="counter__controler"
          @click="decrementCounter"
        >
          <v-icon>remove_circle</v-icon>
        </v-btn>
      </div>
    </v-img>
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
    },
    getImage() {
      return cardImage[config.field.type[this.index]];
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
.card {
  width: calc(100% / 7);
}
.v-btn {
  margin: 0;
}
.counter__value {
  background-color: white;
  position: absolute;
}
.card__image {
  width: 100%;
  height: auto;
  position: relative;
}
.counter__v-chip {
  margin: 0;
}
.counter__controler {
  flex: 1;
}
.btn-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.none {
  display: none;
}
</style>
