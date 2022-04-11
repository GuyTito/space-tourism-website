<script setup>
import data from '@/composables/data.js'
import { ref, } from 'vue';
import useBackgroundImage from '@/composables/useBackgroundImage.js'
import { useRouter } from 'vue-router';

const destinations = (data['destinations'])
const planet = ref(destinations[0])

const body_classes = 'bg-destination-mob md:bg-destination-tab lg:bg-destination-desk'
const router = useRouter()
const current_route = router.currentRoute.value.name
useBackgroundImage(current_route, 'destination', body_classes)


</script>


<template>
  <div class="mt-[34px] mb-14 text-center">
    <span class="above-h1">
      <span class="text-white/25">01</span>
      Pick your destination
    </span>

    <div class="mt-8 max-w-[170px] mx-auto">
      <img :src="planet.images.png" alt="destination" class="h-[170px] w-[170px]">
    </div>

    <div class="mt-[26px] text-space-blue mx-6">
      <ul class="font-bc space-x-[26px] text-sm ">
        <li class="inline-block "  v-for="item in destinations" :key="item">
          <button @click="planet = item" class="border-b-4 border-style py-2 uppercase" :class="{'border-white text-white' : item.name == planet.name}">{{ item.name }}</button>
        </li>
      </ul>

      <h2 class="mt-5 uppercase text-white">{{ planet.name }}</h2>

      <div class="space-y-8 ">
        <p class="leading-[25px]">{{ planet.description }}</p>

        <div class="max-w-[87%] mx-auto h-px bg-[#383B4B]"></div>

        <div class="flex flex-col space-y-3 uppercase">
          <span class="sh2">AVG. DISTANCE</span>
          <span class="sh1 text-white">{{ planet.distance }}</span>
        </div>

        <div class="flex flex-col space-y-3 uppercase">
          <span class="sh2">Est. travel timeE</span>
          <span class="sh1 text-white">{{ planet.travel }}</span>
        </div>

        <div></div>
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>