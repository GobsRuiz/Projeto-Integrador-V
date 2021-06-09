<template>
  <q-page>
	 <h1 class="text-h3 text-blue text-center q-pt-xl">
	Cadastrar novo produto
    	</h1>
		    <div class="flex items-center justify-center q-pa-xl">

          <div class="row justify-center">
          <div class="column items-center justify-center">
                <q-btn class="q-py-sm" icon="fas fa-arrow-left" to="/carrossel" color="primary" label="Voltar para a listagem de imagens"/>
          </div>
        </div>

    </div>
	                      <q-separator />

  	<div class="q-py-xl row justify-center items-center">
    	<div class="q-gutter-md q-pb-md col-8 justify-center">
    		<q-input bg-color="light-blue-1" outlined v-model="titulo" label="Título" />
    	</div>
        <div class="q-gutter-md q-pb-md col-8 justify-center">
    		<q-input bg-color="light-blue-1" outlined v-model="texto" label="Texto" />
    	</div>
    	<div class="q-gutter-md q-pb-md col-8 justify-center">
    		<q-input bg-color="light-blue-1" outlined v-model="img" label="Imagem" />
    	</div>
		<div class="q-gutter-md q-pb-md col-8 justify-center">
    		<q-input bg-color="light-blue-1" outlined v-model="position" label="Posição" />
    	</div>

	      <div class="col-12 items-center justify-center q-pa-md">
			<div class="row justify-center">
				<div class="column items-center justify-center">
				<q-btn color="primary" label="Cadastrar" @click="cadastrarCarrossel()" />
				</div>
			</div>
    	  </div>

    </div>
	<div class="q-pa-md"></div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageCarrosselCadastro',
  data () {
  	return {
  		titulo: '',
  		texto: '',
        img: '' ,
		position: '' 
  	}
  },
  methods: {
  	...mapActions('mainstore',['adicionarCarrossel']),
  	async cadastrarCarrossel () {
  		await this.adicionarCarrossel({ titulo: this.titulo, texto: this.texto, img: this.img, position: this.position })
  		this.$router.push('/carrossel')
  	}
  }
}
</script>
