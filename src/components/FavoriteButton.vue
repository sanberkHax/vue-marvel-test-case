<script setup>
import FavoriteIcon from '@/components/FavoriteIcon.vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  isActive: Boolean,
  id: Number
})

const handleClick = () => {
  store.dispatch('favorites/addToFavorites', props.id)
}
</script>

<template>
  <button @click="handleClick" class="favorite-button">
    <FavoriteIcon :isActive="isActive" />
  </button>
</template>

<style lang="scss" scoped>
.favorite-button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
