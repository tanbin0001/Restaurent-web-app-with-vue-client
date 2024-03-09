<template>
    <div class="flex  items-center">
      <div class="max-w-96  space-y-2">
        <p class="font-bold font-serif">DISCOVER OUR ROOMS</p>
        <h3 class="text-xl">EXPLORE ROOMS & SUITES</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis</h3>
      </div>
      <div class="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
        <div class="absolute w-full h-full flex items-center justify-between z-10 px-5">
          <!-- arrow left -->
          <button @click="prevSlider" class="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
            <svg viewBox="0 0 1024 1024" class="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
              </g>
            </svg>
          </button>
          <!-- arrow right -->
          <button @click="nextSlider" class="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
            <svg viewBox="0 0 1024 1024" class="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
              <g stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
              </g>
            </svg>
          </button>
        </div>
        <!-- slider container -->
        <div class="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center" :style="{ transform: `translateX(-${currentSlider * 50}%)` }">
          <!-- sliders -->



          <div v-for="(slide, index) in sliderImages" :key="index" :class="{ 'h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]': currentSlider === index, 'h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40': currentSlider !== index }" class="min-w-[50%] relative duration-200" style="perspective: 200px;">
         


 


            


            <div className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
          <div className="flex justify-center w-full h-48 lg:h-[280px]  ">
              <div className="flex justify-between items-center left-4 right-4 top-4  ">
                  <div className="flex items-center">
                  
                  </div>
                  
              </div>
              <img className="rounded-lg bg-black/40 w-full h-full"  :src="slide.img"  alt="card navigate ui" />
          </div>
          <div className="text-start w-[85%] mx-auto font-semibold space-y-2">
              <h6 className="text-sm md:text-base lg:text-lg">{{ slide.location }}</h6>
              <p className="text-gray-400 text-xs md:text-sm font-semibold">$ {{ slide.price }} night</p>
              <p className="text-gray-400 text-xs md:text-sm font-semibold">✯ {{ slide.reviews }} </p>
          </div>
         
      </div>
        
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const currentSlider = ref(0);
      const sliderImages = [
      { img: "https://source.unsplash.com/600x600/?bedroom", location: "Murbad, India"  ,price:"2000", reviews: "2"},
      { img: "https://source.unsplash.com/600x600/?room", location: "Thung Samo, Thailand" ,price:"1000",reviews: "5"},
      { img: "https://source.unsplash.com/600x600/?livingrooms", location: "Kuta Utara, Indonesia" ,price:"152",reviews: "4"},
      { img: "https://source.unsplash.com/600x600/?livingroom", location: "Faraway City, Distant Land" ,price:"89",reviews: "4.5"},
      { img: "https://source.unsplash.com/600x600/?bedrooms", location: "Dreamland, Fantasy World" ,price:"500",reviews: "4.9"}
    ];
  
      const prevSlider = () => {
        currentSlider.value = currentSlider.value === 0 ? sliderImages.length - 1 : currentSlider.value - 1;
      };
  
      const nextSlider = () => {
        currentSlider.value = currentSlider.value === sliderImages.length - 1 ? 0 : currentSlider.value + 1;
      };
  
      return {
        currentSlider,
        sliderImages,
        prevSlider,
        nextSlider
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  