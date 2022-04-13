<script setup>
import data from '@/composables/data.js'
import { useRouter } from 'vue-router';
import useBackgroundImage from '@/composables/useBackgroundImage.js'
import { ref } from 'vue';

const body_classes = 'bg-tech-mob'
const router = useRouter()
const current_route = router.currentRoute.value.name
useBackgroundImage(current_route, 'technology', body_classes)

const technologies = (data['technology'])
const current_tech = ref(technologies[0])
</script>


<template>
  <div class="mt-[34px] mb-14 text-center overflow-hidden">
    <h1 class="page-h">
      <span class="text-white/25">02</span>
      SPACE LAUNCH 101
    </h1>
 
    <div class="mt-8 flex h-[170px]">
      <img :src="current_tech.images.landscape"  alt="tech" class=" w-full h-full object-cover">
    </div>

    <ul class="mt-8 space-x-4">
      <li v-for="tech in technologies" :key="tech.name" @click="current_tech = tech" class="inline-block h-10 w-10 rounded-full  border border-white/25" :class="{'bg-white text-space-black' : tech.name == current_tech.name}">
        <button class="flex items-center justify-center w-full h-full">
          {{ technologies.indexOf(tech) + 1 }}
        </button>
      </li>
    </ul>

    <div class="mt-7 mx-6">
      <h2 class="flex flex-col">
        <span class="sh2 text-space-blue">THE TERMINOLOGY…</span>
        <span class="font-serif mt-2 text-2xl leading-7 uppercase">{{ current_tech.name }}</span>
      </h2>

      <p class="mt-4 text-space-blue">
        {{ current_tech.description }}
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>