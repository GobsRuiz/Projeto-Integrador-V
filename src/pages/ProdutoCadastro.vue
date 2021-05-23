<template>
  <q-page>
  	<div class="q-pa-md">
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="nome" label="Nome" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="valor" label="Valor" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-btn color="primary" label="Cadastrar" @click="cadastrarProduto()" />
    	</div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
  	return {
  		nome: '',
  		valor: ''
  	}
  },
  methods: {
  	...mapActions('mainstore',['adicionarProduto']),
  	async cadastrarProduto () {
  		await this.adicionarProduto({ nome: this.nome, valor: this.valor })
  		this.$router.push('/produto')
  	}
  }
}
</script>
