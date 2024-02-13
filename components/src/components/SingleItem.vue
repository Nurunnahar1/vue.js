<script setup>

defineProps(['modelValue','label'])
defineEmits('update:modelValue', 'label')
</script>

<template>


 
    <label for="name" class="form-label">{{ label }}</label>
    <input type="text" class="form-control" id="name" :value="modelValue"   @input="$emit('update:modelValue', $event.target.value)">
 
 
 
 

</template>