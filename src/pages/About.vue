<template>
  <q-page id="about" class="q-py-xl flex justify-center align-center">
        <section title="O QUE É O CENTRO DE DOAÇÕES?" class="q-pt-xl" id="sectioncreation">
        <div style="transform: scaleY(-1);">
    <h1 id="organizations-title" class="text-uppercase text-h3 textColor-blue text-center q-mb-xl q-px-md">
O que é o Lar São Vicente de Paulo?    </h1>
    <div class="row justify-center q-py-xl">
    <img src="../assets/about/faqabout.svg" alt="">
</div>
    <p class="text-center text-h5 text-weight-bolder">
O Asilo São Vicente de Paulo, é uma instituição de caridade situada na cidade de Taquaritinga/SP e tem como objetivo principal, atender da melhor forma possível os idosos que ali residem.

Com diversas parcerias pela cidade e da região, hoje o asilo atende aproximadamente 100 idosos que necessitam de atenção e cuidados especiais, idosos esses que são cuidados pelos funcionários que estão
sempre dispostos a os tratar com carinho.
    </p>
    </div>
    </section>

        <section title="COMO O CENTRO DE DOAÇÕES FOI CRIADO?" class="q-py-xl" id="sectionstory">
    <h1 id="organizations-title" class="text-uppercase text-h3 textColor-blue text-center q-mb-xl q-px-md">
Como funciona o Lar?    </h1>
        <div class="row justify-center q-py-xl">
    <img src="../assets/about/readingabout.svg" alt="">
</div>
    <p class="text-center text-h5 text-weight-bolder">
Temos mais de 100 idosos aos nossos cuidados e cada um contribui com 70% da aposentadoria. O restante é arcado pelo Lar e arrecadado por meio de doações. Graças a Deus e aos nossos parceiros, que nunca deixam de ajudar, nunca faltou alimentação e todas as necessidades dos internos são supridas.
    </p>
        <p class="text-center text-h5 text-weight-bolder">
O Lar, como toda instituição de caridade necessita de doações, portanto para toda e qualquer doação, seja alimentos, produtos de limpeza etc. Os funcionários recebem muito bem os doadores, e proporcionam uma visita nas instalações e com certeza, agradece do fundo do coração a ajuda. O Lar fica localizado na Rua São José Nº 1149 – Vila Di Santi    </p>
 
    </section>


            <section title="OS VALORES DO CENTRO DE DOAÇÕES" class="q-py-xl" id="sectioncreation">
        <div style="transform: scaleY(-1);">
    <h1 id="organizations-title" class="text-uppercase text-h3 textColor-blue text-center q-mb-xl q-px-md">
Os valores do lar  </h1>
        <div class="row justify-center q-py-xl">
    <img src="../assets/about/meetingabout.svg" alt="">
</div>
         <div class="row text-center justify-around">

           <div class="col-12 col-sm-5 col-md-3 items-center">
             <h3 class="text-h5 text-weight-bolder">ATENCIOSIDADE</h3>
           <q-icon name="far fa-eye text-light-blue-6" class="text-h1 q-pb-xl" />
          <p class="text-h6 text-weight-bold">
 Os idosos recebem cuidados 24 horas por dia para garantir sua segurança, saúde e para uma melhor qualidade de vida.
          </p>
          </div>

  <div class="col-12 col-sm-5 col-md-3 items-center">
                 <h3 class="text-h5 text-weight-bolder">ATIVIDADES</h3>
          <i class="text-light-blue-6 fas fa-walking q-pb-xl" style="font-size: 85px; text-align: center;"></i>
          <p class="text-h6 text-weight-bold">
O lar conta com várias atividades para os idosos, tanto para uma melhor saúde e qualidade de vida, quanto para o entretenimento.
          </p>
          </div>

            <div class="col-12 col-sm-5 col-md-3 items-center">
                           <h3 class="text-h5 text-weight-bolder">PROFISSIONALISMO</h3>
           <q-icon name="fas fa-id-card text-light-blue-6" class="text-h1 q-pb-xl" />
          <p class="text-h6 text-weight-bold">
Aqui você pode contar com os melhores funcionários para o cuidado dos idosos, a equipe 
além de capacitada e atenciosa faz seu serviço com muito amor.
          </p>
          </div>

          </div>

    </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>

<style scoped>
#sectionstory{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;}

  #sectioncreation{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;
    transform: scaleY(-1);
  }

  #sectioncreation img, #sectionstory img{
  width: 350px;  
  }


  #about h1,
  #about p{
    padding: 0 20px;
  }
</style>
