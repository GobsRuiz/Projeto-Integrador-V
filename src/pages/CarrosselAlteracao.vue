<template>
  <q-page>
  	<div class="q-pa-md">
      <div class="q-gutter-md q-pb-md">
        <q-input outlined v-model="carrosselSelecionado.id" label="Id" :disable="true" />
      </div>      
    	<div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="carrosselSelecionado.titulo" label="Titulo" />
    	</div>
    <div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="carrosselSelecionado.texto" label="Texto" />
    	</div>
        <div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="carrosselSelecionado.img" label="Imagem" />
    	</div>
         <div class="q-gutter-md q-pb-md">
    		<q-input outlined v-model="carrosselSelecionado.position" label="Posição" />
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
  		titulo: '',
  		texto: '',
        img: ''
  	}
  },
  methods: {
  	...mapActions('mainstore',['alterarCarrossel']),
  	async alterar () {
      await this.alterarCarrossel(this.carrosselSelecionado)
      this.$router.push('/carrossel')
  	}
  },
  computed: {
    ...mapGetters('mainstore', ['carrosselSelecionado'])
  }
}
</script>
