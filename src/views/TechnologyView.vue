<script setup>
import data from '@/composables/data.js'
import { useRouter } from 'vue-router';
import useBackgroundImage from '@/composables/useBackgroundImage.js'

const technologies = (data['technology'])
// const tech = ref(technology[0])

const body_classes = 'bg-tech-mob'
const router = useRouter()
const current_route = router.currentRoute.value.name
useBackgroundImage(current_route, 'technology', body_classes)
</script>


<template>
  <div class="mt-[34px] mb-14 text-center">
    <span class="above-h1">
      <span class="text-white/25">02</span>
      SPACE LAUNCH 101
    </span>

    <!-- <div class="mt-8 max-w-[170px] mx-auto">
      <img :src="planet.images.png" alt="destination" class="h-[170px] w-[170px]">
    </div> -->
  </div>
</template>


<style lang="scss" scoped>

</style>