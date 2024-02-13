<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted } from "vue";

onMounted(() => {
  alert("Hello world");
});
</script>

<template>
  <h1>Hello , I am App.vue....</h1>
  <HelloWorld />
</template>

<style scoped></style>
