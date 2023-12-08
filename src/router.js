import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
const {isAuthenticated} = useAuth()
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'
import ProtectedPage from '@/views/ProtectedPage.vue'
import NotFound from '@/components/NotFound.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/groove-gallery/', name: 'Home', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
  { path: '/protected', name: 'Protected', component: ProtectedPage, meta: {requiresAuth: true} },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/api/songs/:id', name: 'Song', component: () => import('@/views/SongPage.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router