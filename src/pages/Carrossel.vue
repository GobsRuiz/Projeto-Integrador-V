<template>
  <q-page>
    <div class="q-pa-md q-gutter-md">
      <q-list separator bordered class="rounded-borders">
        <q-item-label header class="text-h3 text-blue text-center q-py-xl">Lista de imagens do carrossel da página inicial</q-item-label>
                <q-separator />
    
     <div class="flex items-center justify-center bg-light-blue-1 q-pa-md">

          <div class="row justify-center">
          <div class="column items-center justify-center">
                <q-btn class="q-py-sm" icon="add" to="/carrosselcadastro" color="primary" label="Cadastrar nova imagem"/>
          </div>
        </div>

    </div>

        <q-item v-for="carrossel in carrossels" :key="carrossel.id">
          <q-item-section avatar>
              <span class="text-weight-bold text-h5 text-primary">Imagem Nº: {{ carrossel.id }}</span>
          </q-item-section>
                      <q-separator vertical />

          <q-item-section top class="q-pa-md text-black">
              <q-item-label caption lines="1">
              <span class="cursor-pointer text-weight-bold text-h5 text-black">Título: {{ carrossel.titulo }}</span>
            </q-item-label>
               <q-item-label caption lines="1">
              <span class="cursor-pointer text-weight-bold text-h5 text-black">Texto: {{ carrossel.texto }}</span>
            </q-item-label>
            <q-item-label lines="1" class="text-weight-bold text-h5 text-black  ">
              <span class="cursor-pointer">Imagem: {{ carrossel.img }}</span>
            </q-item-label>
               <q-item-label lines="1" class="text-weight-bold text-h5 text-black  ">
              <span class="cursor-pointer">Posição: {{ carrossel.position }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn size="18px" flat dense round icon="edit" @click="alterar(carrossel.id)" />
              <q-btn size="18px" flat dense round icon="delete" @click="remover(carrossel.id)" />
            </div>
          </q-item-section>

        </q-item>
      </q-list>      
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Notify } from 'quasar'


export default {
  name: 'PageCarrossel',
  methods: {
    ...mapActions('mainstore', ['obterCarrossels','selecionarCarrossel','removerCarrossel']),
    abrirCadastroCarrossel () {
      this.$router.push('/contato')
    },
    alterar (carrosselId) {
      this.selecionarCarrossel(carrosselId)
      this.$router.push('/carrosselalteracao')
    },
    remover (carrosselId) {
      this.$q.dialog({
        title: 'Confirma',
        message: 'Tem certeza que deseja excluir o carrossel?',
        cancel: {
          label: 'Cancelar'
        },
        ok: {
          label: 'OK'
        },
        persistent: true
      }).onOk(() => {
        this.removerCarrossel(carrosselId)
        Notify.create({ color: 'positive', position: 'top', message: 'Carrossel Excluído!'})
              this.$router.push('/carrossel')
  
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
