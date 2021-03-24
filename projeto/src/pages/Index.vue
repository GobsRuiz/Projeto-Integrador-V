<template>
  <q-page>
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
        <div class="text-center" style="width: 30%">
          <div class="text-h2 text-white">First stop</div>
          <p class="text-subtitle1 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deserunt distinctio nisi officia? Vero, id nulla eius maxime 
            amet repudiandae earum saepe expedita distinctio inventore, 
            reiciendis ipsam incidunt voluptate? Laudantium, ea.
          </p>
          <q-btn color="white" style="border-radius: 15px;" class="text-red q-py-md" label="clique para participar"></q-btn>
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
    <section class="q-pa-xl">
      <!-- Section title -->
      <h1 class="text-h4 text-center text-primary q-mt-none">
        Instituições mais procuradas essa semana
      </h1>

      <!-- Text and image -->
      <div class="row justify-around">
        <!-- Organization -->
        <div class="text-center col-3">
          <p class="text-h6"> 
            Recebeu mais de 8000 doações essa semana
          </p>
          <q-icon size="120px" name="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </div>

        <!-- Organization -->
        <div class="text-center col-3">
          <p class="text-h6"> 
            Recebeu mais de 8000 doações essa semana
          </p>
          <q-icon size="120px" name="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </div>

        <!-- Organization -->
        <div class="text-center col-3">
          <p class="text-h6"> 
            Recebeu mais de 8000 doações essa semana
          </p>
          <q-icon size="120px" name="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </div>
      </div>
    </section>

    <!-- Campaigns -->
    <section class="q-pa-xl">
      <!-- Section title -->
      <h1 class="text-h4 text-center text-primary q-mt-none">
        Campanhas mais populares da semana
      </h1>

      <!-- Texts and image -->
      <div class="row justify-around">
        <!-- Campaign -->
        <div class="text-center col-3">
          <h3 class="text-red text-h5">
            Compra de respiradores para Taquaritinga
          </h3>
          <p class="text-subtitle1"> 
            Arrecadou mais de R$ 20.000,00
          </p>
          <q-icon size="120px" name="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </div>

        <!-- Campaign -->
        <div class="text-center col-3">
          <h3 class="text-red text-h5">
            Compra de agasalho para moradores de rua
          </h3>
          <p class="text-subtitle1"> 
            Arrecadou mais de R$ 10.000,00
          </p>
          <q-icon size="120px" name="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </div>

        <!-- Campaign -->
        <div class="text-center col-3">
          <h3 class="text-red text-h5">
            Compra de alimentos para Orfanato XYZ
          </h3>
          <p class="text-subtitle1"> 
            Arrecadou mais de R$ 12.000,00
          </p>
          <q-icon size="120px" name="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </div>
      </div>
    </section>

    <!-- Divulgation -->
    <section id="divulgation" class="flex justify-center items-center q-py-xs">
      <!-- Content -->
      <div id="divulgation-content" class="text-center">
        <q-btn color="white q-px-xl q-py-md" rounded class="text-black" label="clique aqui" size="22px" />
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: "first",
      autoplay: true
    }
  }
}
</script>
<style>
/* Carousel */
/* Carousel */
.carousel-slide{
  background-size: 100% 100%;
}



/* Divulgation */
#divulgation{
  height: 100vh;

  background-color: #00A5F7;
  background-image: url("../assets/divulgation/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
}
#divulgation-content button{
  transform: translateY(40px);
}
</style>