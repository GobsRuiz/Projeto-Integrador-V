<template>
  <q-page class="q-py-xl">
        <h1 id="campaigns-title" class="text-h3 textColor-blue text-center q-mb-xl">
            Campanhas em busca de doações
        </h1>
        
        <!-- Search -->
        <div style="width: 80%; margin: 0 auto;" class="text-center">
            <q-input debounce="500" filled placeholder="Search" class="bg-white">
                <template v-slot:prepend>
                <q-icon
                    name="search"
                    class="bg-light-blue-6 text-white q-pa-md q-px-xl gt-xs"
                    style="transform: translateX(-12px)"
                />
                </template>
                <template v-slot:after>
                <q-icon
                    name=""
                    class="bg-light-blue-6 text-white q-pa-md q-px-xl gt-xs"
                    style="transform: translateX(-12px)"
                />
                </template>
            </q-input>

            <!-- xs < -->
            <q-btn id="divSearch-mobileBtn" class="bg-light-blue-6 q-px-md q-py-xs">
                <q-icon
                    name="search"
                    class="text-white"
                />
            </q-btn>
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
                <q-tab name="all" label="Todos" class="text-white q-px-xl campaigns-tabs-tab" />
                <q-tab name="campaigns" label="Campanhas" class="text-white q-px-xl campaigns-tabs-tab" />
                <q-tab name="charityEvents" label="Eventos beneficentes" class="text-white q-px-xl campaigns-tabs-tab" />
            </q-tabs>
        </div>

        <!-- Campaigns -->
        <section class="q-mt-xl">
            <!-- Cards -->
            <div id="campaigns-cards">
                <!-- Row -->
                <div id="campaigns-row" class="row justify-around q-mb-xl">
                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-apae.png"
                        alt=""
                        class="card-img"
                        />
                    </div>

                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-cancerInfantil.png"
                        alt=""
                        class="card-img"
                        />
                    </div>

                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-luisaMel.png"
                        alt=""
                        class="card-img"
                        />
                    </div>

                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-luisaMel.png"
                        alt=""
                        class="card-img"
                        />
                    </div>
                </div>

                <!-- Row -->
                <div id="campaigns-row" class="row justify-around q-mb-xl">
                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-apae.png"
                        alt=""
                        class="card-img"
                        />
                    </div>

                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-cancerInfantil.png"
                        alt=""
                        class="card-img"
                        />
                    </div>

                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-luisaMel.png"
                        alt=""
                        class="card-img"
                        />
                    </div>

                    <!-- Organization -->
                    <div class="campaigns-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                        <p class="text-h6">
                        Recebeu mais de 8000 doações essa semana
                        </p>
                        <img
                        src="../assets/index/organizations/instituto-luisaMel.png"
                        alt=""
                        class="card-img"
                        />
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
/* Search */
/* Mobile button */
#divSearch-mobileBtn{
    display: none;
}



/* Title */
#campaigns-title{
    font-size: 34px;
}


.q-tabs__content{
    border: 1px solid red;
}
/* Campaigns */
#campaigns-tabs-qtab{
    display: inline-block;
    background-color: #00A5F7;
}



/* Cards */
.card-img{
    width: 80%;
}





/* Responsive */
/* 700 */
@media (max-width: 700px) {
    .campaigns-tabs-tab{
        padding: 0 10px;
    }

    /* Search */
    /* Mobile button */
    #divSearch-mobileBtn{
        display: inline-block;
    }





    /* Content */
    #campaigns-cards{
        width: 90%;
        height: 260px;

        overflow-y: scroll;

        margin: 0 auto;
    }

    /* Row */
    #campaigns-row{
        margin-bottom: 0;
    }

    /* Card */
    .campaigns-row-card{
        min-width: 100%;

        margin: 0;
        margin-bottom: 30px;
    }
    .campaigns-row-card img{
        width: 200px;
        height: 200px;
    }
}

/* 400 */
@media (max-width: 400px) {
    #campaigns-tabs-qtab{
        padding: 0;
    }
    .campaigns-tabs-tab{
        padding: 0 10px;
    }
}
</style>