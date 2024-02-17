<script setup>
import { ref } from "vue"
defineProps(['data'])

</script>


<template>
    <h4>Parent component</h4>

    <button @click="data.increase()" >++</button>
    <button @click="data.decrease()">--</button>
</template>