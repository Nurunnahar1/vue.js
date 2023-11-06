<script setup>
 import { ref } from 'vue';
const favouriteColor = ref([])
</script>

<template>
  <section class="mx-auto container">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="mb-10">{{ favouriteColor }}</p>
    Your favorite colors <br/>
    <label for="red">Red</label>
    <input class="ml-2 mr-2" type="checkbox" id="red" v-model="favouriteColor" value="red">
    <label for="green">Green</label>
    <input class="ml-2 mr-2" type="checkbox" id="green" v-model="favouriteColor" value="green">
    <label for="blue">Blue</label>
    <input class="ml-2 mr-2" type="checkbox" id="blue" v-model="favouriteColor" value="blue">
    <label for="blue">Yellow</label>
    <input class="ml-2 mr-2" type="checkbox" id="yellow" v-model="favouriteColor" value="yellow">
  </section>
</template>
<style scoped></style>