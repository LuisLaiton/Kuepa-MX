<script setup>
defineProps({
    nombre: String,
    apellido: String,
    edad: Number,
    email: String,
    password: String,
    intereses: Array,
    esAdmin: Boolean
})
const emit = defineEmits(['cambiarFavorito'])
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ nombre }} - {{ apellido }}</h5>
            <p>Edad: {{ edad }}</p>
            <p>{{ email }} - {{ password }}</p>
            <ul>
                <li v-for="item in intereses">{{ item }}</li>
            </ul>
            <button @click="emit('cambiarFavorito', nombre)" class="btn btn-outline-primary">
                Favorito
            </button>
        </div>
    </div>
</template>