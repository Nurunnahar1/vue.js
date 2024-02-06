<template>
  <h1>{{ title }}</h1>
  <button id="counter" @click="increment">{{ count }}</button>
</template>

<script setup>
import { ref, nextTick } from "vue";

let title = ref("VueJs Master Class");
const count = ref(0);

const increment = async() => {
  count.value++;

  //dom update before state
  console.log(document.getElementById("counter").textContent);

  await nextTick();

  //after updated dom
  console.log(document.getElementById("counter").textContent);
 }
</script>
