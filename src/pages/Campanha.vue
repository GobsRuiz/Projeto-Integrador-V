<template>
  <q-page class=" q-pb-xl flex justify-center align-center">
    <section id="section-titulo" class="q-py-md">
      <h1>Titulo da campanha</h1>
    </section>
    <section class="row justify-center align-center" id="main-saction">
      <!-- midCard -->
      <div>
        <div class="q-pa-md row">
          <!-- div 2 primeiros cards -->
          <div class="col-6" style="width: 1000px;">
            <q-card class="my-card col">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="width: 750px; height: 500px;">
                <div class="absolute-bottom">
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </div>
              </q-img>
            </q-card>

            <q-card flat bordered class="my-card col-sm-12 col-md-6" style="max-width: 750px; height: 500px;">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
          <!-- div 2 primeiros cards fim-->
          <!-- ultima div -->
          <div class="col">
            <q-card flat bordered class="my-card col-sm-12 col-md-6">
              <q-card-section>
                <div class="text-h6 q-mx-xl">Our Changing Planet</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>

              <q-separator inset />

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <q-linear-progress
                    size="25px"
                    :value="progress1"
                    color="green"
                  >
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="green"
                        :label="progressLabel1"
                      />
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

              <q-card-actions
                class="column justify-center align-center q-pb-lg"
              >
                <q-btn
                  color="green"
                  class="q-py-sm"
                  flat
                  icon="fas fa-hand-holding-usd"
                />
                <q-btn color="green">
                  Apoiar
                </q-btn>
                <div class="row">
                  <q-btn
                    color="blue"
                    class="q-py-sm"
                    flat
                    icon="fab fa-facebook"
                  />
                  <q-btn
                    color="accent"
                    class="q-py-sm"
                    flat
                    icon="fab fa-instagram"
                  />
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <!-- ultima div fim -->
      </div>
      <!-- midCard -->
      <div></div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: "PerfilOrg",
  data() {
    return {
      tab: "mails",
      progress1: 0.5
    };
  },

  computed: {
    progressLabel1() {
      return (this.progress1 * 100).toFixed(2) + "%";
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

#section-titulo {
  width: 100%;
  text-align: center;
}
</style>
