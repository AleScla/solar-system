<script>
import {store, api} from '../../store';
import Planet from '../minor_components/planet.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import axios from 'axios';

export default {
  data() {
    return{
        store,
        api,
        modules: [EffectCoverflow, Autoplay],
       
    }
  },
  components: {
    Planet,
    Swiper,
    SwiperSlide,
  },
  methods: {
    
  },
  mounted(){
    this.api.getAllPlanets();
  },
}
</script>

<template>
    <div class="universe">
        <section id="solar-system" class="d-flex align-items-center" v-show="api.showCarousel">
            <!-- <div v-for="planet, index in store.allPlanets" :key="index" :id="'orbit-' + index" class="orbit-generic">
                <Planet :name="planet.name" :image="planet.img" />
            </div> -->
            <Swiper class="custom-swiper-classes" 
            :modules="modules"
            :slides-per-view="1" 
            :breakpoints="{
                768:{
                    slidesPerView: 3
                },
                992:{
                    slidesPerView: 5
                }
            }"
            :autoplay="{
                delay: 5000,
                pauseOnMouseEnter: true,
            }"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :coverflow-effect="{rotate: 0, stretch: -100, depth: 200, modifier: 1.5, scale: 0.8, slideShadows: false }"
            :initialSlide="3"
            :center-insufficient-slides="true"
            :loop="true"
            :observer="true"
            :observe-parents="true"
            :speed="800"> 
            <!-- observer e observe-parents sono serviti perchè l'effetto coverflow non veniva renderizzato al primo reload della pagina, finchè non si interagiva con il carosello -->
                <SwiperSlide class="custom-class-slide" v-for="planet, index in store.allPlanets" :key="index">
                    <router-link :to="{name: 'planet', params:{ name: store.allPlanets[index].name}}">
                        <Planet :planetHover="planet" :image="store.allPlanets[index].img"/>
                    </router-link>
                </SwiperSlide>
            </Swiper>
            <transition >
                <div id="info" v-if="store.showPlanet">
                    {{ store.planetInfo }}
                </div>
            </transition>
        </section>
    </div>
</template>

<style lang="scss">
.universe{
    background-color:#01050a;
    position:relative;
}
#solar-system{

    height: calc(100vh - 4rem);
    position:relative;
    overflow:hidden;
    width:90%;
    margin:auto;
    #info{
        position:absolute;
        left:50%;
        top:80%;
        transform:translateX(-50%);
        min-width:300px;
        min-height:100px;
        background-color:rgba(255, 255, 255, 0.158);
        color:White;
        border-radius:10px;
        text-align:center;
    }
    .custom-swiper-classes{
        height:100%;
        top:10%;
    }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}

.v-enter-from{
    opacity: 0;
    transform:translate(-50%, -30px);
}
.v-leave-to {
    opacity: 0;
    transform:translate(-50%, -30px);
}

// .info{
//     min-width:20px;
//     min-height:20px;
//     position:fixed;
//     top:70vh;
//     left:10vh;
//     font-size:2rem;
//     background-color:#072242;
//     color:white;
//     padding:5px;
//     border-radius:10px;
// }
</style>