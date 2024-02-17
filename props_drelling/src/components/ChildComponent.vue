<script setup>
import { ref,reactive,inject } from "vue";
const data = inject('myData');
</script>

<template>
  <h4>Child component</h4>

  <button @click="data.increase()">++</button>
  <button @click="data.decrease()">--</button>
</template>
