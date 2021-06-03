<template>
  <q-page>
  	<div class="q-pa-md">
      <div class="q-gutter-md q-pb-md">
        <q-input outlined v-model="itemSelecionado.id" label="Id" :disable="true" />
      </div>      
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="itemSelecionado.nome" label="Nome" />
    	</div>
        <div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="itemSelecionado.quantidade" label="Quantidade" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model.number="itemSelecionado.valor" label="Valor" />
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
  name: 'PageItemAlteracao',
  data () {
  	return {
  		nome: '',
        quantidade: '',
  		valor: ''
  	}
  },
  methods: {
  	...mapActions('mainstore',['alterarItem']),
  	async alterar () {
      await this.alterarItem(this.itemSelecionado)
      this.$router.push('/item')
  	}
  },
  computed: {
    ...mapGetters('mainstore', ['itemSelecionado'])
  }
}
</script>
