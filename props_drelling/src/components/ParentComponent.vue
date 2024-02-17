<script setup >
import { ref,reactive, inject } from "vue"; 
import ChildComponent from "./ChildComponent.vue";
 
const data = inject("myData");
</script>

<template>
  <h4>Parent component</h4>
  <p>{{ data.message }} | {{ data.count }}</p>

  <button @click="data.increase()">++</button>
  <button @click="data.decrease()">--</button>

 <ChildComponent></ChildComponent>
</template>
