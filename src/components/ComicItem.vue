<script setup>
import { computed, watch } from 'vue'
import FavoriteButton from '@/components/FavoriteButton.vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'

const store = useStore()

const props = defineProps({
  id: Number,
  title: String,
  creators: Array,
  description: String,
  thumbnail: Object
})

const isFavorite = computed(() => store.state.favorites.items.find((i) => i.id === props.id))

watch(isFavorite, () => {
  console.log(isFavorite.value)
})
const imageURL = computed(() => props.thumbnail.path + '.' + props.thumbnail.extension)
</script>

<template>
  <li class="comic-item">
    <RouterLink :to="{ name: 'comics', params: { id: id } }">
      <img :src="imageURL" alt="comic thumbnail" class="thumbnail" />
    </RouterLink>
    <FavoriteButton :isActive="isFavorite" :id="id" />
    <h1 class="comic-item__title">{{ title }}</h1>
    <template v-for="(creator, i) in creators" :key="i">
      {{ creator.name.substring(0, creator.name.indexOf(' ')) }},
    </template>
    <p class="comic-item__description">{{ description }}</p>
  </li>
</template>

<style lang="scss" scoped>
.comic-item {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  text-align: center;
  gap: 1rem;
  align-items: center;
  position: relative;
  a {
    color: black;
    text-decoration: none;
  }
  &__title {
    font-size: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .thumbnail {
    &:hover {
      scale: 1.09;
      transition: 0.2s ease-in-out;
    }
    width: 200px;
    height: 300px;
  }
}
</style>
