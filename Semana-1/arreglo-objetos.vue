<!-- 
  Mostrar de forma ordenada el arreglo de objetos mencionado 
-->

<script setup>
// Declaración y definición de la variable "users" como un arreglo de objetos que representan usuarios
let users = [
  {
    user: 'Luis',
    password: '123',
    edad: 45
  },
  {
    user: 'Felipe',
    password: '456',
    edad: 54
  },
  {
    user: 'Laiton',
    password: '789',
    edad: 32
  }
]
</script>

<template>
  <!-- Mostrar el arreglo completo de objetos "users" -->
  <p>{{ users }}</p>

  <!-- Crear una lista que muestra la información de cada usuario -->
  <ul>
    <li v-for="(item, index) in users" :key="item.user">
      <!-- Mostrar el nombre de usuario, contraseña y edad del usuario actual -->
      {{ item.user }} - {{ item.password }} - {{ item.edad }}
    </li>
  </ul>
</template>
