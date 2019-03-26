<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <template v-for="(x, index) in 35">
        <counter :key="`${index}`" :index="index" />
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import Counter from "../components/Counter";
import config from "../config";

export default {
  name: "home",
  data: () => {
    return {
      field: {
        x: config.field.x,
        y: config.field.y
      }
    };
  },
  components: {
    Counter
  },
  methods: {
    getIndex(x, y) {
      return x + (y - 1) * config.field.y - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  display: flex;
  justify-content: center; /* 子要素をflexboxにより中央に配置する */
  align-items: center; /* 子要素をflexboxにより中央に配置する */
}
.md-layout {
  height: calc(100vw / 7 * 1.434);
}
</style>
