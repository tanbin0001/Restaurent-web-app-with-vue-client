<template>
  <div className=" lg:flex     lg:my-20">
    <div className="  lg:max-w-[500px]    ">
      <img
        className="rounded-lg  lg:w-[900px] lg:h-[400px]"
        :src="room ? room.image : 'https://source.unsplash.com/350x350/?men'"
        alt="card navigate ui"
      />
 
       
    </div>
    <div
      className="bg-white space-y-7   lg:w-[900px] lg:h-[400px] rounded-tr-lg rounded-br-lg  p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]"
    >
      <div className="space-y-1">
        <h2
          className="text-3xl font-medium text-gray-700   font-sans"
        >
        {{ room ? room.location : 'Location not available' }}
        </h2>
      
      </div>
      <div className=" flex  ">
       
      
          <p className="   text-gray-700 text-lg">   {{ room ? room.bedrooms : ' not available' }} bedrooms.</p>
        
   
          <p className="text-gray-700 text-lg font-sans"> {{ room ? room.baths: ' not available' }} baths.</p>
          <p className="text-gray-700 text-lg font-sans"> {{ room ? room.guests: ' not available' }} guests. </p>
         
      
      </div>
      <div>
        <p> {{ room ? room.aboutThisSpace : '  not available' }}</p>
      </div>
      <div>
        <button
          className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-black py-3 px-6 rounded-full"
        >
          Reserve now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "RoomDetails",
  data() {
    return {
      rooms: [],
      room: null,

      roomId: null,
    };
  },
  mounted() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const roomId = this.$route.params.id; // Access the id from $route.params
        console.log("Room ID:", roomId);

        const response = await fetch(
          "https://raw.githubusercontent.com/tanbin0001/airbnb-data/main/data/rooms.json"
        );
        const data = await response.json();
        this.rooms = data;
        this.room = this.rooms.find(room => room.id == roomId);
    
    if (!this.room) {
      console.error('Room not found');
      // Optionally, you can redirect to a not found page or handle it in another way
    }

    console.log('Room details:', this.room);

        console.log(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    } 
  },
};
</script>

<style scoped>
/* Your component styles here */
</style>
