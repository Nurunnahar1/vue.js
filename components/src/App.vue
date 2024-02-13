<script setup> 
import { reactive } from 'vue'
import Person from './components/Person.vue';
import SingleItem from './components/SingleItem.vue';
import MultipleItem from './components/MultipleItem.vue';
import ButtonItem from './components/ButtonItem.vue';

const person = reactive({
  name: 'John',
  age: 25,
  occupation: 'Web Developer'
});

</script>

<template>

<h1>Person</h1>
{{ person.name }} is {{ person.age }} years old and he is a {{ person.occupation}}.




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

<Person :person="person" /> 
<!-- <h1>Single Item</h1> -->
<!-- <SingleItem v-model="person.name"  label="name" />
<SingleItem v-model="person.age" label="age"  />
<SingleItem v-model="person.occupation" label="occupation"  /> -->
<h1>Multiple Item</h1>
<MultipleItem v-model:name="person.name" v-model:age="person.age" v-model:occupation="person.occupation"/>

<ButtonItem v-model:name="person.name" label="Name" />
  
</template>

<style scoped>
 
</style>
