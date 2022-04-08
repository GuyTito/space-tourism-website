<script setup>
import { ref, watch } from 'vue';
import { RouterLink, } from 'vue-router'

const menu = ['home','destination', 'crew', 'technology']

const open = ref(false)

watch(()=> {
  if (open.value) {
    document.documentElement.style.overflow = 'hidden'
    return
  }
  document.documentElement.style.overflow = 'auto'
})

</script>


<template>
  <header class="mx-6 flex justify-between items-center mt-6">
    <RouterLink to="/">
      <img src="assets/shared/logo.svg" alt="logo">
    </RouterLink>

    <button @click="open = true">
      <img src="assets/shared/icon-hamburger.svg" alt="menu">
    </button>
  </header>

  <Teleport to="body">
    <Transition>
      <div v-if="open" @click="open = false" class="fixed inset-0 w-full h-full flex justify-end">
        <div class="w-[68.5%] bg-white/[0.04] backdrop-blur-[81.5px] h-full" >
          <div class="flex justify-end items-center mt-[34px] mr-6 mb-[60px]">
            <button @click="open = false">
              <img src="assets/shared/icon-close.svg" alt="close">
            </button>
          </div>
  
          <div class="">
            <ul v-for="item in menu" :key="item" class="font-bc text-[16px] tracking-[2.7px] leading-[19.2px] uppercase">
              <li class="border-r-4 border-transparent hover:border-white my-3">
                <RouterLink :to="item" class="w-full py-2 pl-8 inline-block"><span class="font-bold">0{{ menu.indexOf(item) }}</span> {{item}}</RouterLink> 
              </li>
            </ul>
          </div>
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

</style>