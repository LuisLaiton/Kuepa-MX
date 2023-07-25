<!-- 
  Cree un array con los primeros 10 números de la serie de Fibonacci y usando los temas aprendidos
  muéstrelos en una lista y si el número agregar “Número par”
-->

<script setup>
// Declaración y definición de una variable "array" que contiene los dos primeros números de la secuencia Fibonacci
let array = [0, 1]

// Bucle que genera la secuencia de Fibonacci desde el tercer número hasta el décimo número
for (let item = 3; item <= 10; item++) {
  // Cada número es la suma de los dos números anteriores en la secuencia
  let a = array[item-2], b = array[item-3]
  array.push(a + b) // Agregar el nuevo número a la secuencia
}
</script>

<template>
  <!-- Mostrar la secuencia completa de números de Fibonacci -->
  <h1>{{ array }}</h1>

  <!-- Crear una lista que muestra cada número de la secuencia -->
  <ul>
    <li v-for="(item, index) in array" :key="index">
      {{ item }}
      <!-- Etiquetar los números pares en la lista -->
      <span v-if="item % 2 == 0"> - Número par</span>
    </li>
  </ul>
</template>
