<script>
import Meteors from '../minor_components/Meteors.vue'

export default {
  data() {
    
  },
  components: {
    Meteors
  },
}
</script>

<template>
  <main>
    <Meteors></Meteors>  
      <section id="about-me">
          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center">
              <div class="col-12 col-md-6 d-flex justify-content-center py-2">
                <img src="/public/propic.png" alt="propic">
              </div>
              <div class="col-12 col-md-6 text-center py-2">
                <h1>Chi sono?</h1>
                <p>Mi chiamo Alessandro, sono uno Sviluppatore Web Junior Full-stack.</p>
                <p>Questa web app è stata creata con Vue.js e Laravel per le API, ma ho anche utilizzato librerie come Swiper per il carosello in front-page, Tailwind-UI per la navbar e InspiraUI per lo sfondo "Meteore".</p>
                <hr>
                <p>Sono una persona molto curiosa e sempre alla ricerca di stimoli e qualcosa di nuovo da apprendere. L'interesse per la programmazione per me è nato dalle superiori ma ad oggi, scrivere codice è diventata una vera e propria passione.</p>
                <p>Nel mio tempo libero, gioco principalmente al PC, sia online che non. Un'altra mia passione è il Calisthenics, che pratico da circa 2 anni. Ho anche una chitarra da non molto e ogni tanto do una strimpellata cercando di imparare da autodidatta.</p>
                <p>Di seguito trovate i miei links:</p>
                <div>
                  <a class="text-decoration-none me-2" target="_blank" href="https://github.com/AleScla"><i class="fa-brands fa-github"></i> GitHub</a>
                  <a class="text-decoration-none" target="_blank" href="https://www.linkedin.com/in/alescla"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                </div>
              </div>
            </div>
          </div>
      </section>
     
  </main>
</template>

<style lang="scss" scoped>
  main{
    width:100%;
    height: calc(100vh - 4rem);
    color:white;
    #about-me{
      height:100%;
    }
    img{
      border-radius:5px;
    }
    a{
      color:white;
      &:hover > *, &:hover{
        color:grey
      }
    }
  }
</style>