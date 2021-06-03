<template>
  <q-page>
    <div class="q-pa-md column">
        <q-btn id="divulgation-content-btn" to="/en-us" color="white q-px-xl q-py-md" rounded class="text-black" label="Versão em inglês" size="22px" />
    </div>
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
          <p class="text-subtitle1 text-white">Ajude a igreja Santa Madalena a arrecadar alimentos para moradores de rua nesse inverno.</p>
          <q-btn color="white" to="/contato" style="border-radius: 15px;" class="text-red q-py-md" label="clique para participar"></q-btn>
        </div>
      </q-carousel-slide>
       <q-carousel-slide  v-for="carrossel in carrossels" :name="carrossel.position" :key="carrossel.id" class="flex justify-center items-center" :img-src="`/images/carousel/${carrossel.img}`">
        <div class="text-center" style="width: 30%">
          <div class="text-h2 text-white">{{carrossel.titulo}}</div>
          <p class="text-subtitle1 text-white">{{carrossel.texto}}</p>
          <q-btn color="white" style="border-radius: 15px;" class="text-red q-py-md" label="clique para participar"></q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Campaigns -->
    <section id="campaigns" class="q-mb-xl">
      <!-- Section title -->
      <h1 class="text-h4 text-center text-light-blue-6 text-uppercase q-mb-xl q-py-xl">
        Campanhas mais populares da semana
      </h1>

      <!-- Texts and image -->
      <div class="cards row justify-around" id="campaigns-cards">
        <!-- Campaign -->
        <div class="campaigns-card text-center col-sm-5 q-py-lg col-md-3 q-pa-sm" v-for="campaign in campaigns" :key="campaign">
          <a href="/#/campanha/agasalho" style="text-decoration: none;">
          <h3 class="text-red text-h5">
            {{campaign.title}}
          </h3>
          <p class="text-subtitle1"> 
            {{campaign.subtitle}}
          </p>
          <q-avatar size="200px" rounded>
          <img :src="`/images/campaings/${campaign.src}`" class="card-img">
          </q-avatar>
          </a>
        </div>
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