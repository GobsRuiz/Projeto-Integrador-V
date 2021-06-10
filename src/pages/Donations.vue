<template>
  <q-page>
    <div class="q-pa-xl">
      <h3 class="text-center text-blue q-py-md">DESCUBRA AQUI COMO AJUDAR</h3>
<p class="text-h5 text-center text-weight-bold q-mb-xl">
Lembre-se: o pouco para você pode ser muito para eles, e a sua ajuda será
importantíssima em nossa luta constante por mais qualidade de vida aos
nossos vovôs e vovós. 
</p>

<div class="row">

<div class="col-sm-12 col-md-4 q-py-xl">
<p class="text-h5 text-center text-weight-bold text-blue">DEPÓSITO OU TRANSFERÊNCIA BANCÁRIA:</p>

    <p class="text-center"><img src="../assets/index/campaings/idosos.svg" alt="" style="height:260px; width: 260px"></p>

<p class="text-h5 text-center text-weight-bold">
FUNDAÇÃO JOSÉ CARLOS DA ROCHA
CNPJ: 47.059.126/0001-03
BANCO ITAÚ
AGÊNCIA: XXXX
</p>
</div>


<div class="col-sm-12 col-md-4">
<h2 class="text-center text-blue text-weight-bold">OU</h2>
</div>

<div class="col-sm-12 col-md-4 q-py-xl">
  <p class="text-h5 text-center text-weight-bold text-blue">DOE PELO PIX ATRAVES DO QRCODE ABAIXO</p>

    <p class="text-center"><img src="../assets/index/campaings/qrcode.png" alt="" style="height:270px;"></p>
    <p class="text-h5 text-center text-weight-bold text-uppercase">
Ou use nossa chave PIX, que é nosso CNPJ: 08.052.116/0001-86

</p>
</div>

</div>


      <h3 class="text-center text-blue q-py-md">LISTA DE ITENS NECESSÁRIOS PARA OS RESIDENTES</h3>

<p class="text-h5 text-center text-weight-bold">
  Você pode doar o valor pela nossa conta corrente, ou pelo nosso pix,, ou então você pode
  doar diretamente no asilo, endereço na página de contato.

</p>

 <div class="q-pa-xl">
 <q-table card-class="bg-light-blue-5 text-weight-bold text-uppercase" hide-bottom :data="items" bordered
  class="responsive text-center" separator="cell"
  >
   <tr slot="header" class="bg-grey-4">
       <q-th>
      <span><strong>Nº do produto</strong></span>
    </q-th>
    <q-th>
      <span><strong>NOME DO PRODUTO</strong></span>
    </q-th>
      <q-th>
      <span><strong>QUANTIDADE (UNIDADE)</strong></span>
    </q-th>
     <q-th>
      <span><strong>VALOR (EM REAIS)</strong></span>
    </q-th>
   </tr>
  </q-table>
  </div>


    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageDonations',
   methods: {
    ...mapActions('mainstore', ['obterItems']),
  },
  computed: {
    ...mapGetters('mainstore', ['items'])
  },
  created () {
    this.obterItems()
  }
}
</script>

<style>
.text-right {
  text-align: center;
}

table.q-table thead th {
      font-size: 20px !important;

 }

table.q-table tbody td {
    font-size: 20px !important;
}

.text-left {
  text-align: center;
}
</style>
