<script setup>
import data from '@/composables/data.js'
import { useRouter } from 'vue-router';
import useBackgroundImage from '@/composables/useBackgroundImage.js'
import { ref } from 'vue';
import { computed } from '@vue/reactivity';

const body_classes = 'bg-tech-mob'
const router = useRouter()
const current_route = router.currentRoute.value.name
useBackgroundImage(current_route, 'technology', body_classes)

const technologies = (data['technology'])
// const tech = ref(technology[0])
const craft = computed((name) => {
  console.log(name);
  return name.toLowerCase().split(' ').join('')
})
</script>


<template>
  <div class="mt-[34px] mb-14 text-center">
    <span class="above-h1">
      <span class="text-white/25">02</span>
      SPACE LAUNCH 101
    </span>
 
    <div class="mt-8 flex">
      <div v-for="tech in technologies" :key="tech.name" class="h-[170px] w-full">
        <img :src="tech.images.landscape"  alt="tech" class=" w-full h-full object-cover">
      </div>
    </div>

    <ul class="mt-8 space-x-4">
      <li v-for="tech in technologies" :key="tech.name" class="inline-block h-10 w-10 rounded-full  border border-white/25">
        <router-link :to="craft" class="flex items-center justify-center w-full h-full">
          {{ technologies.indexOf(tech) + 1 }}
        </router-link>
      </li>
    </ul>

  </div>
</template>


<style lang="scss" scoped>

</style>