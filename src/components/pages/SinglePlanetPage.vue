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
          <div class="col-12 col-md-8 h-75 right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt necessitatibus, sint numquam quam cum adipisci, rerum obcaecati consectetur qui, voluptatem quo inventore enim deleniti nulla repellendus praesentium exercitationem nam atque autem dolores vitae tempore! Qui, inventore, cupiditate magnam cumque suscipit praesentium ipsa doloremque corporis nemo alias officiis eius repellendus labore molestias amet quis aut reprehenderit maxime voluptates consequatur impedit facere eum fugiat! Quisquam modi blanditiis quidem optio, iure magnam quam deleniti at quas esse corrupti nulla, laboriosam nostrum. Rem vero blanditiis excepturi doloribus dicta, odio doloremque praesentium reiciendis aliquam sequi ea! Tenetur, quo ab rem consectetur quos reiciendis blanditiis, consequuntur officia nulla illum mollitia qui, error dolore. Saepe nam rerum ullam nostrum aspernatur? Dolorum fugit minus cumque voluptate id praesentium veniam quis, at deleniti magni. Cumque voluptas at dolore commodi corporis, id sapiente sit odit nam similique, consequatur maiores debitis animi quos. Necessitatibus repudiandae veniam sint vero eveniet doloremque accusantium dicta molestias libero atque maxime, aliquam autem quis saepe ex! Earum asperiores repellat deleniti ad soluta placeat suscipit possimus molestias sed, in excepturi rem omnis quo blanditiis? Molestias tempore voluptas maiores esse consectetur nesciunt odit blanditiis culpa cumque eius eaque consequatur doloremque officia natus repellat accusantium repudiandae inventore hic fuga pariatur, minima cum saepe. Corrupti accusamus perferendis laborum voluptate rem amet sunt dolore? Aperiam quam nostrum in facere a distinctio provident, quaerat odit, dolor facilis molestiae! Ut architecto nemo animi repellat, dicta incidunt eligendi perferendis tempore, quasi optio soluta debitis mollitia laborum? Dolor perferendis, eligendi unde iusto eum fugiat maxime, sunt cupiditate maiores rerum laborum assumenda mollitia quibusdam, et quae voluptatem sapiente non! Et consectetur quidem inventore beatae ab autem aperiam, exercitationem ullam qui dicta eius vitae, praesentium iusto, nam laboriosam alias quae. Tenetur voluptates cumque veritatis beatae possimus dolores architecto mollitia ut quaerat quidem. Quaerat magnam quos aut magni ratione quibusdam sit asperiores modi ea autem, distinctio consequatur sint praesentium pariatur, dolorum voluptatibus earum velit? Porro quibusdam sequi, earum cum iusto nulla harum vitae repellat aut praesentium similique cupiditate blanditiis quas reprehenderit labore quisquam placeat eaque ea ut laudantium suscipit nesciunt velit officiis. Fugit id sapiente ea eveniet molestiae. Unde eligendi pariatur excepturi voluptate ab dignissimos facere. Explicabo asperiores repellendus commodi, tempore reprehenderit accusamus tempora quisquam officiis vel ut labore exercitationem expedita. Sint nulla voluptatum autem veniam accusantium, veritatis dolorem aliquid! Quae quasi debitis officiis totam obcaecati autem cumque quisquam! Exercitationem fugiat deserunt omnis quidem ratione quod dicta, saepe cum cupiditate, aliquid explicabo. Repudiandae, voluptate sit. Aut accusamus ducimus iusto, reiciendis earum in corporis ut voluptate magni quas autem libero vitae unde quos velit commodi tenetur doloribus similique modi dicta! At veniam voluptatibus, error vitae iusto aspernatur repellat quos quisquam voluptas inventore, dolore ipsum laboriosam sit accusantium minus aliquam? Quasi iusto voluptatem commodi numquam autem non. Magnam natus numquam, sint obcaecati illo dolorum et fugiat quis quia recusandae nulla distinctio aliquid vel. Quae reiciendis recusandae saepe dignissimos, magni eveniet provident ipsam quidem voluptate? Mollitia placeat, enim a veniam repudiandae quos animi, excepturi molestias, sunt molestiae nisi iste repellendus!</div>
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
  background-color:white;

}
.right{
  background-color:red;
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
  }
  .right{
    height:45% !important;
  }
}
</style>