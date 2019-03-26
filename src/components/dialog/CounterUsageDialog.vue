<template>
  <div class="text-xs-center">
    <v-dialog v-model="localValue" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          使い方
        </v-card-title>

        <v-card-text>
          TODO: 使い方を書く
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="close">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Vue, Component, Emit } from "vue-property-decorator";
@Component({
  props: {
    value: {
      type: Boolean
    }
  }
})
export default class CounterUsageDialog extends Vue {
  @Emit()
  input() {}

  get localValue() {
    return this.value;
  }

  set localValue(value) {
    this.input(value);
  }

  close() {
    this.input(false);
  }
}
</script>
