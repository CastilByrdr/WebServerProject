<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isLogin=ref(false);
let isAdmin=ref(false);

const isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

function toggleLogin() {
  isLogin.value = !isLogin.value;
}

function toggleAdmin() {
  isAdmin.value = !isAdmin.value;
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

      <RouterLink to="/tracker" class="navbar-item"  v-if="isLogin || isAdmin">
        Tracker
      </RouterLink>

      <RouterLink to="/log" class="navbar-item"  v-else>
        Tracker
      </RouterLink>


      <RouterLink to="/friends" class="navbar-item" v-if="isLogin || isAdmin">
        Friends
      </RouterLink>

      <RouterLink to="/log" class="navbar-item" v-else>
        Friends
      </RouterLink>

      <RouterLink to="/search" class="navbar-item" v-if="isLogin || isAdmin">
        User Search
      </RouterLink>

      <RouterLink to="/log" class="navbar-item" v-else>
        User Search
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Admin
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/users" class="navbar-item"  v-if="isAdmin">
            Users
          </RouterLink>

          <RouterLink to="/admin" class="navbar-item"  v-else>
            Users
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" v-if="!(isLogin || isAdmin)">
            <strong>Sign up</strong>
          </a>
          <div class="avatar" v-else-if="isAdmin">
            <img src="../assets/Agent_Joseph.png">
            <strong>Joseph Ertman</strong>
          </div>
          <div class="avatar" v-else>
            <img src="../assets/Trunks_anime_profile.png">
            <strong>Trunks Brief</strong>
          </div>
          <div class="navbar-item has-dropdown is-hoverable" v-if="!(isLogin || isAdmin)">
          <a class="button is-light, navbar-link">
            Log in
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" role="button" @click="toggleAdmin">
             Joseph Ertman
            </a>
            <a class="navbar-item" role="button" @click="toggleLogin">
              Trunks Brief
            </a>
          </div>
          </div>
          <a class="button is-light" @click="toggleAdmin" v-else-if="isAdmin">
            Log out
          </a>
          <a class="button is-light" @click="toggleLogin" v-else=>
            Log out
          </a>
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