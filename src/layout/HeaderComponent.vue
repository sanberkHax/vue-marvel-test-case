<script setup>
import FavoriteButton from '@/components/FavoriteButton.vue'
</script>

<template>
  <header class="header">
    <img class="header__logo" src="@/assets/marvel_logo.png" alt="" />
    <FavoriteButton />
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  width: 100%;
  background-color: $primary-bg;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__logo {
    width: 100px;
  }
}
</style>
