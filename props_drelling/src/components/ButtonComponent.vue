<script setup>
import { ref } from 'vue'
defineProps(['clickHandler', 'label', ])
</script>
<template>

<p>
<button type="button" class="btn btn-primary" @click="clickHandler()" >{{ label }}</button>
</p>

</template>