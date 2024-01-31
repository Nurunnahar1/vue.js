 

<style scoped>

.bg-primary{
  background-color: blueviolet;
}
.bg-danger{
  background-color: aqua;
}

.width{
  width: 500px;
}
</style>

<template>
  <!-- <img :src="imageURL" alt="" :class="isActive ? 'bg-primary':'bg-danger'"> -->
  <img :src="imageURL" alt="" :class="isActive ? 'width':'bg-danger'">
  
</template>

<script setup>
import {ref , reactive  } from "vue";

let imageURL = ref('https://picsum.photos/200');

let isActive = ref(false);

</script>