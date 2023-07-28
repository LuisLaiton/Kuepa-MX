<script setup>
import { ref } from 'vue'

let registro = ref(true), contenido = ref(false)
const usuario = ref({
  nombre: '',
  apellido: '',
  sexo: '',
  edad: 0,
  user: '',
  password: '',
  conocimientos: [],
  admin: false,
  observaciones: '',
  grupo: ''
}),
  inicio = {
    user: '',
    password: ''
  }
function guardarRegistro(event) {
  event.preventDefault()
  console.log(usuario.value)
  cambioformulario()
}
function cambioformulario() {
  registro.value = !registro.value
}
let parrafos = 0
function login(event) {
  event.preventDefault()
  if (usuario.value.user == inicio.user && usuario.value.password == inicio.password) {
    contenido.value = true
    parrafos = Number(prompt('Cantidad de parrafos a mostrar'))
  } else {
    alert('Usuario o contraseña invalidos')
  }
}

</script>

<template>
  <header>
    <img src="@/assets/logo.svg" alt="Logo" class="logo">
    <h1>Lenguaje de programación</h1>
  </header>

  <main>
    <section v-show="!contenido" class="formularios">
      <form v-if="registro" class="">
        <fieldset>
          <legend>
            <h2>Registro</h2>
          </legend>
          <label for="nombre">
            Nombre <br>
            <input type="text" id="nombre" v-model="usuario.nombre" size="33">
          </label>
          <br> <br>
          <label for="apellido">
            Apellido <br>
            <input type="text" id="apellido" v-model="usuario.apellido" size="33">
          </label>
          <br><br>
          <label>
            Sexo
            <br>
            <label for="sexo-M">
              <input type="radio" id="sexo-M" name="sexo" value="M" v-model="usuario.sexo">
              Masculino
            </label>
            <label for="sexo-F">
              <input type="radio" id="sexo-F" name="sexo" value="F" v-model="usuario.sexo">
              Femenino
            </label>
          </label>
          <br><br>
          <label for="edad">
            Edad
            <input type="number" id="edad" v-model="usuario.edad">
          </label>
          <br><br>
          <label for="user">
            Correo <br>
            <input type="email" id="user" v-model="usuario.user" size="33">
          </label>
          <br><br>
          <label for="password">
            Contraseña <br>
            <input type="password" id="password" v-model="usuario.password" size="33">
          </label>
          <br><br>
          <label for="conocimientos">
            <!-- Debe tener una variable reactiva -->
            Conocimientos
            <br>
            <label for="HTML">
              <input type="checkbox" id="HTML" value="HTML" v-model="usuario.conocimientos"> HTML
            </label>
            <label for="CSS">
              <input type="checkbox" id="CSS" value="CSS" v-model="usuario.conocimientos"> CSS
            </label>
            <label for="JS">
              <input type="checkbox" id="JS" value="JS" v-model="usuario.conocimientos"> JavaScript
            </label><br>
            <label for="Vue">
              <input type="checkbox" id="Vue" value="Vue" v-model="usuario.conocimientos"> Vue.js
            </label>
          </label>
          <br><br>
          <label for="permisos">
            <input type="checkbox" id="permisos" v-model="usuario.admin">
            ¿Usuario administrador?
          </label>
          <br><br>
          <label for="observaciones">
            Observaciones
            <br>
            <textarea id="observaciones" cols="30" rows="5" v-model="usuario.observaciones"></textarea>
          </label>
          <br><br>
          <label for="menu">
            Grupo
            <select id="menu" v-model="usuario.grupo">
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

          <br><br><br>
          <input type="submit" value="Guardar" @click="guardarRegistro" class="boton btn-principal">
          <input type="reset" value="Borrar" class="boton">
          <br>
          <button class="enlace" @click="cambioformulario">Ya tengo una cuenta</button>

        </fieldset>
      </form>

      <form v-else>
        <fieldset>
          <legend>
            <h2>Iniciar sesión</h2>
          </legend>
          <label for="user">
            Usuario <br>
            <input type="email" id="user" size="33" v-model="inicio.user">
          </label>
          <br><br>
          <label for="password">
            Contraseña <br>
            <input type="password" id="password" size="33" v-model="inicio.password">
          </label>

          <br><br><br>
          <input type="submit" value="Ingresar" class="boton btn-principal" @click="login">
          <br>
          <button class="enlace" @click="cambioformulario">Registrarme</button>
        </fieldset>
      </form>
    </section>
    <section v-show="contenido" class="contenido">
      <h2>Bienvenido {{ usuario.nombre }}</h2>
      <ul>
        <li v-for="(valor, propiedad, index) in usuario" :key="index">
          {{ propiedad }}: {{ valor }}
        </li>
      </ul>
      <br>
      <h3>Parrafos: {{ parrafos }}</h3>
      <p v-for="(item, index) in parrafos" :key="index">
        <br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis libero veritatis consequuntur magnam ad
        blanditiis beatae perspiciatis eligendi consequatur dolore recusandae sed id exercitationem, tempore, voluptatibus
        maiores. Quisquam, quam? - {{ item }}
      </p>
    </section>
  </main>

  <footer>
    <p>Evaluación semana 1 - Lenguaje de programación</p>
  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #EAECEE;
}

header {
  background-color: #17202A;
  padding: 1%;
  color: white;
  display: flex;
  gap: 5%;
}

.logo {
  max-width: 50px;
}

.formularios {
  padding: 50px 35%;
}

footer {
  background-color: #17202A;
  padding: 1%;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

fieldset {
  padding: 20px 20%;
  border-radius: 10px;
  background-color: #154360;
  color: white;
}

legend {
  color: #154360;
  position: relative;
  bottom: 15px;
}

input {
  padding: 5px;
  border-radius: 5px;
}

.boton {
  width: 100%;
  border: none;
  margin: 2px auto;
  font-size: medium;
}

.btn-principal {
  background-color: #D35400;
  font-weight: bold;
}

.enlace {
  background-color: transparent;
  border: none;
  width: 100%;
  text-decoration: underline;
  color: #D35400;
}

.contenido {
  padding: 50px 20%;
}

ul {
  margin-top: 20px;
}
</style>