<script setup>
const tasks = [
  { id: 1, title: "Complete project proposal", status: "In Progress" },
  { id: 2, title: "Update website content", status: "Completed" },
  { id: 3, title: "Fix bug in user authentication", status: "In Progress" },
  { id: 4, title: "Prepare presentation slides", status: "Pending" },
  { id: 5, title: "Test new feature implementation", status: "In Progress" },
];

function getCompletedTasks() {
  return tasks.filter(task=>"Completed"==task.status)
}
 
function getInProgressTasks() {
  return tasks.filter(task=>"In Progress"==task.status)
}
 
function Pending() {
  return tasks.filter(task=>"Pending"==task.status)
 }

</script>

<template>
  <section class="mx-auto container">
    <section class="mx-auto container space-y-3">
      <h2>Completed</h2>
      <!-- <div class="p-5 border border-gray-600 text-left"  v-for="task in tasks" :key="task.id">{{ task.title }} </div> -->
      <div class="p-5 border border-gray-600 text-left"  v-for="(task,id) in getCompletedTasks()" :key="task.id">{{ task.id }} {{ task.title }} </div>

      <div class="p-5 border border-gray-600 text-left"  v-for="(task,id) in getInProgressTasks()" :key="task.id">{{ task.id }} {{ task.title }} </div>

      <div class="p-5 border border-gray-600 text-left"  v-for="(task,id) in Pending()" :key="task.id">{{ task.id }} {{ task.title }} </div>
      <!-- <h2>In Progress</h2>
      <div class="p-5 border border-gray-600 text-left" > </div>
      <h2>Pending</h2>
      <div class="p-5 border border-gray-600 text-left"  > </div>
     
      <h2>Object Loop</h2>
      <div class="p-5 border border-gray-600 text-left" > </div> -->

    </section>
  </section>
</template>

<style scoped></style>