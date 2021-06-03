<template>
  <q-page>
    <div class="q-pa-md q-gutter-md">
      <q-list bordered class="rounded-borders">
        <q-item-label header>Lista de Mensagens</q-item-label>

        <q-item v-for="mensagem in mensagens" :key="mensagem.id">
          <q-item-section avatar top>
            <q-icon name="account_tree" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">{{ mensagem.id }}</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">{{ mensagem.id }}</span>
              <span class="text-grey-2"></span>
            </q-item-label>
            <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ mensagem.nome }}
              </span>
            </q-item-label>
            <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ mensagem.cidade }}
              </span>
            </q-item-label>
             <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ mensagem.mensagem }}
              </span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn size="18px" flat dense round icon="edit" @click="alterar(mensagem.id)" />
              <q-btn size="18px" flat dense round icon="delete" @click="remover(mensagem.id)" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator spaced />
      </q-list>      
    </div>
    <q-btn
      round
      color="primary"
      class="fixed"
      style="right: 18px; bottom: 18px"
      @click="abrirCadastroMensagem()"
    >
      <q-icon name="add" />
    </q-btn> 
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
        message: 'Tem certeza que deseja excluir essa mensagem?',
        cancel: {
          label: 'Cancelar'
        },
        ok: {
          label: 'OK'
        },
        persistent: true
      }).onOk(() => {
        this.removerMensagem(mensagemId)
        Notify.create({ color: 'positive', position: 'top', message: 'Mensagem Excluída!'})  
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
