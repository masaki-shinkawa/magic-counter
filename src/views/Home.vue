<template>
  <section>
    <toolbar-wrapper />
  </section>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ToolbarWrapper from "../components/toolbar/ToolbarWrapper";

@Component({
  components: {
    ToolbarWrapper
  }
})
export default class Home extends Vue {
  created() {
    this.$router.push("magic-counter");
  }
}
</script>
