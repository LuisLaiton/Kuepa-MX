import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/peliculas',
      name: 'peliculas',
      component: () => import('../views/PeliculasView.vue')
    },
    {
      path: '/libros',
      name: 'libros',
      component: () => import('../views/LibrosView.vue')
    },
    {
      path: '/peliculas/:name',
      name: 'pelicula',
      component: () => import('../views/PeliculaView.vue')
    },
    {
      path: '/libros/:lib',
      name: 'libro',
      component: () => import('../views/LibroView.vue')
    }
  ]
})

export default router
