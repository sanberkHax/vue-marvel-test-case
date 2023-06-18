<script setup>
import FavoriteIcon from '@/components/FavoriteIcon.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const favoritesCount = computed(() => store.getters['favorites/favoritesCount'])
</script>

<template>
  <header class="header">
    <img class="header__logo" src="@/assets/marvel_logo.png" alt="" />
    <button class="header__favorites">
      <FavoriteIcon :isActive="true" />
      <div class="header__favorites__badge">
        <span>{{ favoritesCount }}</span>
      </div>
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  width: 100%;
  background-color: $primary-bg;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  justify-content: space-between;
  &__logo {
    width: 100px;
  }
  &__favorites {
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: relative;
    &__badge {
      position: absolute;
      top: 20px;
      right: 0;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
