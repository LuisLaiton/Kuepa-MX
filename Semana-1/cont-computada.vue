<!-- 
  Contador con cambio de color
  usando una propiedadd computada
-->

<script setup>
// Importar las funciones "ref" y "computed" de Vue.js
import { ref, computed } from 'vue'

// Declarar una variable reactiva llamada "num" con valor inicial 0
let num = ref(0)

// Definir una propiedad computada llamada "classNum" que devuelve la clase CSS correspondiente al valor actual de "num"
const classNum = computed(() => {
  if (num.value < 0) {
    return 'texto-rojo' // Devuelve 'texto-rojo' si "num" es negativo
  } else if(num.value > 0){
    return 'texto-verde' // Devuelve 'texto-verde' si "num" es positivo
  } else {
    return 'texto-azul' // Devuelve 'texto-azul' si "num" es cero
  }
})

// Definir la función "aumentar" que incrementa en 1 el valor de la variable "num"
const aumentar = () => {
  num.value++
}

// Definir la función "disminuir" que decrementa en 1 el valor de la variable "num"
const disminuir = () => {
  num.value--
}
</script>

<template>
  <!-- Mostrar el valor actual de la variable "num" en un título y aplicar la clase CSS "classNum" según su valor -->
  <h1 :class="classNum">{{ num }}</h1>

  <!-- Crear dos botones que permiten aumentar o disminuir el valor de "num" al hacer clic -->
  <button @click="aumentar">aumentar</button>
  <button @click="disminuir">disminuir</button>
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
