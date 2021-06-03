<template>
  <q-page>
  	<div class="q-pa-md">
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="titulo" label="Titulo" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="texto" label="Texto" />
    	</div>
        	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="img" label="Imagem" />
    	</div>
		 	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="position" label="Posição" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-btn color="primary" label="Cadastrar" @click="cadastrarCarrossel()" />
    	</div>
    </div>
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
