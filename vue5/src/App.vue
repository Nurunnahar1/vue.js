<script setup>
import { ref, reactive } from "vue";

const countries = reactive([
  { name: "Bangladesh", capital: "Dhake" },
  { name: "India", capital: "Dilli" },
]);

function getAllCountries(List = 'All') {
  countries.length=0
  fetch("https://restcountries.com/v3.1/all?fields=name,capital")
    .then((Response) => Response.json())
    .then((data) => {
      if('All'==List){
        data.forEach((country) => {
        countries.push({
          name: country.name.common,
          capital: country.capital[0],
        });
      });
      }
      else{
        data.filter(c=>c.name.common.startsWith(List)).forEach(country=>{
          countries.push({
            name: country.name.common,
            capital:country.capital[0]
          })
      })


    }
  })

}

</script>

<template>
  <section class="container mx-auto">
    <h1 class="text-2xl">Country List</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 mt-5"
      @click="getAllCountries()"
    >
      List of Countries
    </button>
    <button
      class="w-10 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" @click="getAllCountries('A')"
    >
      A
    </button>
    <button
      class="w-10 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" @click="getAllCountries('B')"
    >
      B
    </button>
    <button
      class="w-10 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"  @click="getAllCountries('C')"
    >
      C
    </button>
    <br />

    <ul class="mt-10">
      <li v-for="country in countries" :key="country.name">
        {{ country.name }} = {{ country.capital }}
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
