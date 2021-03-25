<template>
  <q-page class="q-py-xl">
        <h1 class="text-h3 textColor-blue text-center q-mb-xl">
            Organizações em busca de ajuda
        </h1>

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

}
</script>

<style scoped>
/* Cards */
.card-img{
    width: 100%;
}

</style>