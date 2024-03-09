<script  >
import { RouterLink, RouterView } from "vue-router";

import NavbarView from '@/components/NavbarView.vue' ;

export default {
  name:'App',
  components: {
    NavbarView
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto">
  <header>
       
      <NavbarView />
    </header>
    
    <RouterView />
  </div>
</template>

<style scoped></style>
