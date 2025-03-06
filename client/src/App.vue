<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NotificationList from './components/NotificationList.vue';
import SlidingDrawer from './components/SlidingDrawer.vue';
import ShoppingCat from './components/ShoppingCat.vue';
</script>

<template>
   <header>
    <NavBar />
  </header>

  <div class="container body-container">
    <NotificationList />
    <RouterView />
  </div>

  <SlidingDrawer>
    <ShoppingCat />
  </SlidingDrawer>
</template>

<style scoped>
body{
  background-color: aliceblue;
}

.body-container{
  margin-top: 20px;
  background-color: white;
}
</style>
