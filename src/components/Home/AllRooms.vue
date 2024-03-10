<template>
  <div>
   <div class="grid grid-cols-4 gap-3">
    <div v-for="(room, index) in rooms" :key="index" class="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6  mx-auto bg-white">
          <div class="flex justify-center w-full h-48 lg:h-[280px] relative">
              <div class="flex justify-between items-center left-4 right-4 top-4 absolute">
             
              </div>
              <img class="rounded-lg bg-black/40 w-full h-full" :src="room.image" :alt="`Image of ${room.location}`" />
          </div>
          <div class="te w-[85%] mx-auto font-semibold space-y-2">
              <h6 class="text-xs md:text-base ">{{ room.location }}</h6>
              <p class="text-gray-500 text-xs md:text-sm font-semibold">{{ room.dateRange }}</p>
              <p class=" text-sm md:text-sm text-gray-500 "><span class="font-bold text-black">${{ room.price }}</span> night</p>
          </div>
          <!-- <div class="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
              <button class="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
          </div> -->
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'AllRooms',
  data() {
    return {
      rooms: []
    };
  },
  mounted() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/tanbin0001/airbnb-data/main/data/rooms.json');
        const data = await response.json();
        this.rooms = data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    }
  }
};
</script>

<style scoped>
</style>
