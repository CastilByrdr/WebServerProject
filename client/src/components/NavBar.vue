<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a class="navbar-item" href="">
      <img src="../assets/dumbbell-light-green.png" width="28" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <RouterLink to="/" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/activity" class="navbar-item">
        Activity
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

        <div class="navbar-dropdown">
          <RouterLink to="/users" class="navbar-item">
            Users
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
          <a class="button is-light, navbar-link">
            Log in
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
             Joseph Ertman
            </a>
            <a class="navbar-item">
              Trunks
            </a>
          </div>
          </div>
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