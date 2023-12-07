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
  <main class="min-h-screen bg-gradient-to-b from-purple-900 to-pink-300 font-poppins">
    <div v-if="currentSongs" class="flex flex-col items-center justify-center gap-6">
      <h1 class="text-yellow-500 text-3xl font-bold">Artist: {{ currentSongs.artist }}</h1>
      <p class="text-white text-5xl font-bold">Title: {{ currentSongs.title }}</p>
      <p class="text-yellow-500 text-4xl font-bold">Album: {{ currentSongs.album }}</p>
      <p class="text-white text-3xl font-bold">Genera: {{ currentSongs.genera }}</p>
    </div>
  </main>
</template>