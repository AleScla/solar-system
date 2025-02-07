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
        name: String,
    },
    methods:{
        showInfo(planetName){
            this.store.showPlanet = true;
            this.store.planetInfo = planetName
        },
        hideInfo(){
            this.store.showPlanet = false;
        }
    }
}
</script>


<template>
    <div class="planet d-flex justify-content-center" :class="name">
        <div class="img-container">
            <img :src="image" :alt="name">  
        </div>
    </div>
    
</template>
<!-- v-on:mouseover="showInfo(name);" v-on:mouseleave="hideInfo()" -->

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
