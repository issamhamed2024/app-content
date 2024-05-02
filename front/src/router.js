import { createRouter, createWebHistory } from "vue-router"
import AdminPanel from "./views/AdminPanel.vue"
import LoginView from "./views/LoginView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: AdminPanel,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPanel,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: "Login" })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
