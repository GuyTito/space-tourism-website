<script setup>
import { ref, watchEffect } from 'vue';
import { RouterLink, } from 'vue-router'

const menu = ['home','destination', 'technology']

const open = ref(false)

watchEffect(()=> {
  if (open.value) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = 'auto'
})

</script>


<template>
  <header class="mx-6 md:mx-0 md:ml-12 mt-6 md:mt-0 lg:mt-10 flex justify-between items-center">
    <RouterLink to="/">
      <img src="/assets/shared/logo.svg" alt="logo">
    </RouterLink>

    <button @click="open = true" class="md:hidden">
      <img src="/assets/shared/icon-hamburger.svg" alt="menu">
    </button>

    <nav class="font-bc text-sm lg:text-[16px] leading-[17px] tracking-[2.36px] uppercase  bg-white/10 mix-blend-normal px-12 lg:px-0 lg:pl-[123px] lg:pr-[167px] hidden md:block">
      <ul class="space-x-[37px] lg:space-x-12">
        <li v-for="item in menu" :key="item" class="inline-block">
          <RouterLink :to="{name: item}" class=" md:py-10 border-style border-b-4 inline-block">
            <span class="font-bold">0{{ menu.indexOf(item) }}</span> {{item}}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- mobile menu -->
  <Teleport to="body">
    <Transition>
      <div v-if="open" @click="open = false" class="fixed inset-0 w-full h-full flex justify-end">
        <div class="w-[68.5%] bg-white/[0.04] backdrop-blur-[81.5px] h-full" >
          <div class="flex justify-end items-center mt-[34px] mr-6 mb-[60px]">
            <button @click="open = false">
              <img src="/assets/shared/icon-close.svg" alt="close">
            </button>
          </div>
  
          <ul class="font-bc text-[16px] tracking-[2.7px] leading-[19.2px] uppercase">
            <li v-for="item in menu" :key="item">
              <RouterLink :to="{name: item}" class="w-full py-2 pl-8 inline-block my-3 border-r-4 border-style">
                <span class="font-bold">0{{ menu.indexOf(item) }}</span> {{item}}
              </RouterLink> 
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>


<!-- <style scoped> -->
<style lang="postcss" scoped>
.v-enter-active {
  @apply transition-all duration-300 
}
.v-leave-active {
  @apply transition-all duration-200 ease-in 
}

.v-enter-from,
.v-leave-to {
  @apply translate-x-full
}

.router-link-exact-active{
  @apply border-white
}

</style>