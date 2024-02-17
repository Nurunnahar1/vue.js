<script setup>
import { ref } from 'vue'
// defineProps(['clickHandler', 'label', ])
defineProps(['clickHandler',  ])
</script>
<template>

 
<button type="button"  @click="clickHandler()" ><slot></slot> </button>
 

</template>