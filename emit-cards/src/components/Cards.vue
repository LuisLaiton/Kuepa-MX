<script setup>
defineProps({
    producto: String,
    descripcion: String,
    imagen: String,
    color_card: String,
    color_text: {
        type: String,
        default: 'text-dark'
    }
})

const emit = defineEmits(['añadirFavorito'])
</script>

<template>
    <div class="col">
        <div class="card" :class="color_card">
            <img :src="imagen" class="card-img-top" :alt="producto">
            <div class="card-body" :class="color_text">
                <h5 class="card-title">{{ producto }}</h5>
                <p class="card-text">{{ descripcion }}</p>
            </div>
            <div class="d-grid">
                <button @click="emit('añadirFavorito', producto)" class="btn btn-outline-primary" type="button">
                    Añadir a favoritos
                </button>
            </div>
        </div>
    </div>
</template>