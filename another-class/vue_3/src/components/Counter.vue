<template>
    <h2>{{ title }}</h2>

    <p>{{ message }}</p>

     <div class="counter">
    <button @click="count++">+</button>
    <p>{{ count }}</p>
    <button @click="count--">-</button>
  </div>
</template>





<script setup>
import { ref, inject } from "vue";
const count = ref(0);

const props = defineProps(['title']);

const message = inject("message");

</script>
 


<style scoped>
.counter {
  display: flex;
  width: 100px;
  justify-content: space-between;
  padding: 10px;
}
</style>