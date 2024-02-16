<script setup>
import { ref } from 'vue'
defineProps(['clickHandler', ])
</script>
<template>

<p>
<button type="button" class="btn btn-primary" @click="clickHandler()" >Click Me</button>
</p>

</template>