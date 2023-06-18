<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'

const store = useStore()
const route = useRoute()
const comicId = computed(() => route.params.id)
const comic = computed(() => store.getters['comics/getComic'](comicId.value))

const imageURL = computed(() => comic.value.thumbnail.path + '.' + comic.value.thumbnail.extension)
</script>

<template>
  <main class="comic-details">
    <RouterLink to="/" class="back-btn"> Back </RouterLink>
    <section class="comic-details__container">
      <img :src="imageURL" alt="comic thumbnail" class="thumbnail" />
      <div class="comic-details__info">
        <h1 class="comic-details__title">{{ comic.title }}</h1>
        <div>
          <h2>Issue:</h2>
          <p>{{ comic.issueNumber }}</p>
        </div>
        <div>
          <h2 :if="comic.writers">Writers:</h2>
          <template v-for="(creator, i) in comic.creators.items" :key="i">
            {{ creator.name.substring(0, creator.name.indexOf(' ')) }},
          </template>
        </div>
        <div>
          <h2 :if="comic.description">Description:</h2>
          <p class="comic-details__description">{{ comic.description }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.comic-details {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @include md {
      width: 50%;
    }
  }
  &__title {
    text-align: center;
  }
  &__container {
    padding: 2rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @include md {
      flex-direction: row;
    }
  }
}
.thumbnail {
  width: 300px;
}

.back-btn {
  font-size: 2rem;
  color: black;
  text-decoration: none;
}
</style>
