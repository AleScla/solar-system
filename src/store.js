import {reactive} from 'vue';

export const store = reactive ({
    allPlanets:[
        {
            name: 'Neptune',
            img: '/neptune.webp'
        },
        {
            name: 'Uranus',
            img: '/uranus.png'
        },
        {
            name: 'Saturn',
            img: '/saturn.png'
        },
        {
            name: 'Jupiter',
            img: '/jupiter.webp'
        },
        {
            name: 'Mars',
            img: '/mars.png'
        },
        {
            name: 'Earth',
            img: '/earth.png'
        },
        {
            name: 'Venus',
            img: '/venus.webp'
        },
        {
            name: 'Mercury',
            img: '/mercury.png'
        },
        {
            name: 'Sun',
            img: '/sun.png'
        },
    ],
    planetInfo:'',
    showPlanet:false,
})