<script setup>
import Cards from './components/Cards.vue';

const objCards = [
  {
    titulo: 'Card 1',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-primary',
    color_text: 'text-primary'
  },
  {
    titulo: 'Card 2',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-success',
    color_text: 'text-success'
  },
  {
    titulo: 'Card 3',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-danger',
    color_text: 'text-danger'
  },
  {
    titulo: 'Card 4',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-warning'
  },
  {
    titulo: 'Card 5',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-info',
    color_text: 'text-info'
  },
  {
    titulo: 'Card 6',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'bg-dark',
    color_text: 'text-light'
  }
]
</script>

<template>
  <h1>Hola mundo</h1>
  <section class="row row-cols-1 row-cols-md-3 g-4">
    <Cards v-for="(item, index) in objCards" :key="index" :titulo="item.titulo" :texto="item.texto" :imagen="item.imagen" :color_card="item.color_card" :color_text="item.color_text" />
  </section>
</template>