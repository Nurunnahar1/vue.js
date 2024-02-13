<script setup>

defineProps(['name','age','occupation']);
defineEmits(['update:name','update:age','update:occupation']);
</script>

<template>


 
<form>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" :value="name"  @input="$emit('update:name', $event.target.value)">
    </div>
    <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input type="text" class="form-control" id="age" :value="age"  @input="$emit('update:age', $event.target.value)">
    </div>
    <div class="mb-3">
        <label for="occupation" class="form-label">Occupation</label>
        <input type="text" class="form-control" id="occupation" :value="occupation" @input="$emit('update:occupation', $event.target.value)">
    </div>

</form>
 
 
 

</template>