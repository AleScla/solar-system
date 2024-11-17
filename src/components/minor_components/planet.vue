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
    <div class="planet" :class="name">
        <div class="img-container">
            <img :src="image" :alt="name" v-on:mouseover="showInfo(name);" v-on:mouseleave="hideInfo()">  
        </div>
    </div>
    
</template>


<style lang="scss">

.planet{
    width:100%;
    height:100%;
    animation:rotate linear infinite;
    border-radius:50%;
    
    .img-container{
        img{
            position:absolute;
            left:50%;
            transform:translateX(-50%);
            cursor:pointer;
        }
    }
}

    @keyframes rotate{
        0%{
            transform:rotate(0)
        }
        50%{
            transform:rotate(180deg)
        }
        100%{
            transform:rotate(360deg)
        }
    }
</style>
