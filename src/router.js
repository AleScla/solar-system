import { createRouter, createWebHistory } from "vue-router";

import SolarSystemPage from "./components/pages/SolarSystemPage.vue";
import AboutMePage from "./components/pages/AboutMePage.vue";
import SinglePlanetPage from './components/pages/SinglePlanetPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'solarsystem',
            component: SolarSystemPage
        },
        {
            path:'/:name',
            name:'planet',
            component: SinglePlanetPage
        },
        {
            path: '/about-me',
            name: 'about',
            component: AboutMePage
        },
        {   
            path: '/:pathMatch(.*)*', 
            name: 'not-found', 
            component: NotFoundPage 
        }

    ]
});

export { router } ;
