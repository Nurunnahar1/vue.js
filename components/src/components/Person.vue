<script setup>

defineProps(['person'])
</script>

<template>


<h1>{{ person.name }} ...{{ person.age }}....{{ person.occupation }}</h1>

</template>