<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NotificationList from './components/NotificationList.vue';
import SlidingDrawer from './components/SlidingDrawer.vue';
import ShoppingCat from './components/ShoppingCat.vue';
import  { ref } from 'vue';

const isShoppingCartOpen = ref(false);
</script>

<template>
   <header>
    <NavBar v-model:is-Shopping-Cart-Open="isShoppingCartOpen" />
  </header>

  <div class="container body-container">
    <NotificationList />
    <RouterView />
  </div>

  <SlidingDrawer :isOpen="isShoppingCartOpen">
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
