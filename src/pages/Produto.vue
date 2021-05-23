<template>
  <q-page>
    <div class="q-pa-md q-gutter-md">
      <q-list bordered class="rounded-borders">
        <q-item-label header>Lista de Produtos</q-item-label>

        <q-item v-for="produto in produtos" :key="produto.id">
          <q-item-section avatar top>
            <q-icon name="account_tree" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">GitHub</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">{{ produto.id }}</span>
              <span class="text-grey-2"></span>
            </q-item-label>
            <q-item-label caption lines="1">
              <span class="text-weight-medium text-weight-bold">
                {{ produto.nome }}
              </span>
            </q-item-label>
            <q-item-label lines="1" class="text-body2 text-weight-bold text-primary text-uppercase">
              <span class="cursor-pointer">{{ produto.valor }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn size="18px" flat dense round icon="edit" @click="alterar(produto.id)" />
              <q-btn size="18px" flat dense round icon="delete" @click="remover(produto.id)" />
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
      @click="abrirCadastroProduto()"
    >
      <q-icon name="add" />
    </q-btn> 
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageProduto',
  methods: {
    ...mapActions('mainstore', ['obterProdutos','selecionarProduto','removerProduto']),
    abrirCadastroProduto () {
      this.$router.push('/produtocadastro')
    },
    alterar (produtoId) {
      this.selecionarProduto(produtoId)
      this.$router.push('/produtoalteracao')
    },
    remover (produtoId) {
      this.$q.dialog({
        title: 'Confirma',
        message: 'Tem certeza que deseja excluir o produto?',
        cancel: {
          label: 'Cancelar'
        },
        ok: {
          label: 'OK'
        },
        persistent: true
      }).onOk(() => {
        this.removerProduto(produtoId)
        Notify.create({ color: 'positive', position: 'top', message: 'Produto Excluído!'})  
      }).onCancel(() => {
        
      })
    }
  },
  computed: {
    ...mapGetters('mainstore', ['produtos'])
  },
  created () {
    this.obterProdutos()
  }
}
</script>
