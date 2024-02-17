<script setup>
import { ref,reactive,inject } from "vue";
const data = inject('myData');
import { ydata } from "../data/ydata";
</script>

<template>
  <h4>Child component</h4>

  <button @click="ydata.increase()">++</button>
  <button @click="ydata.decrease()">--</button>
  <!-- <button @click="data.increase()">++</button>
  <button @click="data.decrease()">--</button> -->
</template>
