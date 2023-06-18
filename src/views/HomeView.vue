<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ComicItem from '@/components/ComicItem.vue'

const store = useStore()

const comics = computed(() => store.state.comics.items)

store.dispatch('comics/getComics')
</script>

<template>
  <main>
    <ul class="comic-list">
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
.comic-list {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  gap: 2rem;
}
</style>
