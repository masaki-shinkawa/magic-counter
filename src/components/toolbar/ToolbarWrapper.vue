<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>遊戯王Tools - {{ getSubTitle }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { pages } from "@/constants/pages";

@Component
export default class ToolbarWrapper extends Vue {
  subTitle = "Top";
  get getSubTitle() {
    return pages[this.$route.name].subTitle;
  }
}
</script>
