<script>
import {store, api} from '../../store';
import {router} from '../../router';
export default {
  data() {
    return{
      store,
      api,
      router,
      descriptionPrint: '',
    } 
  },
  methods: {
    textPrinter(target, originalText){
      for (let i = 0; i <= originalText.length; i++){
        // target serve a passare il valore della variabile in data come stringa, altrimenti il dato non viene aggiornato. in questo modo il target va a reperire la variabile descriptionPrint dal data e si può aggiornare dinamicamente
        setTimeout(() => {
          this[target] = originalText.substring(0, i);
        }, i * 1);
      }
    },
  },
  mounted(){
    // this.store.redirectIfNotSet();
    this.api.getSinglePlanet(this.$route.params.name);
    setTimeout(() => {
      if(this.store.planetInfo){
      this.textPrinter('descriptionPrint', this.store.planetInfo?.description)
    }
    }, 500);
  },
}
</script>

<template>
  <main v-if="store.planetInfo">
    <div class="video-container">
      <video autoplay muted >
        <source :src="store.planetInfo.video">
      </video>
    </div>
    <div class="h-100 w-100">
      <div class="container h-100">
        <div class="content h-100 row align-items-center">
          <div class="col-12 col-md-4 h-75 left d-flex align-items-center justify-content-center flex-wrap">
            <div class="text-center planet-info">
              <h1>{{ store?.planetInfo.name }}</h1>
              <div>Massa: <strong>{{ store?.planetInfo.mass_kg }} KG</strong></div>
              <div>Diametro: <strong>{{ store?.planetInfo.diameter_km }} KM</strong></div>
              <div v-show="store?.planetInfo.sun_distance > 0">Distanza dal sole: <strong>{{ store?.planetInfo.sun_distance }} KM</strong></div>
              <div v-show="store?.planetInfo.name != 'Sole'">Periodo di rivoluzione: <strong>{{ store?.planetInfo.orbital_days }} giorni</strong></div>
              <div v-show="store?.planetInfo.moons > 0">Lune: <strong>{{ store?.planetInfo.moons }}</strong></div>
              <div>Composizione atmosferica: <strong>{{ store?.planetInfo.atmosphere }}</strong></div>
              <div>Temperatura media: <strong>{{ store?.planetInfo.avg_temp }} °c</strong></div>
              <div>Tipologia: <strong>{{ store?.planetInfo.type.planet_type }}</strong></div>
              <div>Wikipedia: <strong><a target="_blank" :href="store?.planetInfo.link">Link</a></strong></div>

            </div>
          </div>
          <div class="col-12 col-md-8 h-75 right text-center text-white fw-bold pt5">
            <p>
              {{ descriptionPrint }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

  main{
    width:100%;
    height:calc(100vh - 4rem);
    
  }
  .video-container{
    width:100%;
    height:calc(100vh - 4rem);
    overflow:hidden;
    margin:0 auto;
    background-color:#020202;
    position:absolute;
    z-index:-1;
}

.video-container video{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    right:0;
    object-fit: cover;
}
.left{
  color:white;
  background-color:#555555b2;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
  overflow-y:auto;
  
  .planet-info{
    animation: changeOpacity 2s linear;
    h1{
      color:rgb(87, 227, 255);
    }
  }
  @keyframes changeOpacity{
    from{opacity: 0;}
    to{opacity:1;}
  }
}

.right{
  background-color:#555555b2;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  padding:1rem;
  overflow-y:auto;
}
a{
  color:rgb(87, 227, 255);
  text-decoration:none;
}
.right::-webkit-scrollbar, .left::-webkit-scrollbar {
  width: 5px;
}
.right::-webkit-scrollbar-track, .left::-webkit-scrollbar {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.right::-webkit-scrollbar-thumb, .left::-webkit-scrollbar{
  background: white;
  border-radius: 10px;
}
.right::-webkit-scrollbar-thumb:hover, .left::-webkit-scrollbar {
  background: #555;
}


@media (max-width: 768px) {
  .left{
    height:45% !important;
    border-radius:5px;
  }
  .right{
    height:45% !important;
    border-radius:5px;
  }
}
@media (max-width: 1400px) {
  .right{
    align-items:start !important;
  }
}

</style>