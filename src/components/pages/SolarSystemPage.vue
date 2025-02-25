<script>
import {store, api} from '../../store';
import Planet from '../minor_components/planet.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import axios from 'axios';
import Meteors from '../minor_components/Meteors.vue'

export default {
  data() {
    return{
        store,
        api,
        modules: [EffectCoverflow, Autoplay],
        myDelay: 100,
    }
  },
  components: {
    Planet,
    Swiper,
    SwiperSlide,
    Meteors
  },
  methods: {
    setDelay(){ // serve per evitare che si bugghi il carosello al primo avvio
        setTimeout(() => {
            this.myDelay = 5000;
        }, 300);
        console.log(this.myDelay);
    }
  },
  mounted(){
    this.api.getAllPlanets();
    this.setDelay();
  },
}
</script>

<template>
    <div class="universe">
        <Meteors></Meteors>
            <section id="solar-system" class="d-flex align-items-center" v-if="api.showCarousel">
                <Swiper class="custom-swiper-classes"
                refs="swiperRef" 
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
                    delay: myDelay,
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
                            <Planet :image="store.allPlanets[index].img" :planetDetails="api?.storedPlanets[index]"/>
                        </router-link>
                    </SwiperSlide>
                </Swiper>
                
                <transition>
                    <div id="info" v-if="store.showPlanet">
                        <div>
                            Nome: <strong>{{ store.planetInfo.name }}</strong>
                        </div>
                        <div>
                            Massa in kg: <strong>{{ store.planetInfo.mass_kg }} kg</strong>
                        </div>
                        <div>
                            Diametro: <strong>{{ store.planetInfo.diameter_km }} km</strong>
                        </div>
                        <div>
                            Temperatura media: <strong>{{ store.planetInfo.avg_temp }}°c</strong>
                        </div>
                    </div>
                </transition>
            </section>
        
    </div>
</template>

<style lang="scss">
.universe{
    position:relative;
}
#solar-system{
    height: calc(100vh - 4rem);
    position:relative;
    overflow:hidden;
    z-index:1;
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
        z-index:10;
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

</style>