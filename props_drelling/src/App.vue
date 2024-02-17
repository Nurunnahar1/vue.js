<script setup>
import { ref, reactive,provide } from "vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import SlotComponent from "./components/SlotComponent.vue";
import PropsDrelling from "./components/PropsDrelling.vue";
import ParentComponent from "./components/ParentComponent.vue";


const msg = ref("Hello World");

function clickHandlerOne() {
  msg.value = "Click One";
}

function clickHandlerTwo() {
  msg.value = "Click Two";
}



const data = reactive({
  message: "Hello World",
  count: 0,
  increase() {
    this.count++;
  },
  decrease() {
    this.count--;
  }
})

provide('myData', data)

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




<p>{{ data.message }} | {{ data.count }}</p>
  <h4>Props Drelling</h4>
  <PropsDrelling :data="data" ></PropsDrelling>


<h4>Props Component</h4>
<ParentComponent></ParentComponent>

</template>

<style scoped></style>
