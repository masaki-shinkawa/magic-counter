<template>
  <div class="field">
    <template v-for="(y, yindex) in field.x">
      <div :key="yindex" class="md-layout">
        <template v-for="(x, xindex) in field.y">
          <counter :key="`${xindex}-${yindex}`" :index="getIndex(x, y)" />
        </template>
      </div>
    </template>
  </div>
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
