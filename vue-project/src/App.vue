<script setup>
  // Logica de JS
  let nombre = 'Luis Laiton'
  let styleColor = 'texto-rojo'
</script>

<template>
  <!-- Codigo HTML -->
  <h1 :style="styleColor">{{ nombre }}</h1>
</template>

<style>
  /* Estilos CSS */
  h1 {
    color: red;
  }
</style>





