<script setup lang="ts">
import { ref } from "vue";

const isFetching = ref(false);
const page = ref(1);
const totalPages = ref(1);

const data = ref([]);
const selected = ref(null);
const name = ref("");

async function getAsyncData(lastName) {
    if (name.value !== lastName) {
        name.value = lastName;
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
    }

    // String cleared
    if (!lastName.length) {
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
        return;
    }

    // Reached last page
    if (page.value > totalPages.value) {
        return;
    }

    isFetching.value = true;
    try {
        const _data = await fetch(
            'api/v1/users',
        ).then((response) => response.json());

        data.value = [...data.value, ..._data.results];
        page.value += 1;
        totalPages.value = _data.total_pages;
    } catch (err) {
        console.error(err);
    } finally {
        isFetching.value = false;
    }
}

function getMoreAsyncData() {
    getAsyncData(name.value);
}
</script>

<template>
    <section>
    <o-field label="Find a user by last name">
        <o-autocomplete
            :data="data"
            placeholder="e.g. Ertman"
            field="title"
            :loading="isFetching"
            check-scroll
            open-on-focus
            :debounce="500"
            @input="getAsyncData"
            @select="(option) => (selected = option)"
            @scroll-end="getMoreAsyncData">
            <template v-if="page > totalPages" #footer>
                <span class="ex-text-grey">
                    Thats it! No more users found.
                </span>
            </template>
        </o-autocomplete>
    </o-field>
    <p><b>Selected:</b> {{ selected }}</p>
</section>
</template>
  
<style>
  @import '@oruga-ui/theme-oruga/dist/oruga-full.css';
  .dropdown-menu {
    min-width: 12em;
    @apply bg-white m-0 px-2 shadow-lg rounded-sm z-10;
}
.dropdown-item {
    @apply no-underline px-1 py-2 cursor-pointer;
}
  .ex-text-grey {
    color: grey;
  }
</style>