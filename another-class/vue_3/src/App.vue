<script setup>
import { ref, reactive, computed, watch } from "vue";
let count = ref(0);
let title = ref("Methods/Function in Vue");

let course = reactive({
  name: "Vue 3 Mastering",
  mentor_first_name: "Nasrin",
  mentor_last_name: "Muskan",
  plateform: "abc",
});

const fullName = computed(() => {
  return course.mentor_first_name + " " + course.mentor_last_name;
});

// function increment(amount) {
//   // count.value++;
//   count.value +=amount;
// }
// function decrement(amount) {
//   count.value -=amount;
// }

//using es6
const increment = (amount) => (count.value += amount);

const decrement = (amount) => (count.value -= amount);
const changeName = () => (course.name = "Muskan");

/** check count number is odd or even */

const checkOddOrEven = computed(() => {
  // if( count.value % 2  === 0 ) return 'Even';
  //   return 'Odd';
  return count.value % 2 === 0 ? 'Odd' : 'Odd';
});


/** watch method */
watch(() => count.value, (newValue, oldValue)=> {
  console.log('newValue', newValue);
  console.log('oldValue', oldValue);

  if (newValue > 4) {
    alert('Count value is over than 4');
  }
});



</script>

<template>
  <h1>{{ course.name }} - {{ title }}</h1>
  <p @click="changeName">course by {{ fullName }}</p>

  <button @click="increment(1)">+</button>
  <h3>{{ count }} // {{ checkOddOrEven }}</h3>
  <button @click="decrement(1)">-</button>
</template>
