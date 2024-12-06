<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="topnav">
        <RouterLink to="/"><img id="logo" src="../assets/better netflix.png"></RouterLink>
        <RouterLink to="/login" class="right">Sign In</RouterLink>
        <RouterLink to="/register" class="right">Register</RouterLink>
    </div>
</template>

<style scoped></style>