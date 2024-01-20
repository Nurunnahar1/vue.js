

<script setup>
import { ref, reactive } from "vue";
let count = ref(0);

count.value = 10;

let course = reactive({
  name: "Vue 3 Mastering",
  mentor: "Nasrin",
  plateform: "abc",
});
</script>

<template>
  <h1>{{ course.name }}</h1>
  <h1>{{ course.mentor }}</h1>
  <h1>{{ course.plateform }}</h1>
</template>
