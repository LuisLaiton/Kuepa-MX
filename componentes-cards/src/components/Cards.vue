<script setup>
defineProps({
    titulo: String,
    texto: String,
    imagen: String,
    color_card: String,
    color_text:{
        type: String,
        default: 'text-dark'
    }
})
</script>

<template>
    <div class="col">
        <div class="card" :class="color_card">
            <img :src="imagen" class="card-img-top" :alt="titulo">
            <div class="card-body" :class="color_text">
                <h5 class="card-title">{{ titulo }}</h5>
                <p class="card-text">{{ texto }}</p>
            </div>
        </div>
    </div>
</template>