<!-- 
  Crear un arreglo de objetos donde cada objeto tenga la información de una card (imagen, titulo y
  texto)  para mostrarlo usando las directivas vistas en clase 
-->
<script setup>
// Declaración del arreglo "cards" con objetos que contienen información de las cards
let cards = [
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  },
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    titulo: 'Hola mundo',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias eum animi laboriosam, corporis, quas,inventore nam labore molestiae ab accusamus aliquam cum aperiam delectus similique assumenda corrupti placeat in'
  }
]
</script>

<!-- Plantilla que muestra las cards usando la directiva "v-for" -->
<template>
  <h1>Cards</h1>
  <section class="contenedor">
    <!-- Bucle que recorre el arreglo "cards" y muestra cada objeto como una card -->
    <div class="card" v-for="(item, index) in cards" :key="index">
      <img class="card--imagen" :src="item.img" alt="imagen de prueba">
      <h3>{{ item.titulo }}</h3>
      <p>{{ item.texto }}</p>
    </div>
  </section>
</template>

<!-- Estilos para la visualización de las cards -->
<style>
.contenedor {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  border-radius: 5px;
  border: 1px solid black;
  max-width: 500px;
  text-align: center;
}

.card--imagen {
  width: 100%;
}
</style>