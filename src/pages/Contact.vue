<template>
  <q-page class="flex" id="bgdefault">
<div class="q-py-xl">

    <div title="textos" class="row justify-center">
    <h1 id="organizations-title" class="text-h3 textColor-blue text-center q-mb-xl q-px-md">
ENTRE EM CONTATO COM A GENTE!
    </h1>
</div>


 <div class="q-py-md justify-between row">

    <div class="col-5 q-py-xl">
        <p class="text-right text-h5 text-weight-bolder">
Deseja ter sua instituição divulgada aqui?
Entre em contato através de uma das
redes sociais abaixo:
    </p>
    <img src="../assets/contact/imgcontato.svg" alt="">
</div>

<div class="col-5 justify-end q-mx-sm"> 
            <p class="text-center q-py-xl text-h5 text-weight-bolder">
OU NOS ENVIE UMA MENSAGEM!
    </p>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md bg-light-blue-1 q-pa-xl"
    >
      <q-input
      class="q-pa-sm"
        filled
        v-model="name"
        label="Digite seu nome, por favor. *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite seu nome.']"
      />

      <q-input
        filled
        v-model="city"
        label="Digite sua cidade, por favor. *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite sua cidade.']"
      />


      <q-input
      label="Digite sua mensagem, por favor."
      v-model="message"
      filled
      type="textarea"
      lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite sua mensagem.']"
    />

      <div class="row justify-around q-py-md">
        <q-btn label="Enviar mensagem" type="submit" color="primary"/>
        <q-btn label="Apagar" type="reset" color="red" class="q-ml-sm" />
      </div>
    </q-form>
</div>
  </div>

</div>
  </q-page>
</template>

<script>
export default {
 data () {
    return {
      name: null,
      city: null,
      message: null,  
    }
  },

  methods: {
    onReset () {
      this.name = null
      this.city = null
      this.message = null
    }
  }
}
</script>

<style>
#bgdefault{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;}
</style>