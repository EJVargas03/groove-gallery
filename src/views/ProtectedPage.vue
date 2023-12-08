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

</script>

<template>
  <div>
    <div class="credits">
            <h1 class="text-center mb-6"> <strong>Credits and Project Overview </strong></h1>

      <div class="credit-item">
        <strong>Student:</strong> Erick J. Vargas
      </div>
      <div class="credit-item">
        <strong>Professor:</strong> Nicholas Hinojosa
      </div>
      <div class="credit-item">
        <strong>Class:</strong> CITP-4316-Advanced Web Design
      </div>
      <div class="credit-item">
        <strong>Project Overview:</strong>
        <p>
          This website serves as the culmination of my efforts in the CITP-4316-Advanced Web Design class.
          The assignment focused on integrating advanced web development tools and technologies,
          showcasing proficiency in Vue.js for dynamic front-end interactions and Tailwind CSS for modern and responsive styling.
        </p>
        <p>
          One of the key highlights of this project is the integration of an API to store and retrieve data about various songs.
          The API captures essential details such as artist, song title, genre, and an interesting fact about each song.
          This not only demonstrates the use of external data sources but also enhances the user experience by providing engaging content.
        </p>
        <p>
          The project utilizes a combination of languages including HTML, JavaScript, and Vue.js to create a seamless and interactive user interface.
          Leveraging the power of Vue.js, the webpage offers a dynamic and responsive experience for users, enhancing overall usability.
        </p>
        <p>
          The inclusion of Tailwind CSS ensures a visually appealing design, following modern web design principles.
          The use of utility-first classes in Tailwind streamlines the styling process and results in a clean, maintainable codebase.
        </p>
      </div>
      
    </div>

  </div>
</template>

<style scoped lang="postcss">
  .container {
    @apply flex flex-col items-center justify-center min-h-screen;
  }

  .credits {
    @apply mt-4 bg-white p-8 m-9 rounded-md shadow-lg;
  }

  .credit-item {
    @apply mb-2;
  }

  p {
    @apply mt-4 ;
  }
</style>
