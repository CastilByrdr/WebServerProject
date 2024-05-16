<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import LoginBadge from './LoginBadge.vue';


const isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a class="navbar-item" href="">
      <img src="../assets/dumbbell-light-green.png" width="28" height="28">
    </a>

    <a role="button" @click="toggleMenu" :class="{ 'is-active': isActive }" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active': isActive }" id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <RouterLink to="/" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/tracker" class="navbar-item">
        Tracker
      </RouterLink>

      <RouterLink to="/friends" class="navbar-item">
        Friends
      </RouterLink>

      <RouterLink to="/search" class="navbar-item">
        User Search
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Admin
        </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <LoginBadge />
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

    .router-link-exact-active {
        border-bottom: 2px solid #00d1b2;
    }

    .router-link-active {
        background-color: aquamarine;
    }

</style>