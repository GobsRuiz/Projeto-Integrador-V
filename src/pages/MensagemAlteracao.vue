<template>
  <q-page>
  	<div class="q-pa-md">
      <div class="q-gutter-md q-pb-md">
        <q-input outlined v-model="mensagemSelecionado.id" label="Id" :disable="true" />
      </div>      
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="mensagemSelecionado.nome" label="Nome" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model.number="mensagemSelecionado.cidade" label="Valor" />
    	</div>
        	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model.number="mensagemSelecionado.mensagem" label="Valor" />
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
  name: 'PageMensagemAlteracao',
  data () {
  	return {
  		nome: '',
  		cidade: '',
        mensagem: ''

  	}
  },
  methods: {
  	...mapActions('mainstore',['alterarMensagem']),
  	async alterar () {
      await this.alterarMensagem(this.mensagemSelecionado)
      this.$router.push('/mensagem')
  	}
  },
  computed: {
    ...mapGetters('mainstore', ['mensagemSelecionado'])
  }
}
</script>
