<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
const {isAuthenticated, logout, user} = useAuth()
    const brand = ref(import.meta.env.VITE_APP_NAME)
</script>


<template>
<nav>
    <div class="wrapper">
        <RouterLink :to="{name:'Home'}" class="brand">
            <span class="brand-title">{{ brand }}</span>
        </RouterLink>
        <div class="menu">
            <p v-show="isAuthenticated" class="px-2 py-4">
            Welcome back
            <strong>
                <i>{{ user?.email }}</i>
            </strong>
            </p>
            
            <div v-if="isAuthenticated">
                <!--<RouterLink :to="{name: 'Settings'}" class="menu-item">Add Song</RouterLink>-->
                
                <RouterLink :to="{name: 'Protected'}" class="menu-item">Credits</RouterLink>
                <button class="menu-logout" @click="logout">logout</button>
            </div>

            <div v-else>
                <RouterLink :to="{name: 'Login'}" class="menu-login">login</RouterLink>
            </div>
        </div>
    </div>
</nav>

</template>

<style scoped lang="postcss">
     nav {
        @apply bg-purple-800 text-slate-200 h-20 flex;
        .wrapper {
            @apply container mx-auto w-full flex justify-between items-center;

            .brand {
                &-title {
                    @apply text-2xl font-bold text-yellow-500;
                }
            }

            .menu{
                @apply flex gap-2;

                div {
                    @apply py-2;
                }

                &-item {
                    @apply rounded-md px-4 py-2 mx-2 bg-purple-500 hover:bg-yellow-500 hover:text-slate-900;
                }

                &-login {
                    @apply rounded-md bg-green-500 px-4 py-2 text-red-100 hover:bg-green-700;
                }

                &-logout {
                    @apply rounded-md bg-yellow-500 px-4 py-2 mx-2 text-red-100 hover:bg-black;
                }
            }
        }
     }
</style>