<template>
  <h1>{{ title }}</h1>
  <Counter v-for="i in 3" title=" Counter">
    <div class="">
      <p>Counter {{ i }}</p>
    </div>
  </Counter>
</template>

<script setup>
  import {provide ,ref } from "vue";
  import Counter from "./components/Counter.vue";

  provide("message", "Hello World.......");

  let title = ref("VueJs Master Class");
</script>
