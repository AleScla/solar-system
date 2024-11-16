import { createRouter, createWebHistory } from "vue-router";

import SolarSystemPage from "./components/pages/SolarSystemPage.vue";
import AboutMePage from "./components/pages/AboutMePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'solarsystem',
            component: SolarSystemPage
        },
        {
            path: '/about-me',
            name: 'about',
            component: AboutMePage
        }
    ]
});

export { router } ;
