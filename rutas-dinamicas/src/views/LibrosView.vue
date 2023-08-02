<script setup>
import { RouterLink } from 'vue-router';

const libros = ['Libro 1', 'Libro 2']
</script>

<template>
    <div>
        <h2>Libros</h2>
        <ul class="nav">
            <li class="nav-item" v-for="item in libros">
                <RouterLink :to="`/libros/${item}`" class="nav-link">{{ item }}</RouterLink>
            </li>
        </ul>
    </div>
</template>