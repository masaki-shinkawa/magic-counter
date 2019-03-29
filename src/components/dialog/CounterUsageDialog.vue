<template>
  <div class="text-xs-center">
    <v-dialog v-model="localValue" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          使い方
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md fluid>
            <v-layout row wrap>
              <v-flex sm12 text-xs-center>
                <v-btn flat icon color="primary">
                  <v-icon>add_circle</v-icon>
                </v-btn>
                数値を1増やします
              </v-flex>
              <v-flex sm12 text-xs-center>
                <v-btn flat icon color="error">
                  <v-icon>remove_circle</v-icon>
                </v-btn>
                数値を1減らします
              </v-flex>
              <v-flex sm12 text-xs-center>
                <v-btn small color="error">全てクリア</v-btn>数値を全て0にします
              </v-flex>
              <v-flex sm12 text-xs-center>
                <v-chip>0</v-chip>
                長押しすることで0にします
              </v-flex>
            </v-layout>
          </v-container>
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
