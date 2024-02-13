<script setup>

const props = defineProps(['name','label']);
const emit = defineEmits(['update:name']);

function reverseItem() {
    emit('update:name',props.name.split('').reverse().join(''));
}
</script>

<template>


 <h2>Button Item</h2>
 <label for="name">{{ name }}</label>
 <button type="button" class="btn btn-primary" @click="reverseItem()">Update {{ label }}</button>
 
 

</template>