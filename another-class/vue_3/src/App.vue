<template>
  <h1>{{ title }}</h1>
  <Counter v-for="i in 3">
    <div class="">
      <p>Counter {{ i }}</p>
    </div>
  </Counter>
</template>

<script setup>
import { ref } from "vue";
import Counter from "./components/Counter.vue";

let title = ref("VueJs Master Class");
</script>
