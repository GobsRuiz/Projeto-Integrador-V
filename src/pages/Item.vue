<template>
  <q-page>
    <div class="q-pa-md q-gutter-md">
      <q-list separator bordered class="rounded-borders">
        <q-item-label header class="text-h3 text-blue text-center q-py-xl">Lista de produtos requisitados para o asilo</q-item-label>
                <q-separator />
    
    <div class="flex items-center justify-center bg-light-blue-1 q-pa-md">

          <div class="row justify-center">
          <div class="column items-center justify-center">
                <q-btn class="q-py-sm" icon="add" to="/itemcadastro" color="primary" label="Cadastrar novo produto"/>
          </div>
        </div>

    </div>

        <q-item v-for="item in items" :key="item.id">
          <q-item-section avatar>
              <span class="text-weight-bold text-h5 text-primary">Cadastro Nº: {{ item.id }}</span>
          </q-item-section>
                      <q-separator vertical />

          <q-item-section top class="q-pa-md text-black">
              <q-item-label caption lines="1">
              <span class="cursor-pointer text-weight-bold text-h5 text-black">Produto: {{ item.nome }}</span>
            </q-item-label>
               <q-item-label caption lines="1">
              <span class="cursor-pointer text-weight-bold text-h5 text-black">Quantidade necessária: {{ item.quantidade }}</span>
            </q-item-label>
            <q-item-label lines="1" class="text-weight-bold text-h5 text-black  ">
              <span class="cursor-pointer">Valor do produto (em reais): {{ item.valor }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn size="18px" flat dense round icon="edit" @click="alterar(item.id)" />
              <q-btn size="18px" flat dense round icon="delete" @click="remover(item.id)" />
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
  name: 'PageItem',
  methods: {
    ...mapActions('mainstore', ['obterItems','selecionarItem','removerItem']),
    abrirCadastroItem () {
      this.$router.push('/itemcadastro')
    },
    alterar (itemId) {
      this.selecionarItem(itemId)
      this.$router.push('/itemalteracao')
    },
    remover (itemId) {
      this.$q.dialog({
        title: 'Confirma',
        message: 'Tem certeza que deseja excluir o item?',
        cancel: {
          label: 'Cancelar'
        },
        ok: {
          label: 'OK'
        },
        persistent: true
      }).onOk(() => {
        this.removerItem(itemId)
        Notify.create({ color: 'positive', position: 'top', message: 'Item Excluído!'})  
      }).onCancel(() => {
        
      })
    }
  },
  computed: {
    ...mapGetters('mainstore', ['items'])
  },
  created () {
    this.obterItems()
  }
}
</script>
