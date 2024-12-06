<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);

onMounted(async () => {
    response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
})
</script>

<template>
    <h1>
        Featured movies
    </h1>
    <div class="flexbox-container">
        <!-- TODO: randomize the movies -->
        <div v-if="response" class="movie-list">
            <div v-for="movie in response.data.results.slice(0, 5)" :key="movie.id" class="flexbox-item"
                @click="getMovieDetails(movie.id)">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
                <p class="movie-title">{{ movie.title }}</p>
            </div>
        </div>
    </div>

    <div class="movie-gallery">

    </div>
</template>

<style scoped></style>