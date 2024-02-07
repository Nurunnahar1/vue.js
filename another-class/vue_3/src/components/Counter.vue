<template>
    <h2>{{ title }}</h2>
     <div class="counter">
    <button @click="count++">+</button>
    <p>{{ count }}</p>
    <button @click="count--">-</button>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
const count = ref(0);

const props = defineProps(['title']);

</script>
 


<style scoped>
.counter {
  display: flex;
  width: 100px;
  justify-content: space-between;
  padding: 10px;
}
</style>