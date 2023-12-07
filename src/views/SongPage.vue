<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI';

const { fetchSongs, currentSongs } = useAPI()

const route = useRoute()

const song = ref('')

onMounted(async () => {
  await fetchSongs(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
  currentSongs.value = null
})
</script>

<template>
  <main class="min-h-screen bg-gradient-to-b from-purple-900 to-pink-300 font-poppins flex items-center justify-center">
    <div v-if="currentSongs" class="bg-white p-8 rounded-md shadow-lg text-center">
      <h1 class="text-purple-900 text-4xl font-bold mb-4">Artist: {{ currentSongs.artist }}</h1>
      <p class="text-purple-900 text-4xl font-bold mb-4">Title: {{ currentSongs.title }}</p>
      <p class="text-purple-900 text-4xl font-bold mb-4">Album: {{ currentSongs.album }}</p>
      <p class="text-purple-900 text-4xl font-bold mb-4">Genre: {{ currentSongs.genera }}</p>
    </div>
  </main>
</template>