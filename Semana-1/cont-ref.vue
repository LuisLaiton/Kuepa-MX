<!-- 
  Crear un contador donde cada vez que el usuario precione el boton el numero aumentara
-->
<script setup>
// Importar la función "ref" de Vue.js
import { ref } from 'vue'

// Declarar una variable reactiva llamada "num" con valor inicial 0
let num = ref(0)

// Definir la función "incrementar" que aumenta en 1 el valor de la variable "num" y muestra el nuevo valor en la consola
let incrementar = () => {
  num.value++
  console.log(num.value)
}
</script>

<template>
  <!-- Mostrar el valor actual de la variable "num" en un título -->
  <h1>{{ num }}</h1>
  <!-- Crear un botón que, al hacer clic, ejecuta la función "incrementar" -->
  <button @click="incrementar">Aumentar</button>
</template>
