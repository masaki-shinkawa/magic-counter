<template>
  <v-container fluid class="pa-0">
    <v-layout align-center>
      <v-flex xs6 sm4 text-xs-center>
        <v-btn large color="error" @click="allClick">全てクリア</v-btn>
      </v-flex>
      <v-flex xs6 sm4 text-xs-center>
        <v-btn large color="private" @click="openUsage">使い方</v-btn>
      </v-flex>
    </v-layout>
    <counter-usage-dialog v-model="isOpen" />
  </v-container>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import CounterUsageDialog from "@/components/dialog/CounterUsageDialog";

@Component({ components: { CounterUsageDialog } })
export default class ButtonGroup extends Vue {
  isOpen = false;

  async allClick() {
    await this.$store.dispatch("allClearCounter", this.index);
  }

  openUsage() {
    this.isOpen = true;
  }
}
</script>
