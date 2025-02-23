<script>
import {store, api} from '../../store';
export default {
  data() {
    return{
      store,
    }
  }
}
</script>

<template>
  <main>
    <div class="video-container">
      <video autoplay muted >
        <source :src="store.planetInfo.video">
      </video>
    </div>
    <div class="h-100 w-100">
      <div class="container h-100">
        <div class="content h-100 row align-items-center">
          <div class="col-12 col-md-4 h-75 left">1</div>
          <div class="col-12 col-md-8 h-75 right text-center text-white fw-bold d-flex align-items-center">
            <p class="mt-3">
              {{ store.planetInfo.description }}
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
}

.right{
  background-color:#555555b2;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  padding:1rem;
  overflow-y:auto;
}
.right::-webkit-scrollbar {
  width: 5px;
}
.right::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.right::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 10px;
}
.right::-webkit-scrollbar-thumb:hover {
  background: #555;
}


@media (max-width: 768px) {
  .left{
    height:35% !important;
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