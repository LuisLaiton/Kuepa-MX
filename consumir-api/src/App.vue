<script setup>
import BlogPost from './components/BlogPost.vue'
import UsersGitHub from './components/UsersGitHub.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { ref } from 'vue'

const posts = ref ([])
const loading = ref(true)
const favorito = ref('')

const cambiarFavorito = (title) => {
  favorito.value = title
}

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => res.json())
//   .then((data) => posts.value = data)
//   .catch((e) => console.log(e))
//   .finally(() => { //Se ejecuta mientras termina de cargar la API
//     setTimeout(() => { // Retrasa la ejecucion 2 segundos
//       loading.value = false
//     }, 2000)
//   })

const getData = async() => {
  try {
    // await para promesas
    // API de ejemplo
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // API personalizada de GitHub
    // const res = await fetch('https://raw.githubusercontent.com/LuisLaiton/API-json/main/usuarios.json')
    posts.value = await res.json()
    console.log(posts.value.usuarios)
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 2000)
  }
}

getData()
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <div class="container" v-else>
    <h1>APP</h1>
    <h2>Mis Post favorito: {{ favorito }}</h2>

    <BlogPost 
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavorito="cambiarFavorito"
    />

    <!-- <UsersGitHub 
      v-for="post in posts.usuarios"
      :key="post.id"
      :nombre="post.nombre"
      :apellido="post.apellido"
      :edad="post.edad"
      :email="post.email"
      :password="post.password"
      :intereses="post.intereses"
      :esAdmin="post.esAdmin"
      @cambiarFavorito="cambiarFavorito"
    /> -->
  </div>
</template>