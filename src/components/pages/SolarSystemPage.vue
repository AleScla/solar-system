<script>
import {store} from '../../store';
import Planet from '../minor_components/planet.vue'
export default {
  data() {
    return{
        store,
    }
  },
  components: {
    Planet
  },
}
</script>

<template>
    <div class="universe">
        <section id="solar-system">
        <div v-for="planet, index in store.allPlanets" :key="index" :id="'orbit-' + index" class="orbit-generic">
           <Planet :name="planet.name" :image="planet.img" />
           <div class="info">{{ planet.name }}</div>
        </div>
    </section>
    </div>
</template>

<style lang="scss" scoped>
    .universe{
        background-color:#01050a;
        overflow:hidden;
    }
    #solar-system{
        width:100%;
        height: calc(100vh - 4rem);
        position:relative;
        transform:skewY(10deg)
    }
    .orbit-generic{
        border-radius:50%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        border:2px solid white;
        cursor:pointer;
        &:hover .info{
        display:inline-block;
    }
    }
    #orbit-0{
        width:40vw;
        height:40vw;
    }
    #orbit-1{
        width: 36vw;
        height:36vw;
    }
    .info{
        min-width:20px;
        min-height:20px;
        background-color:white;
        display:none;
        position:fixed;
        transform:skewY(-10deg);
}


</style>