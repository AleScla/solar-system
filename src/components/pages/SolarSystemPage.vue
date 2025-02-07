<script>
import {store} from '../../store';
import Planet from '../minor_components/planet.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { EffectCoverflow } from 'swiper/modules';
export default {
  data() {
    return{
        store,
        modules: [EffectCoverflow]
    }
  },
  components: {
    Planet,
    Swiper,
    SwiperSlide,
  },
}
</script>

<template>
    <div class="universe">
        <section id="solar-system" class="d-flex align-items-center">
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
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :coverflow-effect="{rotate: 0, stretch: -100, depth: 200, modifier: 1.5, scale: 0.8, slideShadows: false }"
            :observer="true"
            :observe-parents="true"
            :initialSlide="4"
            :center-insufficient-slides="true"
            :loop="true"> 
            <!-- observer e observe-parents sono serviti perchè l'effetto coverflow non veniva renderizzato al primo reload della pagina, finchè non si interagiva con il carosello -->
            <SwiperSlide class="custom-class-slide" v-for="planet, index in store.allPlanets" :key="index"><Planet :name="planet.name" :image="planet.img"/></SwiperSlide>
            </Swiper>
        </section>
    </div>
</template>

<style lang="scss">
.universe{
    background-color:#01050a;
    position:relative;
}
#solar-system{
    width:100%;
    height: calc(100vh - 4rem);
    position:relative;
    overflow:hidden;
    .custom-swiper-classes{
        height:100%;
        top:10%;
    }
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