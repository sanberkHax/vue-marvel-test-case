<script setup>
import FavoriteIcon from '@/components/icons/FavoriteIcon.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const favoritesCount = computed(() => store.getters['favorites/favoritesCount'])
</script>

<template>
  <button class="favorite-button">
    <FavoriteIcon />
    <div class="favorite-button__badge">
      <span>{{ favoritesCount }}</span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.favorite-button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: relative;
  &__badge {
    position: absolute;
    top: 20px;
    right: -5px;
    border-radius: 100%;
    background-color: white;
    color: black;
    padding: 10px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
