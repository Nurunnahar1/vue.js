<script setup>
 import { ref,reactive } from 'vue';

const joke = reactive({
  value:"Random Joke "
 })
function getAJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
    joke.value = data.value
   })
}

 
</script>

<template>
  <section class="flex flex-col items-center w-[500px] hidden">
    <p> {{ joke.value }}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 mt-5" @click="getAJoke()" >
      Get a new joke
    </button>

  </section>

  <!-- <section class="container mx-auto">
    <h1 class="text-2xl">Country List</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 mt-5"  >
      List of Countries
    </button>
    <button class="w-10 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"  >
      A
    </button>
    <button class="w-10 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mt-5" >
      B
    </button>
    <button class="w-10 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" >
      C
    </button>
    <br>
 
    <ul class="mt-10">
      <li  >
       </li>
    </ul>
  </section> -->
</template>

<style scoped></style>
