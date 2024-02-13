<script setup>

defineProps(['modelValue','label'])
defineEmits('update:modelValue', 'label')
</script>

<template>


 
 <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" :value="modelValue"   @input="$emit('update:modelValue', $event.target.value)">
  </div>
</form>
 <!-- <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" v-model="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</form> -->
 

</template>