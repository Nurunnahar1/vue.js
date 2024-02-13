<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';

onMounted(() => {
  console.log("onMounted Method from child component.")
})
 
</script>

<template>
 <h1>Hello , I am HelloWorld.vue</h1>
</template>

<style scoped>
 
</style>
