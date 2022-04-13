<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />

  <RouterView />

  <footer class="mt-10 mb-2 text-center text-[10px] text-white/60">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="underline hover:font-bold">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/GuyTito/space-tourism-website"  target="_blank" class="underline hover:font-bold">GuyTito</a>.
  </footer>
</template>


<style></style>
