<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI';

const { fetchSong, currentSong } = useAPI()


const route = useRoute()

const song = ref('')
onMounted(async () => {
  await fetchSong(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
 currentSong.value = null
})

</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-purple-900 to-pink-300 font-poppins"
  >
    <div
      v-if="currentSong"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img class="p-8 h-64 w-64"
        :src="currentSong.image"
        :alt="currentSong.name"
      />
      <h1 class="text-white-800 text-6xl font-bold">
        {{ currentSong.name }}
      </h1>
      
    </div>
  </main>
</template>