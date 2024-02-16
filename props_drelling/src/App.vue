<script setup>
    import HelloWorld from './components/HelloWorld.vue'
    import { ref, reactive } from 'vue'
    import ButtonComponent from './components/ButtonComponent.vue';

    const msg = ref("Hello World");

    function clickHandlerOne() {
      msg.value = "Click One";
    }

    function clickHandlerTwo() {
      msg.value = "Click Two";
    }

 </script>

<template>
 

 <h1>Slot</h1>
 <ButtonComponent  :clickHandler="clickHandlerOne" />
 <ButtonComponent  :clickHandler="clickHandlerTwo" />

 
</template>



<style scoped>
 
</style>
