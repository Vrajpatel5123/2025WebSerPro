<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router'

// import {ref, reactive} from 'vue'
// the ref function is the core of vue
// Reactive takes every varabiles in your object and creates a new object.
// It actually calling a setter function. (calling a getter function and gets the function and return the function)


const isActive = ref(false)

const props = defineProps<{
    isShoppingCartOpen?: boolean
}>()

const event = defineEmits<{
    "update:isShoppingCartOpen": [boolean]
}>()


</script>

<template>
<nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
  <div class="navbar-brand">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" />
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
    :class="{'is-active': isActive}" @click="isActive = !isActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div  class="navbar-menu" :class="{'is-active' : isActive}">
    <div class="navbar-start">


      <RouterLink to="products" class="navbar-item">
        Product
      </RouterLink>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item is-selected">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <button class="button is-light" :class="{ 'is-active': props.isShoppingCartOpen }"@click="event('update:isShoppingCartOpen', !props.isShoppingCartOpen)">
                <span class="icon"> <i class="fas fa-shopping-cart"></i></span>
        </button>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</nav>
</template>

<style scoped>

</style>