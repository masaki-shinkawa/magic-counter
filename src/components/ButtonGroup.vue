<template>
  <div class="md-layout">
    <button class="md-layout-item" @click="allClick">全てクリア</button>
  </div>
</template>

<script>
export default {
  name: "buttonGroup",
  methods: {
    async allClick() {
      await this.$store.dispatch("allClearCounter", this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin: 0.5rem;
  background-color: lightgray;
}
</style>
