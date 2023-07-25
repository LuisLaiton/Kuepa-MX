<!-- 
  Mostrar tres botones con un contador donde cada vez que el numero sea mayor a 0 el numero cambie
  a color verde, si es menor a 0 cambia a color rojo y si es menor a 0 cambia a color azul
-->

<script setup>
// Importar la función "ref" de Vue.js
import { ref } from 'vue'

// Declarar una variable reactiva llamada "num" con valor inicial 0
let num = ref(0)

// Definir la función "aumentar" que incrementa en 1 el valor de la variable "num"
let aumentar = () => {
  num.value++
}

// Definir la función "disminuir" que decrementa en 1 el valor de la variable "num"
let disminuir = () => {
  num.value--
}

// Definir la función "reset" que establece el valor de la variable "num" a 0
let reset = () => {
  num.value = 0
}
</script>

<template>
  <!-- Mostrar el valor actual de la variable "num" en un título y cambiar el color según su valor -->
  <h1 :class="num < 0 ? 'texto-rojo' : num == 0 ? 'texto-azul' : 'texto-verde'">
    {{ num }}
  </h1>

  <!-- Crear tres botones, cada uno con un evento "@click" que llama a las funciones correspondientes -->
  <button @click="aumentar">aumentar</button>
  <button @click="disminuir">disminuir</button>
  <button @click="reset">reset</button>
</template>

<!-- Estilos CSS para cambiar el color del número según su valor -->
<style>
.texto-rojo {
  color: red;
}

.texto-verde {
  color: green;
}

.texto-azul {
  color: blue;
}
</style>
