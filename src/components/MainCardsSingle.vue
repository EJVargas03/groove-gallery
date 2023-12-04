<script setup>
    import { ref } from 'vue'

    import useAPI from '@/composables/useAPI'

    const selectCard = () => {
        console.log(`${props.songs.name} selected`)
    }

    const props = defineProps({
        character: {
            type: Object,
            required: true,
            default: () => {
                return {
                    createdAt: '2020-01-01',
                    songId: '123',
                    name: 'John Doe',
                    image: 'https://www.example.com',
                    updatedAt: '2022-01-01',
                }
            },    
        },
    })
</script>

<template>
  <RouterLink v-if="props.songs.songId" :to="`/api/songs/${props.songs.songId}`">
  <div class="card" @click="selectCard">
    <div class="card-image">
      <img :src="props.sogns.image" alt="" srcset="" />
    </div>
    <div class="card-details">
      <p class="card-details-name font-poppins">{{ props.songs.name }}</p>
      <p class="card-details-artist font-poppins">{{ props.songs.artist }}</p>
      <p class="card-details-album font-poppins">{{ props.songs.album }}</p>  
      <p class="card-details-genera font-poppins">"{{ props.songs.genera }}"</p>  
    </div>
  </div>
</RouterLink>
</template>

<style scoped lang="postcss">
    .card {
        @apply cursor-pointer overflow-hidden rounded-md bg-orange-300 p-8 shadow-md
        transition duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-900;
        &-image {
            img {
                @apply mx-auto rounded-full object-contain;
            }
        }
        &-details {
            @apply flex flex-col gap-2 pt-6 text-center;
            &-name {
                @apply text-3xl font-thin tracking-wide text-orange-800;
            }
            &-artist {
                @apply -mt-2 text-xs font-bold text-orange-600;
            }
            &-album {
                @apply text-sm text-orange-500;
            }
            &-genera {
                @apply pt-4 text-lg italic text-orange-800;
            }
        }
    }
</style>