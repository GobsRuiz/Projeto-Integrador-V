<template>
  <q-page>
	      <h1 class="text-h3 text-blue text-center q-pt-xl">
	Cadastrar novo produto
    	</h1>
		    <div class="flex items-center justify-center q-pa-xl">

          <div class="row justify-center">
          <div class="column items-center justify-center">
                <q-btn class="q-py-sm" icon="fas fa-arrow-left" to="/item" color="primary" label="Voltar para a listagem de produtos"/>
          </div>
        </div>

    </div>
	                      <q-separator />

  	<div class="q-py-xl row justify-center items-center">
    	<div class="q-gutter-md q-pb-md col-8 justify-center">
    		<q-input bg-color="light-blue-1" outlined v-model="nome" label="Nome" />
    	</div>
        <div class="q-gutter-md q-pb-md col-8 justify-center">
    		<q-input bg-color="light-blue-1" outlined v-model="quantidade" label="Quantidade" />
    	</div>
    	<div class="q-gutter-md q-pb-md col-8 justify-center">
    		<q-input bg-color="light-blue-1" outlined v-model="valor" label="Valor" />
    	</div>

	      <div class="col-12 items-center justify-center q-pa-md">
			<div class="row justify-center">
				<div class="column items-center justify-center">
				<q-btn color="primary" label="Cadastrar" @click="cadastrarItem()" />
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
  name: 'PageIndex',
  data () {
  	return {
  		nome: '',
        quantidade: '',
  		valor: ''
  	}
  },
  methods: {
  	...mapActions('mainstore',['adicionarItem']),
  	async cadastrarItem () {
  		await this.adicionarItem({ nome: this.nome, quantidade: this.quantidade, valor: this.valor })
  		this.$router.push('/item')
  	}
  }
}
</script>
