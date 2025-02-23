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
        planetDetails: Array,
        
    },
    methods:{
        showPlanetInfo(){
            this.store.showPlanet = true;
            this.store.planetInfo = this.planetDetails;
            console.log(this.store.planetInfo);
        },
        hidePlanetInfo(){
            this.store.showPlanet = false;
        }
    }
}
</script>

<template>
    
    <div class="planet d-flex justify-content-center" :class="name">
        <div class="img-container" @click="store.showPlanet = false">
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
