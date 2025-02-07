import {reactive} from 'vue';

export const store = reactive ({
    allPlanets:[
        {
            name: 'Nettuno',
            img: '/neptune.png'
        },
        {
            name: 'Urano',
            img: '/uranus.png'
        },
        {
            name: 'Saturno',
            img: '/saturn.png'
        },
        {
            name: 'Giove',
            img: '/jupiter.png'
        },
        {
            name: 'Marte',
            img: '/mars.png'
        },
        {
            name: 'Terra',
            img: '/earth.png'
        },
        {
            name: 'Venere',
            img: '/venus.png'
        },
        {
            name: 'Mercurio',
            img: '/mercury.png'
        },
        {
            name: 'Sole',
            img: '/sun.png'
        },
    ],
    planetInfo:'',
    showPlanet:false,
})