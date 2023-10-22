<script setup>
const animal = 'cow'
 const searchUrl = 'https://www.pexels.com/search/'

 const data = '<Storage>today is 22/10/2023</Storage>'
</script>

<template>
 <h1>Welcome. Get ready to master Vue.js 3</h1>

 <!-- way -1 -->
 <h2>
  <a target="_blank" :href="searchUrl+animal"> Search For {{ animal }}</a>
 </h2>

 <!-- way-2 -->
 <h2>
  <a target="_blank" :href="`https://www.pexels.com/search/${animal.toLowerCase()}`"> Search For {{ animal }}</a>
 </h2>


 <h2 v-html="data"></h2>
</template>

 <style scoped>
</style>