<template>
  <h1>{{ title }}</h1>

  <div class="">
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/service">Service</a>
  <a href="/contact">Contact</a>
  </div>
   
</template>

<script setup>
  import {provide ,ref } from "vue";
  import Counter from "./components/Counter.vue";

  provide("message", "Hello World.......");

  let title = ref("VueJs Master Class");
</script>
