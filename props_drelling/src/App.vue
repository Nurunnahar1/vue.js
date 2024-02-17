<script setup>
import { ref, reactive } from "vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import SlotComponent from "./components/SlotComponent.vue";

const msg = ref("Hello World");

function clickHandlerOne() {
  msg.value = "Click One";
}

function clickHandlerTwo() {
  msg.value = "Click Two";
}
</script>

<template>
  <h4>Button Component</h4>
  <ButtonComponent :clickHandler="clickHandlerOne">
    <button type="button" class="btn btn-primary">Primary</button>
  </ButtonComponent>

  <ButtonComponent :clickHandler="clickHandlerTwo">
    <p>Button Two</p>
  </ButtonComponent>

  <h4>SlotComponent</h4>
  <SlotComponent>


    <template #header>
      <h2>This is header slot</h2>
    </template>


    <template #footer>
      <h2>This is footer slot</h2>
    </template>


  </SlotComponent>
</template>

<style scoped></style>
