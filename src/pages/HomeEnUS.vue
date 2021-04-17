<template>
  <q-page>
         <div class="q-pa-md column">
        <q-btn id="divulgation-content-btn" to="/" color="white q-px-xl q-py-md" rounded class="text-black" label="Portuguese version" size="22px" />
    </div>
    <!-- Carousel -->
    <q-carousel
      animated
      v-model="slide"
      navigation
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="500px"
    >
      <q-carousel-slide class="carousel-slide flex justify-center items-center" name="first" img-src="../assets/carousel/banner1.png">
        <div class="carousel-slide-content text-center q-px-xl">
          <div class="text-h2 text-white">Goodbye, heat!</div>
          <p class="text-subtitle1 text-white">
            Help São Vicente de Paulo nursing home facility raise funds to buy air conditioners for better
            quality of life for our veterans.
          </p>
          <q-btn color="white" style="border-radius: 15px;" class="text-red q-py-md" label="Click here to help them"></q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="flex justify-center items-center" name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="text-center" style="width: 30%">
          <div class="text-h2 text-white">Second stop</div>
          <p class="text-subtitle1 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deserunt distinctio nisi officia? Vero, id nulla eius maxime 
            amet repudiandae earum saepe expedita distinctio inventore, 
            reiciendis ipsam incidunt voluptate? Laudantium, ea.
          </p>
          <q-btn color="white" style="border-radius: 15px;" class="text-red q-py-md" label="clique para participar"></q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="flex justify-center items-center" name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="text-center" style="width: 30%">
          <div class="text-h2 text-white">Third stop</div>
          <p class="text-subtitle1 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deserunt distinctio nisi officia? Vero, id nulla eius maxime 
            amet repudiandae earum saepe expedita distinctio inventore, 
            reiciendis ipsam incidunt voluptate? Laudantium, ea.
          </p>
          <q-btn color="white" style="border-radius: 15px;" class="text-red q-py-md" label="clique para participar"></q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Organizations -->
    <section id="organizations" class="q-my-xl">
      <!-- Section title -->
      <h1 class="text-h4 text-center text-light-blue-6 text-uppercase q-px-sm">
MOST SEARCHED INSTITUTIONS THIS WEEK
      </h1>

      <!-- Text and image -->
      <div class="cards row justify-around" id="organizations-cards">
        <!-- Organization -->
        <div class="organizations-card text-center q-pa-sm col-sm-4 col-md-3" v-for="organization in organizations" :key="organization">
          <h3 class="text-h6"> 
            {{organization.title}}
          </h3>
          <img :src="organization.src" alt="" class="card-img">
        </div>
      </div>
    </section>

    <!-- Campaigns -->
    <section id="campaigns" class="q-mb-xl">
      <!-- Section title -->
      <h1 class="text-h4 text-center text-light-blue-6 text-uppercase q-mb-xl q-px-sm">
MOST SEARCHED CAMPAINGS THIS WEEK
      </h1>

      <!-- Texts and image -->
      <div class="cards row justify-around" id="campaigns-cards">
        <!-- Campaign -->
        <div class="campaigns-card text-center col-sm-4 col-md-3 q-pa-sm" v-for="campaign in campaigns" :key="campaign">
          <h3 class="text-red text-h5">
            {{campaign.title}}
          </h3>
          <p class="text-subtitle1"> 
            {{campaign.subtitle}}
          </p>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" class="card-img">
        </div>
      </div>
    </section>

    <!-- Divulgation -->
    <section id="divulgation" class="flex justify-center items-center q-py-xs">
      <!-- Content -->
      <div id="divulgation-content" class="text-center">
        <q-btn id="divulgation-content-btn" color="white q-px-xl q-py-md" rounded class="text-black" label="Click here" size="22px" />
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndexEnUs',
  data () {
    return {
      slide: "first",
      autoplay: true,
      organizations: [
        {
          title: 'Fund raising to buy respirators for Taquaritinga',
          src: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg'
        },
        {
          title: 'Fund raising to buy warm clothes for homeless people',
          src: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg'
        },
        {
          title: 'Fund raising to buy food for the orphans at XYZ orphanage',
          src: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg'
        },
      ],
      campaigns: [
        {
          title: 'Fund raising to buy respirators for Taquaritinga',
          subtitle: 'Currently raised more than R$ 20.000,00'
        },
        {
          title: 'Fund raising to buy warm clothes for homeless people',
          subtitle: 'Currently raised more than R$ 10.000,00'
        },
        {
          title: 'Fund raising to buy food for the orphans at XYZ orphanage',
          subtitle: 'Currently raised more than R$ 12.000,00'
        },
      ],
    }
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
}





/* Divulgation */
#divulgation{
  height: 100vh;

  background-color: #00A5F7;
  background-image: url("../assets/divulgation/banner2en.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
#divulgation-content button{
  transform: translateY(40px);
}





/* Responsive */
/* 600 */
@media (max-width: 600px){
  /* Carousel */
  /* Content */
  .carousel-slide-content{
    width: 300px;
  }



  /* Organizations and campaigns */
  /* Cards */
  #organizations-cards,
  #campaigns-cards{
    display: flex;
    flex-wrap: nowrap;
    justify-content: unset;

    overflow-x: scroll;
  }
  
  /* Card */
  #organizations-cards .organizations-card,
  #campaigns-cards .campaigns-card{
    min-width: 100%;
  }
  /* img */
  #organizations-cards .organizations-card img,
  #campaigns-cards .campaigns-card img{
    width: 180px;
    height: 180px;
  }

  /* Organizations and campaigns */
  /* h1 */
  #organizations h1,
  #campaigns h1{
    font-size: 26px;
  }
  /* h3 */
  #organizations h3,
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
  #organizations-cards .organizations-card img,
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