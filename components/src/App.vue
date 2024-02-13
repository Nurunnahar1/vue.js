<script setup> 
import { reactive } from 'vue'
import Person from './components/Person.vue';

const person = reactive({
  name: 'John',
  age: 25,
  occupation: 'Web Developer'
});

</script>

<template>

<h1>Person</h1>
{{ person.name }} is {{ person.age }} years old and he is a {{ person.occupation}}.


<Person :person="person" /> 

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

<style scoped>
 
</style>
