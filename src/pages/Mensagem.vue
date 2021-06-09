<template>
  <q-page>
    <div class="q-pa-md q-gutter-md">
      <q-list separator bordered class="rounded-borders">
        <q-item-label header class="text-h3 text-blue text-center q-py-xl">Lista de mensagens enviadas para o asilo</q-item-label>
                <q-separator />
    
    <div class="flex items-center justify-center bg-light-blue-1 q-pa-md">

          <div class="row justify-center">
          <div class="column items-center justify-center">
          </div>
        </div>

    </div>

        <q-item v-for="mensagem in mensagens" :key="mensagem.id">
          <q-item-section avatar>
              <span class="text-weight-bold text-h5 text-primary">Mensagem Nº: {{ mensagem.id }}</span>
          </q-item-section>
                      <q-separator vertical />

          <q-item-section top class="q-pa-md text-black">
              <q-item-label caption lines="1">
              <span class="cursor-pointer text-weight-bold text-h5 text-black">Usuário: {{ mensagem.nome }}</span>
            </q-item-label>
               <q-item-label caption lines="1">
              <span class="cursor-pointer text-weight-bold text-h5 text-black">Cidade: {{ mensagem.cidade }}</span>
            </q-item-label>
            <q-item-label lines="1" class="text-center text-weight-bold text-h5 text-black  ">
              <span class="cursor-pointer">Mensagem: <br>  {{ mensagem.mensagem }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn size="18px" flat dense round icon="edit" @click="alterar(mensagem.id)" />
              <q-btn size="18px" flat dense round icon="delete" @click="remover(mensagem.id)" />
            </div>
          </q-item-section>

        </q-item>
      </q-list>      
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageMensagem',
  methods: {
    ...mapActions('mainstore', ['obterMensagens','selecionarMensagem','removerMensagem']),
    abrirCadastroMensagem () {
      this.$router.push('/contato')
    },
    alterar (mensagemId) {
      this.selecionarMensagem(mensagemId)
      this.$router.push('/mensagemalteracao')
    },
    remover (mensagemId) {
      this.$q.dialog({
        title: 'Confirma',
        message: 'Tem certeza que deseja excluir o mensagem?',
        cancel: {
          label: 'Cancelar'
        },
        ok: {
          label: 'OK'
        },
        persistent: true
      }).onOk(() => {
        this.removerMensagem(mensagemId)
        Notify.create({ color: 'positive', position: 'top', message: 'Mensagem Excluído!'})  
      }).onCancel(() => {
        
      })
    }
  },
  computed: {
    ...mapGetters('mainstore', ['mensagens'])
  },
  created () {
    this.obterMensagens()
  }
}
</script>
