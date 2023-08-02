<script setup>
const libros = [
    {
        nombre: 'Libro 1',
        poster: 'https://placehold.co/600x400',
        estreno: '2/08/2023',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptate facilis commodi laboriosam explicabo ducimus qui reprehenderit deserunt ipsum temporibus nulla a, sequi voluptatem esse quod vel asperiores unde error?',
        calificacion: '5/10'
    },
    {
        nombre: 'Libro 2',
        poster: 'https://placehold.co/600x400',
        estreno: '2/08/2023',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptate facilis commodi laboriosam explicabo ducimus qui reprehenderit deserunt ipsum temporibus nulla a, sequi voluptatem esse quod vel asperiores unde error?',
        calificacion: '7/10'
    }
]
</script>

<template>
    <template v-for="libro in libros">
        <div class="card mb-3" v-if="libro.nombre == $route.params.lib">
            <img :src="libro.poster" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ libro.nombre }}</h5>
                <p class="card-text"></p>
                <p class="card-text">{{ libro.descripcion }} - <small class="text-body-secondary">{{ libro.estreno }}</small></p>
                <h5>{{ libro.calificacion }}</h5>
            </div>
        </div>
    </template>
</template>