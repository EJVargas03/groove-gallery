<script setup>
import axios from 'axios'
import { ref } from 'vue'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})


const songArtist = ref('')
const songTitle = ref('')
const songAlbum = ref('')
const songGenera = ref('')
  
const addSong = async () => {
  const { data } = await api.post('/api/songs', {
    artist: songArtist.value,
    title: songTitle.value,
    album: songAlbum.value,
    genera: songGenera.value
  })
}
</script>

<template >
  <main class="min-h-screen bg-gradient-to-b from-purple-900 to-pink-300 font-poppins flex items-center ">
    <form class="login-form" @submit.prevent="addSong">
      <input v-model="songArtist" type="text" placeholder="artist name" />
      <input v-model="songTitle" type="text" placeholder="song title" />
      <input v-model="songAlbum" type="text" placeholder="album name" />
      <input v-model="songGenera" type="text" placeholder="genera" />
      <button type="submit" class="bg-green-500 px-4 py-2">submit</button>
    </form>
  </main>
</template>

<style scoped lang="postcss">
  .login-form {
    @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
    & input {
      @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
    }
  }
</style>