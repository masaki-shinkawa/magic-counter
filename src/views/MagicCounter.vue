<template>
  <section>
    <toolbar-wrapper />
    <field></field>
    <button-group></button-group>
  </section>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ToolbarWrapper from "../components/toolbar/ToolbarWrapper";
import ButtonGroup from "../components/ButtonGroup";
import Field from "../components/Field";

@Component({
  components: {
    ToolbarWrapper,
    ButtonGroup,
    Field
  }
})
export default class MagicCounter extends Vue {}
</script>
