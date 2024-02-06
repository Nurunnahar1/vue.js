<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="input" />
</template>

<script setup>
import { ref, onMounted } from "vue";

let title = ref("VueJs Master Class");
const input = ref(null);

/** Life Cycle hools */
onMounted(() => {
  input.value.focus();
  console.log(input.value);
  console.log(object);
});
</script>
