<script setup>
import { ref, computed } from "vue";

const questions = ref([
  {
    question: "What is our national flower?",
    answer: 1,
    options: ["Rose", "Waterlily", "Bela", "ChinaRose"],
    selected: null,
  },
  {
    question: "What is our national Fruit?",
    answer: 2,
    options: ["Mango", "Banana", "Jackfruit", "Pineapple"],
    selected: null,
  },
  {
    question: "What is our national Bird?",
    answer: 1,
    options: ["Dove", "Magpie", "Parrot", "Pigeon"],
    selected: null,
  },

]);

const questionCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(()=>{
    let value = 0
    questions.value.map(question =>{
      if(question.selected == question.answer){
        value++
      }
      return value
    })
})

const getCurrentQuestion = computed(()=>{
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const setAnswer = evt =>{
  questions.value[currentQuestion.value].selected = evt. target.value
  evt.target.value = null
}

const nextQuestion = ()=>{
  if(currentQuestion.value < questions.value.length -1){
    currentQuestion.value++
  }
  else{
    questionCompleted.value = true 
  }
}
</script>

<template>
  <main class="app">
  <h1>The Quiz</h1>

  <section class="quiz">
    <div class="quiz-info">
      <span class="question">{{ getCurrentQuestion.question }}</span>
      <span class="score">Score {{ score }}/{{ questions.length }}</span>
    </div>

    <div class="options">
      <label v-for="(option, index) in getCurrentQuestion.options"
        :key="index"
        :class="`option ${
            getCurrentQuestion.selected == index
              ?index == getCurrentQuestion.answer
                ? 'correct':'wrong':''
        } ${
          getCurrentQuestion.selected !=null && index !=getCurrentQuestion.selected ? 'disabled' : ''
        }
        
        
        `" >
          
            <input type="radio" 
            :name="getCurrentQuestion.index" 
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="setAnswer" >

            <span>{{ option }}</span>
      </label>
    </div>
    <button
      @click="nextQuestion"
      :disabled="!getCurrentQuestion.selected" >
      {{ 
        getCurrentQuestion.index == questions.length - 1
         ? 'Finish'
         :getCurrentQuestion.selected == null
          ? 'Select an option'
          : 'Next Question'
       }}
    </button>
  </section>
  
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  background-color: #271c36;
  color: #fff;
}
</style>
