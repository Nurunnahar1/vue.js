<script setup>
import { ref } from 'vue'  
</script>
<template>

 <p>
 <slot name="header">  </slot>
 </p>

 <p>
 <slot name="default">dsfsfdsf</slot>
 </p>

 <p>
 <slot name="footer"></slot>
 </p>
 

</template>