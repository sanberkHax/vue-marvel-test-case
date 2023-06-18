<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ComicItem from '@/components/ComicItem.vue'

const store = useStore()

const comics = computed(() => store.state.comics.items)
const loading = computed(() => store.state.comics.loading)

if (comics.value.length === 0) {
  store.dispatch('comics/getComics')
}
</script>

<template>
  <main>
    <h1 v-if="loading" class="loading">Loading...</h1>

    <ul v-if="comics" class="comic-list">
      <ComicItem
        v-for="comic in comics"
        :id="comic.id"
        :key="comic.id"
        :title="comic.title"
        :creators="comic.creators.items"
        :thumbnail="comic.thumbnail"
        :description="comic.description"
      />
    </ul>
  </main>
</template>

<style lang="scss">
.loading {
  text-align: center;
}
.comic-list {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  gap: 2rem;
}
</style>
