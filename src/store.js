import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive ({
    allPlanets:[
        {
            name: 'Sole',
            img: '/sun.png'
        },
        {
            name: 'Mercurio',
            img: '/mercury.png'
        },
        {
            name: 'Venere',
            img: '/venus.png'
        },
        {
            name: 'Terra',
            img: '/earth.png'
        },
        {
            name: 'Marte',
            img: '/mars.png'
        }, 
        {
            name: 'Giove',
            img: '/jupiter.png'
        },
        {
            name: 'Saturno',
            img: '/saturn.png'
        },
        {
            name: 'Urano',
            img: '/uranus.png'
        },
        {
            name: 'Nettuno',
            img: '/neptune.png'
        },
    ],
    planetInfo:'',
    showPlanet:false,
})

export const api = reactive ({
    showCarousel: false, // necessario per non buggare il carousel, visto che riceveva i dati da una chiamata api
    storedPlanets: [],
    getAllPlanets(){
        axios.get("http://127.0.0.1:8000/api/planets")
        .then((resp)=> {
            // console.log(resp.data);
            this.storedPlanets = resp.data;
            console.log(this.storedPlanets);
            this.showCarousel = true;
        })
        .catch((error)=> {
            console.error("Errore nella richiesta dei pianeti", error);
        })
    }
})