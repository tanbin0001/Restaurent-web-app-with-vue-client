<template>
  <div class="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
    <div class="bg-[#f3f9fc] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
    <div class="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
      <h1 class="text-lg md:text-2xl lg:text-[40px] font-bold">50+ Beautiful rooms inspiration</h1>
      <p class="text-[#616161] text-xs md:text-lg">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
      <button class="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#2f9fb8]" @click="exploreMore">Explore More</button>
    </div>
    <div class="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
      <!-- arrow -->
      <button @click="nextSlider" class="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
        <svg viewBox="0 0 1024 1024" class="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
          <g stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </g>
        </svg>
      </button>
      <!-- slider container -->
      <div class="ease-linear duration-300 flex gap-[2%]" :style="{ transform: `translateX(-${currentSlider * 52}%)` }">
        <!-- sliders -->
        <div v-for="(slide, index) in sliders" :key="index" :class="{ 'h-[310px] md:h-[310px] lg:h-[580px]': currentSlider === index, 'h-[260px] md:h-[280px] lg:h-[480px]': currentSlider !== index }" class="min-w-[50%] bg-black/30 relative duration-200">
          <img :src="slide.img" class="w-full h-full" :alt="slide.tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlider: 0,
      sliders: [
        { img: "https://source.unsplash.com/600x600/?bedroom", tags: "Room" },
        { img: "https://source.unsplash.com/600x600/?room", tags: "Room" },
        { img: "https://source.unsplash.com/600x600/?livingrooms", tags: "Room" },
        { img: "https://source.unsplash.com/600x600/?livingroom", tags: "Room" },
        { img: "https://source.unsplash.com/600x600/?bedrooms", tags: "Room" },
      ],
    };
  },
  methods: {
    nextSlider() {
      this.currentSlider = (this.currentSlider === this.sliders.length - 1) ? 0 : this.currentSlider + 1;
    },
    exploreMore() {
      // Add your exploration logic here
      console.log("Explore more clicked!");
    }
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
