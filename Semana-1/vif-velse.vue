<!-- 
  Solicitar un usuario y contraseña, si los datos son los adecuados mostrar un mensaje de
  bienvenida, de lo contrario mostrar otra información 
-->

<!-- Declaración de las variables "user" y "password" para almacenar los valores ingresados por el usuario -->
<script setup>
let user = prompt("Usuario"), password = prompt("Contraseña")
</script>

<template>
  <!-- Mostrar un mensaje de bienvenida si el usuario y contraseña son correctos -->
  <div v-if="user == 'LuisLaiton' && password == 123">
    <h1>Bienvenido {{ user }}</h1>
  </div>
  <!-- Mostrar mensaje de error si el usuario o contraseña son incorrectos -->
  <div v-else>
    <h1>Usuario o contraseña incorrectos</h1>
    <p>Recargue la página</p>
  </div>
</template>
