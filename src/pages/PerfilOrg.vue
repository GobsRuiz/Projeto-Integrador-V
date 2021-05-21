<template>
  <q-page class=" q-pb-xl flex justify-center align-center">
     
<section title="cabeçalho 2" class="q-py-msm bg-light-blue-6 text-center text-white" id="sectionheader">

<img style="max-width: 400px" src="../assets/index/organizations/instituto-apae.png" alt="">
<h2>APAE BRASIL</h2>
<h5>Data de ingresso: 19/04/2021</h5>
<h5>Número de projetos criados: 2</h5>
</section>


<section title="tabs">
<div>
    <div class="q-gutter-y-md" style="max-width: 1000px; width:100%">
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="criados" label="Criados" />
          <q-tab name="sobre" label="Sobre" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated> 

          <q-tab-panel name="criados">
            <div class="text-h6 flex row justify-between">


                 <div>
                 <q-card class="my-card col q-mx-xl" style="max-width: 500px;">
      <q-img src="../assets/index/campaings/respiradores.jpg" style="width: 350px; height: 350px;" />
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Compra de respiradores
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
          <div class="q-pa-md">
    <q-linear-progress size="25px" :value="progress1" color="green">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="green" :label="progressLabel1" />
      </div>
    </q-linear-progress>
  </div>
   
        </q-card-section>

    <q-card-actions class="column justify-center align-center">
    <div class="text-subtitle1">
<p>Meta: 40.000,00</p>
<p>Alcançados: 10,00 (00,4)</p>
        </div>
      </q-card-actions>
    

      <q-card-actions class="column justify-center align-center q-pb-lg">
        <q-btn color="green" class="q-py-sm" flat icon="fas fa-hand-holding-usd"/>
                <q-btn color="green">
          Apoiar
        </q-btn>
      </q-card-actions>
    </q-card>
    </div>


     <div>
                 <q-card class="my-card col q-mx-xl">
      <q-img src="../assets/index/campaings/respiradores.jpg" style="width: 350px; height: 350px;" />
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Compra de respiradores
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
          <div class="q-pa-md">
    <q-linear-progress size="25px" :value="progress1" color="green">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="green" :label="progressLabel1" />
      </div>
    </q-linear-progress>
  </div>
   
        </q-card-section>

    <q-card-actions class="column justify-center align-center">
    <div class="text-subtitle1">
<p>Meta: 40.000,00</p>
<p>Alcançados: 10,00 (00,4)</p>
        </div>
      </q-card-actions>
    

      <q-card-actions class="column justify-center align-center q-pb-lg">
        <q-btn color="green" class="q-py-sm" flat icon="fas fa-hand-holding-usd"/>
                <q-btn color="green">
          Apoiar
        </q-btn>
      </q-card-actions>
    </q-card>
    </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="sobre">
            <div class="text-h6 row justify-between">
                <div class="col-5">
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident aut, odio qui, voluptatum esse culpa aliquid repellat omnis tenetur adipisci recusandae maxime eaque? At voluptas rerum debitis odit! Ut?
</p>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident aut, odio qui, voluptatum esse culpa aliquid repellat omnis tenetur adipisci recusandae maxime eaque? At voluptas rerum debitis odit! Ut?
</p>
</div>

                <div class="col-6">
                        <q-card class="my-card bg-grey-4">
      <q-card-section class="row justify-between">
                        <q-avatar color="white" class=" col-5" text-color="white"/>
                        <p class="col-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
      </q-card-section>
    </q-card>
</div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>



    </div>
  </div>
</section>
  </q-page>
</template>

<script>
export default {
  name: 'PerfilOrg',
  data () {
    return {
      tab: 'criados',
        progress1: 0.5,
    }
  },

  computed: {
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(2) + '%'
    }
  }
    }
</script>

<style scoped>


#sectionheader{

    width: 100%;
}

  #sectioncreation{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;
    transform: scaleY(-1);
  }

  #sectioncreation img, #sectionstory img{
  width: 350px;
  }
</style>
