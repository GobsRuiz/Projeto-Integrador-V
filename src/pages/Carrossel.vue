<template>
  <q-page>
    <div class="q-pa-md q-gutter-md">
      <q-list bordered class="rounded-borders">
        <q-item-label header>Lista de Imagens no Carrossel</q-item-label>

        <q-item v-for="carrossel in carrossels" :key="carrossel.id">
          <q-item-section avatar top>
            <q-icon name="account_tree" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">{{ carrossel.id }}</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">{{ carrossel.id }}</span>
              <span class="text-grey-2"></span>
            </q-item-label>
            <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ carrossel.titulo }}
              </span>
            </q-item-label>
            <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ carrossel.texto }}
              </span>
            </q-item-label>
             <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ carrossel.img }}
              </span>
            </q-item-label>
              <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ carrossel.position }}
              </span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn size="18px" flat dense round icon="edit" @click="alterar(carrossel.id)" />
              <q-btn size="18px" flat dense round icon="delete" @click="remover(carrossel.id)" />
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
      @click="abrirCadastroCarrossel()"
    >
      <q-icon name="add" />
    </q-btn> 
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageCarrossel',
  methods: {
    ...mapActions('mainstore', ['obterCarrossels','selecionarCarrossel','removerCarrossel']),
    abrirCadastroCarrossel () {
      this.$router.push('/carrosselcadastro')
    },
    alterar (carrosselId) {
      this.selecionarCarrossel(carrosselId)
      this.$router.push('/carrosselalteracao')
    },
    remover (carrosselId) {
      this.$q.dialog({
        title: 'Confirma',
        message: 'Tem certeza que deseja excluir essa imagem?',
        cancel: {
          label: 'Cancelar'
        },
        ok: {
          label: 'OK'
        },
        persistent: true
      }).onOk(() => {
        this.removerCarrossel(carrosselId)
        Notify.create({ color: 'positive', position: 'top', message: 'Imagem Excluída!'})  
      }).onCancel(() => {
        
      })
    }
  },
  computed: {
    ...mapGetters('mainstore', ['carrossels'])
  },
  created () {
    this.obterCarrossels()
  }
}
</script>
