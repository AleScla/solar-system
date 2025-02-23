<script>
import {store} from '../../store';

export default {
    data() {
    return{
        store,
    }
  },
    props:{
        image: String,
        
        planetHover: Array,
    },
    methods:{
        showPlanetInfo(){
            this.store.showPlanet = true;
        },
        hidePlanetInfo(){
            this.store.showPlanet = false;
        }
    }
}
</script>

<template>
    
    <div class="planet d-flex justify-content-center" :class="name">
        <div class="img-container">
            <img :src="image" :alt="name" v-on:mouseover="showPlanetInfo" v-on:mouseleave="hidePlanetInfo()">  
        </div>
    </div>
</template>


<style lang="scss">
    .planet{
        max-height:100%;
        max-width:100%;
        .img-container{
            max-width:480px;
            max-height:480px;
            img{
                max-width:100%;
                max-height:100%;
            }
        }
    }
</style>
