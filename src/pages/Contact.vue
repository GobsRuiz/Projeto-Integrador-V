<template>
  <q-page class="flex" style="justify-content: center;" id="bgdefault">
<div class="q-py-xl">

    <div title="textos" class="row justify-center">
    <h1 id="organizations-title" class="text-h3 textColor-blue text-center q-mb-xl q-px-md">
ENTRE EM CONTATO COM A GENTE!
    </h1>
</div>


 <div class="q-py-md justify-between row">

    <div class="col-md-6 col-sm-12 q-py-xl">
        <p class="text-center q-mx-md text-h5 text-weight-bolder">
Entre em contato com a gente também através do nosso e-mail ou uma das
redes sociais abaixo:
    </p>
    <img src="../assets/contact/imgcontato.svg" alt="">
</div>

<div id="formulario" class="col-md-5 q-mx-sm"> 
            <p class="text-center q-py-xl text-h5 text-weight-bolder">
OU NOS ENVIE UMA MENSAGEM!
    </p>
    <q-form
      @reset="onReset"
      class="q-gutter-md bg-light-blue-1 q-pa-xl"
    >
      <q-input
      class="q-pa-sm"
        filled
        v-model="nome"
        label="Digite seu nome, por favor. *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite seu nome.']"
      />

      <q-input
        filled
        v-model="cidade"
        label="Digite sua cidade, por favor. *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite sua cidade.']"
      />


      <q-input
      label="Digite sua mensagem, por favor."
      v-model="mensagem"
      filled
      type="textarea"
      lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite sua mensagem.']"
    />

      <div class="row justify-around q-py-md">
        <q-btn label="Enviar mensagem" color="primary" @click="cadastrarMensagem()"/>
        <q-btn label="Apagar" type="reset" color="red" class="q-ml-sm" />
      </div>
    </q-form>
</div>
  </div>

</div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
 data () {
    return {
      nome: '',
      cidade: '',
      mensagem: '',  
    }
  },

  methods: {
    onReset () {
      this.nome = null
      this.cidade = null
      this.mensagem = null
    },
    ...mapActions('mainstore',['adicionarMensagem']),
  	async cadastrarMensagem () {
  		await this.adicionarMensagem({ nome: this.nome, cidade: this.cidade, mensagem: this.mensagem })
      this.nome = ' '
      this.cidade = ' '
      this.mensagem = ' '
  	}
  }
}
</script>

<style scoped>
#bgdefault{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;}

  @media(max-width: 1025px){
    #formulario{
      width: 100%;
    }
  }
</style>