<script setup>
import { ref, reactive } from "vue";
let count = ref(0);
let title = ref("Methods/Function in Vue");

let course = reactive({
  name: "Vue 3 Mastering",
  mentor: "Nasrin",
  plateform: "abc",
});

function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
</script>

<template>
  <h1>{{ course.name }} - {{ title }}</h1>
  <p>course by {{ course.name }}</p>

  <button @click="increment">+</button>
  <h3>{{ count }}</h3>
  <button @click="decrement">-</button>
</template>
