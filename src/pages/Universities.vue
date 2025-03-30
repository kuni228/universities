<script setup>
import axios from 'axios';
import { ref } from 'vue';
import "/node_modules/flag-icons/css/flag-icons.min.css";
const a = ref('')
const universities = ref([])


function test(event){
  event.preventDefault()

  axios.get(`http://universities.hipolabs.com/search?name=${a.value}`)
  .then(res => {
    universities.value = res.data
    console.log(res.data)
  })
  .catch(err => {
    console.err('Ошибка: ', err)
  })
}

function getFlag(z){
  return 'fi fi-' + z.toLowerCase()
}
</script>

<template>
  <form action="" @submit="test($event)">
    <input type="text" v-model="a">
    <input type="submit">
  </form>
  <div class="cards">
    <div class="card" v-for="university in universities" :key="universities.name">
      
      <p>Название: {{ university.name }}</p>
      <p>Страна: <span :class="getFlag(university.alpha_two_code)"></span></p>
    </div>
  </div>
</template>

<style scoped>
.cards{
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 10px
}
.card{
  background-color: black;
  border-radius: 15px;
  color: white;
  padding: 10px;
}
</style>
