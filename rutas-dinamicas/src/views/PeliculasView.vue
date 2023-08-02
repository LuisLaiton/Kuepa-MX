<script setup>
import { RouterLink } from 'vue-router';

const peliculas = ['Pelicula 1', 'Pelicula 2']
</script>

<template>
    <div>
        <h2>Peliculas</h2>
        <ul class="nav">
            <li class="nav-item" v-for="item in peliculas">
                <RouterLink :to="`/peliculas/${item}`" class="nav-link">{{ item }}</RouterLink>
            </li>
        </ul>
    </div>
</template>