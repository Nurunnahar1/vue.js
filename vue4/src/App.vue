<script setup>
import { ref } from "vue";

 let courseName = ref("Vue js masterClass");
let count= ref(0);
</script>

<template>
 <h1>Course Name: {{ courseName }}</h1>

 <button @click="count++">+</button>
 <h3>{{ count }}</h3>
 <button @click="count--">-</button>
</template>

<style scoped>

</style>