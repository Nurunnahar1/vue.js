<template>
  <h1>{{ title }}</h1>
  <div class="">
    <button @click="showModal = true">Show Modal</button>

    <Teleport to="body">
      <div v-if="showModal" class="modal">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque?
        </p>
        <button @click="showModal = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
let title = ref("VueJs Master Class");

const showModal = ref(false);
</script>
