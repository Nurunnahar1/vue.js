<script setup>

defineProps(['person'])
</script>

<template>


<h1>{{ person.name }} ...{{ person.age }}....{{ person.occupation }}</h1>
 <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" v-model="person.name" > 
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="text" class="form-control" id="age" v-model="person.age" > 
  </div>
  <div class="mb-3">
    <label for="occupation" class="form-label">Occupation</label>
    <input type="text" class="form-control" id="occupation" v-model="person.occupation" > 
  </div>
 
</form>

</template>