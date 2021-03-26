<template>
  <q-page class="q-py-xl">
        <h1 class="text-h3 textColor-blue text-center q-mb-xl">
            Campanhas em busca de doações
        </h1>
        
        <!-- Search -->
        <div style="width: 80%; margin: 0 auto;">
            <q-input
                debounce="500"
                filled
                placeholder="Search"
                class="bg-white"
            >
                <template v-slot:prepend>
                    <q-icon name="search" class="bg-primary text-white q-pa-md q-px-xl" style="transform: translateX(-12px)" />
                </template>
                <template v-slot:after>
                    <q-icon name="" class="bg-primary text-white q-pa-md q-px-xl" style="transform: translateX(-12px)" />
                </template>
            </q-input>
        </div>

        <!-- Tabs -->
        <div id="campaigns-tabs" class="flex justify-center q-mt-md">
            <q-tabs
              v-model="tab"
              inline-label
              narrow-indicator
              indicator-color="white"
              class="text-teal q-pa-md"
              id="campaigns-tabs-qtab"
            >
                <q-tab name="all" label="Todos" class="text-white q-px-xl" />
                <q-tab name="campaigns" label="Campanhas" class="text-white q-px-xl" />
                <q-tab name="charityEvents" label="Eventos beneficentes" class="text-white q-px-xl" />
            </q-tabs>
        </div>

        <!-- Organizations -->
        <section class="q-mt-xl">
            <!-- Text and image -->
            <div class="row">
                <div class="row justify-around q-mb-lg">
                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                    <p class="text-h6"> 
                        Recebeu mais de 8000 doações essa semana
                    </p>
                    <img src="../assets/organizations/instituto-cancerInfantil.png" alt="" class="card-img">
                    </div>

                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                    <p class="text-h6"> 
                        Recebeu mais de 8000 doações essa semana
                    </p>
                    <img src="../assets/organizations/instituto-luisaMel.png" alt="" class="card-img">
                    </div>

                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                        <p class="text-h6"> 
                            Recebeu mais de 8000 doações essa semana
                        </p>
                        <img src="../assets/organizations/instituto-apae.png" alt="" class="card-img">
                    </div>

                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                    <p class="text-h6"> 
                        Recebeu mais de 8000 doações essa semana
                    </p>
                    <img src="../assets/organizations/instituto-apae.png" alt="" class="card-img">
                    </div>
                </div>

                <div class="row justify-around q-mb-lg">
                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                    <p class="text-h6"> 
                        Recebeu mais de 8000 doações essa semana
                    </p>
                        <img src="../assets/organizations/instituto-cancerInfantil.png" alt="" class="card-img">
                    </div>

                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                    <p class="text-h6"> 
                        Recebeu mais de 8000 doações essa semana
                    </p>
                    <img src="../assets/organizations/instituto-luisaMel.png" alt="" class="card-img">
                    </div>

                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                    <p class="text-h6"> 
                        Recebeu mais de 8000 doações essa semana
                    </p>
                    <img src="../assets/organizations/instituto-apae.png" alt="" class="card-img">
                    </div>

                    <!-- Organization -->
                    <div class="text-center text-red col-2">
                    <p class="text-h6"> 
                        Recebeu mais de 8000 doações essa semana
                    </p>
                    <img src="../assets/organizations/instituto-apae.png" alt="" class="card-img">
                    </div>
                </div>
            </div>
        </section>
  </q-page>
</template>

<script>
export default {
    data () {
        return {
            tab: 'all'
        }
    }
}
</script>

<style scoped>
/* Campaigns */
#campaigns-tabs-qtab{
    display: inline-block;
    background-color: #00A5F7;
}



/* Cards */
.card-img{
    width: 100%;
}
</style>