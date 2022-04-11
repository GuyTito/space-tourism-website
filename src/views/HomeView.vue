<script setup>
import { RouterLink, useRouter, } from 'vue-router'
import useBackgroundImage from '@/composables/useBackgroundImage.js'

const body_classes = 'bg-home-mob lg:bg-home-desk'
const router = useRouter()
const current_route = router.currentRoute.value.name
useBackgroundImage(current_route, 'home', body_classes)

</script>

<template>
  <div class="lg:mt-[150px] lg:flex justify-between lg:mx-[165px] lg:mb-10">
    <div class="text-center lg:text-left mx-6 md:mx-40 lg:mx-0 space-y-4 md:space-y-6 mt-12 md:mt-[106px] lg:mt-0 lg:max-w-[450px]">
      <span class="text-space-blue above-h1">SO, YOU WANT TO TRAVEL TO</span>
  
      <h1 class="leading-[150px] lg:leading-[172px]">SPACE</h1>
  
      <p class="text-space-blue text-[16px] lg:text-lg leading-6 md:leading-7">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
  
    <div class="mt-20 md:mt-[156px] lg:mt-0 mb-5 md:mb-12 lg:mb-0 text-center h-[246px] max-w-[246px] md:h-[397px] md:max-w-[397px] lg:h-[450px] lg:max-w-[450px] lg:w-[450px] mx-auto lg:mx-0 rounded-full grid place-items-center mix-blend-normal pointer-events-none hover:bg-white/10 transition-all duration-300">      
      <RouterLink to="/destination" class="bg-white text-space-black font-serif text-xl md:text-[32px] rounded-full h-[150px] w-[150px] md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px]  pointer-events-auto">EXPLORE</RouterLink>
    </div>
  </div>
</template>