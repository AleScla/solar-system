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
    <Meteors> 
        <section class="about-me">
            Alessandro Sclafani
        </section>
    </Meteors>   
  </main>
</template>

<style lang="scss" scoped>
  main{
    width:100%;
    height: calc(100vh - 4rem);
   
    
  }


</style>