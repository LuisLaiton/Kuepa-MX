<script setup>
const peliculas = [
    {
        nombre: 'Pelicula 1',
        poster: 'https://placehold.co/600x400',
        estreno: '2/08/2023',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptate facilis commodi laboriosam explicabo ducimus qui reprehenderit deserunt ipsum temporibus nulla a, sequi voluptatem esse quod vel asperiores unde error?',
        calificacion: '5/10'
    },
    {
        nombre: 'Pelicula 2',
        poster: 'https://placehold.co/600x400',
        estreno: '2/08/2023',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptate facilis commodi laboriosam explicabo ducimus qui reprehenderit deserunt ipsum temporibus nulla a, sequi voluptatem esse quod vel asperiores unde error?',
        calificacion: '7/10'
    }
]
</script>

<template>
    <template v-for="pelicula in peliculas">
        <div class="card mb-3" v-if="pelicula.nombre == $route.params.name">
            <img :src="pelicula.poster" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ pelicula.nombre }}</h5>
                <p class="card-text"></p>
                <p class="card-text">{{ pelicula.descripcion }} - <small class="text-body-secondary">{{ pelicula.estreno }}</small></p>
                <h5>{{ pelicula.calificacion }}</h5>
            </div>
        </div>
    </template>
</template>