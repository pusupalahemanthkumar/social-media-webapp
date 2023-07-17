// Importing Required Files and Packages
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home/HomePage.vue";
import FriendsPage from "./pages/Friends/FriendsPage.vue";
import ReelsPage from "./pages/Reels/ReelsPage.vue";
import SavedPage from "./pages/Saved/SavedPage.vue";
import LoginPage from "./pages/Auth/LoginPage.vue";
import RegisterPage from "./pages/Auth/RegisterPage.vue";
import NotFound from "./pages/NotFound.vue";

import store from "./store/index.js";

// Defining Routes Here
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: "/friends",
      component: FriendsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/reels",
      component: ReelsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/saved",
      component: SavedPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegisterPage,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
