<script setup>
  const bgOrange="bg-orange-400"
  const bgIndigo="bg-indigo-400"
  const bgGreen="bg-green-400"

 const weekday = false
</script>

<template>
  <section class="container mx-auto">
    <h1 class="text-center text-3xl py-12">Class & Style Binding</h1>

    <section class="flex space-x-10">
      <div class="w-1/3 h-16" :class="bgOrange"></div>
      <div class="w-1/3 h-16" :class="bgIndigo" ></div>
      <div class="w-1/3 h-16" :class="bgGreen"></div>
    </section>

    <section class="mt-10">
      <!-- <div class="h-16 flex items-center justify-center text-white" :class="weekday?'bg-red-600 text-2xl':'bg-green-600 text-4xl'">
        It's a weekday!
      </div> -->


      <div class="h-16 flex items-center justify-center text-white" :class="[weekday?'bg-red-600 ':'bg-green-600 ', weekday==true?'text-2xl':'text-4xl']">
        It's a weekday!
      </div>
    </section>

    <section class="mt-10">
      <div class=" border-t-4 rounded-b px-4 py-3 shadow-md"  >
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you.</p>
      </div>
    </section>
  </section>
</template>

<style scoped></style>