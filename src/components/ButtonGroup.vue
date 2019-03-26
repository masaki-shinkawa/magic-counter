<template>
  <v-layout align-center>
    <v-flex xs12 sm12 text-xs-center>
      <v-btn small color="error" @click="allClick">全てクリア</v-btn>
    </v-flex>
  </v-layout>
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
