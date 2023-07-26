<script setup>
import { ref } from 'vue'

let nombre = '', apellido = '', sexo = '', edad = 0, user = '', password = '', conocimientos = ref([]), admin = false, observaciones = '', grupo = ''

function mostrarDatos(event) {
  event.preventDefault()
}

</script>

<template>
  <form>
    <label for="nombre">
      Nombre
      <input type="text" id="nombre" v-model="nombre">
    </label>
    <br>
    <label for="apellido">
      Apellido
      <input type="text" id="apellido" v-model="apellido">
    </label>
    <br>
    <label>
      Sexo
      <br>
      <label for="sexo-M">
        Masculino
        <input type="radio" id="sexo-M" name="sexo" value="M" v-model="sexo">
      </label>
      <label for="sexo-F">
        Femenino
        <input type="radio" id="sexo-F" name="sexo" value="F" v-model="sexo">
      </label>
    </label>
    <br>
    <label for="edad">
      Edad
      <input type="number" id="edad" max="100" min="16" v-model="edad">
    </label>
    <br>
    <label for="user">
      Correo
      <input type="email" id="user" v-model="user">
    </label>
    <br>
    <label for="password">
      Contraseña
      <input type="password" id="password" v-model="password">
    </label>
    <br>
    <label for="conocimientos">
      <!-- Debe tener una variable reactiva -->
      Conocimientos
      <br>
      <label for="HTML">
        <input type="checkbox" id="HTML" value="HTML" v-model="conocimientos"> HTML
      </label>
      <label for="CSS">
        <input type="checkbox" id="CSS" value="CSS" v-model="conocimientos"> CSS
      </label>
      <label for="JS">
        <input type="checkbox" id="JS" value="JS" v-model="conocimientos"> JavaScript
      </label>
      <label for="Vue">
        <input type="checkbox" id="Vue" value="Vue" v-model="conocimientos"> Vue.js
      </label>
    </label>
    <br>
    <label for="permisos">
      <input type="checkbox" id="permisos" v-model="admin">
      ¿Usuario administrador?
    </label>
    <br>
    <label for="observaciones">
      Observaciones
      <br>
      <textarea id="observaciones" cols="30" rows="10" v-model="observaciones"></textarea>
    </label>
    <br>
    <label for="menu">
      Grupo
      <select id="menu" v-model="grupo">
        <option value="" selected>...</option>
        <optgroup label="seccion 1">
          <option value="1-1">Uno</option>
          <option value="1-2">Dos</option>
          <option value="1-3">Tres</option>
        </optgroup>
        <optgroup label="seccion 2">
          <option value="2-1">Uno</option>
          <option value="2-2">Dos</option>
          <option value="2-3">Tres</option>
        </optgroup>
      </select>
    </label>

    <br>
    <button @click="mostrarDatos">Guardar</button>
    <input type="reset" name="Borrar">
  </form>
</template>