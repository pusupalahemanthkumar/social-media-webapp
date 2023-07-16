// Importing Required Files and Packages
import { createRouter , createWebHistory } from "vue-router";

import HomePage from "./pages/Home/HomePage.vue";
import FriendsPage from "./pages/Friends/FriendsPage.vue";
import ReelsPage from "./pages/Reels/ReelsPage.vue";
import SavedPage from "./pages/Saved/SavedPage.vue";
import LoginPage from "./pages/Auth/LoginPage.vue";
import RegisterPage from "./pages/Auth/RegisterPage.vue";

// Defining Routes Here
const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path: '/',
            component : HomePage,
        },
        {
            path:'/friends',
            component : FriendsPage,
        },
        {
            path: '/reels',
            component : ReelsPage,
        },
        {
            path:'/saved',
            component : SavedPage,
        },
        {
            path: '/login',
            component : LoginPage,
        },
        {
            path: '/register',
            component : RegisterPage,
        }
    ]
})

export default router;