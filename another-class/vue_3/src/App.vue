<script setup>
import { ref, reactive } from "vue";
let count = ref(0);
let title = ref("Methods/Function in Vue");

let course = reactive({
  name: "Vue 3 Mastering",
  mentor: "Nasrin",
  plateform: "abc",
});

function increment(amount) {
  // count.value++;
  count.value +=amount;
}
function decrement(amount) {
  count.value -=amount;
}
</script>

<template>
  <h1>{{ course.name }} - {{ title }}</h1>
  <p>course by {{ course.name }}</p>

  <button @click="increment(2)">+</button>
  <h3>{{ count }}</h3>
  <button @click="decrement(1)">-</button>
</template>
