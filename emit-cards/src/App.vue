<script setup>
import { ref } from 'vue';
import Cards from './components/Cards.vue';

const objCards = [
  {
    producto: 'Card 1',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-primary',
    color_text: 'text-primary'
  },
  {
    producto: 'Card 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-success',
    color_text: 'text-success'
  },
  {
    producto: 'Card 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-danger',
    color_text: 'text-danger'
  },
  {
    producto: 'Card 4',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-warning'
  },
  {
    producto: 'Card 5',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'border-info',
    color_text: 'text-info'
  },
  {
    producto: 'Card 6',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus vero velit similique quisquam, necessitatibus hic repellendus temporibus qui quaerat minima cumque asperiores nam reprehenderit ipsam. Aliquam iusto veniam nobis?',
    imagen: 'https://placehold.co/600x400',
    color_card: 'bg-dark',
    color_text: 'text-light'
  }
]
const favoritos = ref([])
const añadirFavorito = (producto) => {
  if(!favoritos.value.includes(producto)) {
    favoritos.value.push(producto)
  } else {
    alert('El producto ya se encuentra en la lista')
  }
}
</script>

<template>
  <h3>Productos favoritos</h3>
  <ul class="list-group mx-auto my-5 col-6">
    <li class="list-group-item" v-for="(item, index) in favoritos">
      {{ item }}
    </li>
  </ul>
  <section class="row row-cols-1 row-cols-md-3 g-4">
    <Cards 
      v-for="(item, index) in objCards"
      :key="index"
      :producto="item.producto"
      :descripcion="item.descripcion"
      :imagen="item.imagen"
      :color_card="item.color_card"
      :color_text="item.color_text"
      @añadirFavorito="añadirFavorito"
    />
  </section>
</template>