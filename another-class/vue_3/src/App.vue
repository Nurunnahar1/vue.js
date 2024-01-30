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


 let vHtml = "Insert a new text using v-html."
let showBtn = ref(false);

let todos = ref([
  {id:1, todo: 'task 1'},
  {id:2, todo: 'task 2'},
  {id:3, todo: 'task 3'},
  {id:4, todo: 'task 4'},
]);



let imageUrl = ref('https://picsum.photos/200');


</script>

<template>
  <h1 v-show="showBtn"> {{ course.name }} <span v-text="title" > </span></h1>


  <button @click="showBtn =!showBtn">Show / Hide</button>

<!-- v-html -->

<h1 v-html="vHtml"></h1>



  <p @click="changeName">course by {{ fullName }}</p>

  <button @click="increment(1)">+</button>
  <h3>{{ count }} // {{ checkOddOrEven }}</h3>
  <button @click="decrement(1)">-</button>


  <div>
  <ul>
  <li v-for="(todo,index) in todos" :key="index">{{ index+1 }}// {{ todo.todo }}
  </li>
  </ul>
  </div>



<img v-bind:src="imageUrl" alt="">

</template>
