 
<template>
  <nav class="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white lg:mb-24 mb-14">
    <RouterLink to="/">
    <div class="flex items-center scale-100 space-x-2 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
   <img class="size-12" src="https://files.catbox.moe/wcq14s.png" alt="">   <h2>RoomRise</h2> 
    </div>
  </RouterLink>
    <ul class="hidden items-center justify-between gap-10 md:flex">
      <li class="group flex cursor-pointer flex-col">
        <RouterLink to="/">Home<span class="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></RouterLink>
      </li>
      <li class="group flex cursor-pointer flex-col">
        <RouterLink to="/services">Services<span class="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></RouterLink>
      </li>
      <li class="group flex cursor-pointer flex-col">
        <RouterLink to="/about">About<span class="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></RouterLink>
      </li>
      <li class="group flex cursor-pointer flex-col">
        <RouterLink to="/contact">Contact<span class="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></RouterLink>
      </li>
    </ul>
    <div @click="toggleDropDown" class="relative flex transition-transform md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <ul v-if="dropDownState" class="z-10 gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
        <li @click="toggleDropDown" class="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-sky-600">Home</li>
        <li @click="toggleDropDown" class="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">Services</li>
        <li @click="toggleDropDown" class="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">About</li>
        <li @click="toggleDropDown" class="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">Contact</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavbarView",
  data() {
    return {
      dropDownState: false,
    };
  },
  methods: {
    toggleDropDown() {
      this.dropDownState = !this.dropDownState;
    },
  },
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
/* Your scoped styles here */
</style>
