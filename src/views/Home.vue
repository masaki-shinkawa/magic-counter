<template>
  <section>
    <div class="md-layout title">
      <h1>遊戯王 - 魔力カウンター</h1>
    </div>
    <button-group></button-group>
    <field></field>
  </section>
</template>

<script>
import Field from "../components/Field";
import ButtonGroup from "../components/ButtonGroup";

export default {
  name: "home",
  components: {
    Field,
    ButtonGroup
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  height: 4rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: "JiyunoTsubasa";
}
</style>
