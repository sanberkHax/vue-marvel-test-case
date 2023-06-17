<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const comics = computed(() => store.state.comics.items)

store.dispatch('comics/getComics')
</script>

<template>
  <main>
    <ul>
      <li v-for="comic in comics" :key="comic.id">
        {{ comic.title }}
        <br />
      </li>
    </ul>
  </main>
</template>

<style lang="scss"></style>
