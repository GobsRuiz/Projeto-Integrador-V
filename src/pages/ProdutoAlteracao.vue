<template>
  <q-page>
  	<div class="q-pa-md">
      <div class="q-gutter-md q-pb-md">
        <q-input outlined v-model="produtoSelecionado.id" label="Id" :disable="true" />
      </div>      
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="produtoSelecionado.nome" label="Nome" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model.number="produtoSelecionado.valor" label="Valor" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-btn color="primary" label="Alterar" @click="alterar()" />
    	</div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageProdutoAlteracao',
  data () {
  	return {
  		nome: '',
  		valor: ''
  	}
  },
  methods: {
  	...mapActions('mainstore',['alterarProduto']),
  	async alterar () {
      await this.alterarProduto(this.produtoSelecionado)
      this.$router.push('/produto')
  	}
  },
  computed: {
    ...mapGetters('mainstore', ['produtoSelecionado'])
  }
}
</script>
