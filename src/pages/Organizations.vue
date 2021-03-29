<template>
  <q-page class="q-py-xl">
    <!-- Title -->
    <h1 class="text-h3 textColor-blue text-center q-mb-xl q-px-md">
      Organizações em busca de ajuda
    </h1>

    <!-- Search field -->
    <div id="divSearch" style="width: 80%; margin: 0 auto;" class="text-center">
        <!-- > xs -->
      <q-input debounce="500" filled placeholder="Search" class="bg-white gt-xs">
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

    <!-- Organizations -->
    <section class="q-mt-xl">
        <!-- Cards -->
        <div id="organizations-cards">
            <!-- Row -->
            <div id="organizations-row" class="row justify-around q-mb-xl">
                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-apae.png"
                    alt=""
                    class="card-img"
                    />
                </div>

                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-cancerInfantil.png"
                    alt=""
                    class="card-img"
                    />
                </div>

                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-luisaMel.png"
                    alt=""
                    class="card-img"
                    />
                </div>

                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-luisaMel.png"
                    alt=""
                    class="card-img"
                    />
                </div>
            </div>

            <!-- Row -->
            <div id="organizations-row" class="row justify-around q-mb-xl">
                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-apae.png"
                    alt=""
                    class="card-img"
                    />
                </div>

                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-cancerInfantil.png"
                    alt=""
                    class="card-img"
                    />
                </div>

                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-luisaMel.png"
                    alt=""
                    class="card-img"
                    />
                </div>

                <!-- Organization -->
                <div class="organizations-row-card text-center text-red col-sm-4 col-md-2 q-mx-sm q-mb-md">
                    <p class="text-h6">
                    Recebeu mais de 8000 doações essa semana
                    </p>
                    <img
                    src="../assets/organizations/instituto-luisaMel.png"
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
export default {};
</script>

<style scoped>
/* Search */
/* Mobile button */
#divSearch-mobileBtn{
    display: none;
}





/* Cards */
.card-img {
  width: 100%;
}





/* Responsive */
/* 700 */
@media (max-width: 600px) {
    /* Search */
    /* Mobile button */
    #divSearch-mobileBtn{
        display: inline-block;
    }





    /* Content */
    #organizations-cards{
        width: 90%;
        height: 260px;

        overflow-y: scroll;

        margin: 0 auto;
    }

    /* Row */
    #organizations-row{
        margin-bottom: 0;
    }

    /* Card */
    .organizations-row-card{
        min-width: 100%;

        margin: 0;
        margin-bottom: 30px;
    }
    .organizations-row-card img{
        width: 200px;
        height: 200px;
    }
}
</style>
