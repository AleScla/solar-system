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
  methods:{
  
  }
}
</script>

<template>
    <div class="universe">
        <div v-show="store.showPlanet" class="info">{{ store.planetInfo, console.log(store.planetInfo) }}</div>
        <section id="solar-system">
            <div v-for="planet, index in store.allPlanets" :key="index" :id="'orbit-' + index" class="orbit-generic" >
                <Planet :name="planet.name" :image="planet.img" />
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.universe{
    background-color:#01050a;
    overflow:hidden;
    position:relative;
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

}
#orbit-0{
    width:41vw;
    height:41vw;
}
#orbit-1{
    width: 37vw;
    height:37vw;
}
#orbit-2{
    width: 32vw;
    height:32vw;
}
#orbit-3{
    width:26vw;
    height:26vw;
}
#orbit-4{
    width:21vw;
    height:21vw;
}
#orbit-5{
    width:17vw;
    height:17vw;
}
#orbit-6{
    width:12vw;
    height:12vw;
}
#orbit-7{
    width:8vw;
    height:8vw;
}
#orbit-8{
    border:none;
}

.Neptune{
    animation-duration:1000s;
    .img-container{
        img{
        width:40px;
        top:-20px;
        }
    }
}
.Uranus{
    animation-duration:850s;
    .img-container{
        img{
        width:40px;
        top:-20px;
        }
    }
}
.Saturn{
    animation-duration:750s;
    .img-container{
        img{
        width:70px;
        top:-35px;
        }
    }
}
.Jupiter{
    animation-duration:600s;
    .img-container{
        img{
        width:60px;
        top:-30px;
        }
    }
}
.Mars{
    animation-duration:230s;
    .img-container{
        img{
        width:30px;
        top:-15px;
        }
    }
}
.Earth{
    animation-duration:91s;
    .img-container{
        img{
        width:46px;
        top:-23px;
        }
    }
}
.Venus{
    animation-duration:75s;
    .img-container{
        img{
        width:40px;
        top:-20px;
        }
    }
}
.Mercury{
    animation-duration:30s;
    .img-container{
        img{
        width:30px;
        top:-15px;

        }
    }
}
.Sun{
    .img-container{
        width:11rem;
        img{
            top:50%;
            transform:translate(-50%, -50%);
        }
    }
}
.info{
    min-width:20px;
    min-height:20px;
    position:fixed;
    top:15vh;
    left:10vh;
    font-size:2rem;
    background-color:#072242;
    color:white;
    padding:5px;
    border-radius:10px;
}
</style>