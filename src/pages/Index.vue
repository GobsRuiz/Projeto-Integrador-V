<template>
  <q-page>
         <!-- Carousel -->
    <q-carousel
      animated
      v-model="slide"
      navigation
      arrows
      infinite
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="500px"
    >
      <q-carousel-slide class="carousel-slide flex justify-center items-center" name="first" img-src="../assets/carousel/alimentosee.png">
        <div class="carousel-slide-content text-center q-px-xl">
          <div class="text-h2 text-white">Ajude quem mais precisa!</div>
          <p class="text-subtitle1 text-white">Ajude o Lar arrecadar alimentos para os nossos queridos veteranos</p>
          <q-btn color="white" to="/doacoes" style="border-radius: 15px;" class="text-red q-py-md" label="clique para participar"></q-btn>
        </div>
      </q-carousel-slide>
       <q-carousel-slide  v-for="carrossel in carrossels" :name="carrossel.position" :key="carrossel.id" class="flex justify-center items-center" :img-src="`/images/carousel/${carrossel.img}`">
        <div class="text-center" style="width: 30%">
          <div class="text-h2 text-white">{{carrossel.titulo}}</div>
          <p class="text-subtitle1 text-white">{{carrossel.texto}}</p>
          <q-btn color="white" to="/doacoes" style="border-radius: 15px;" class="text-red q-py-md" label="clique para participar"></q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Campaigns -->
      <section title="O QUE É O CENTRO DE DOAÇÕES?" class="q-py-xl" id="sectioncreation">
        <div style="transform: scaleY(-1);">
    <h1 id="organizations-title" class="text-uppercase text-h3 textColor-blue text-center q-mb-xl q-px-md">
O que é o Lar São Vicente de Paulo?    </h1>
    <div class="row justify-center q-py-sm">
    <img src="../assets/about/faqabout.svg" alt="">
</div>
    <section class="flex justify-center items-center q-py-xs">
      <!-- Content -->
      <div class="text-center">
        <q-btn to="/contato" color="white q-px-xl q-py-md" rounded class="text-black" label="clique aqui para descobrir" size="22px" />
      </div>
    </section>
    </div>
    </section>

    <!-- Divulgation -->
    <section id="divulgation" class="flex justify-center items-center q-py-xs">
      <!-- Content -->
      <div id="divulgation-content" class="text-center">
        <q-btn id="divulgation-content-btn" to="/contato" color="white q-px-xl q-py-md" rounded class="text-black" label="clique aqui" size="22px" />
      </div>
    </section>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      slide: "first",
      autoplay: true,
      campaigns: [
        {
          title: 'Compra de respiradores para Taquaritinga',
          src: 'respiradores.png'
        },
        {
          title: 'Compra de agasalho para moradores de rua',
          src: 'agasalhos.png'
        },
        {
          title: 'Compra de alimentos para orfanato',
          src: 'alimentos.png'
        },
      ],
    }
  },
   methods: {
    ...mapActions('mainstore', ['obterCarrossels']),
  },
  computed: {
    ...mapGetters('mainstore', ['carrossels'])
  },
  created () {
    this.obterCarrossels()
  }
}
</script>

<style scoped>

  #sectioncreation{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;
    transform: scaleY(-1);
  }

  #sectioncreation img, #sectionstory img{
  width: 350px;  
  }
/* Carousel */
.carousel-slide{
  background-size: 100% 100%;
}

/* Content */
.carousel-slide-content{
  width: 450px;
}





/* Organizations and divulgations */
/* Cards */
.card-img{
  width: 60%;
  height: 180px;
}





/* Divulgation */
#divulgation{
  height: 100vh;

  background-color: #00A5F7;
  background-image: url("../assets/divulgation/banner.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
#divulgation-content button{
  transform: translateY(40px);
}





/* Responsive */
/* 600 */
@media (max-width: 630px){
  /* Carousel */
  /* Content */
  .carousel-slide-content{
    width: 300px;
  }



  /* Organizations and campaigns */
  /* Cards */
  #campaigns-cards{
    display: flex;
    flex-wrap: nowrap;
    justify-content: unset;

    overflow-x: scroll;
  }
  
  /* Card */
  #campaigns-cards .campaigns-card{
    min-width: 100%;
  }
  /* img */
  #campaigns-cards .campaigns-card img{
    width: 180px;
    height: 180px;
  }

  /* Organizations and campaigns */
  /* h1 */
  #campaigns h1{
    font-size: 26px;
  }
  /* h3 */
  #campaigns h3{
    font-size: 20px;
  }



  /* Divulgation */
  #divulgation{
    height: 400px;
  }
  /* button */
  #divulgation-content-btn{
    padding: 20px;
  }
}       

/* 450 */
@media (max-width: 450px){
  /* Carousel */
  /* Content */
  /* p */
  .carousel-slide-content p{
    height: 80px;
    overflow: scroll;
  }



  /* img */
  #campaigns-cards .campaigns-card img{
    width: 150px;
    height: 150px;
  }



  /* Divulgation */
  #divulgation{
    height: 300px;
  }
  /* button */
  #divulgation-content-btn{
    padding: 5px;
  }
}
</style>