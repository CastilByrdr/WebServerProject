<script steup lang="ts">
import { getUsers, type User } from '../model/users';
import { ref } from "vue";
const users = ref([] as User[])
getUsers()
const fields = [
      'ID','First Name','Last Name','Email'
    ]
const Data = [users]
export default {
  name: 'TableComponent',
  props:{
      // 
      Data:{
          type: Array,
      },
      fields:{
          type: Array,
      }
  }, 
}
</script>
<template>
  <main class="hero">
    <div class="hero-body">
    <div class="add">
      <button class="button is-primary">
        Add User
      </button>
    </div>
    <table class="table is-bordered is-striped is-hoverable is-fullwidth" id="users" >
      <thead>
      <tr>
        <!-- loop through each value of the fields to get the table header -->
        <th  v-for="field in fields" :key='field' @click="sortTable(field)" > 
          {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
      </tr>
    </thead>
    <tbody>
        <!-- Loop through the list get the each student data -->
        <tr v-for="item in filteredList" :key='item'>
        <td v-for="field in fields" :key='field'>{{item[field]}}</td>
      </tr>
    </tbody>
  </table> 
    </div>
  </main>
</template>
