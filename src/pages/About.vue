<template>
  <q-page id="about" class="q-py-xl flex justify-center align-center">
        <section title="O QUE É O CENTRO DE DOAÇÕES?" class="q-pt-xl" id="sectioncreation">
        <div style="transform: scaleY(-1);">
    <h1 id="organizations-title" class="text-h3 textColor-blue text-center q-mb-xl q-px-md">
O QUE É O CENTRO DE DOAÇÕES?
    </h1>
    <div class="row justify-center q-py-xl">
    <img src="../assets/about/faqabout.svg" alt="">
</div>
    <p class="text-center text-h5 text-weight-bolder">
      O Centro de Doações é uma instituição voltada para facilitar a criação de campanhas
e eventos voltados para arrecadação de fundos, o maior objetivo do CDD é poder
dar mais visibilidade as campanhas, assim como também ser um local em que as pessoas
possam ter mais informações sobre as instituições.
    </p>
    </div>
    </section>

        <section title="COMO O CENTRO DE DOAÇÕES FOI CRIADO?" class="q-py-xl" id="sectionstory">
    <h1 id="organizations-title" class="text-h3 textColor-blue text-center q-mb-xl q-px-md">
COMO O CENTRO DE DOAÇÕES FOI CRIADO?
    </h1>
        <div class="row justify-center q-py-xl">
    <img src="../assets/about/readingabout.svg" alt="">
</div>
    <p class="text-center text-h5 text-weight-bolder">
      O CDD foi criado em 2021, e a ideia veio dos estudantes do curso de Sistemas para Internet do 5º
semestre na Fatec Taquaritinga, a ideia teve origem como uma necessidade de tema
para o desenvolvimento do Projeto Integrador V, e então os estudantes do grupo Esquadrão Suicida
em uma reunião chegaram a conclusão de criar uma instituição que funcionasse como
centralizadora de doações, para dar mais visibilidade as campanhas e as organizações beneficentes
    </p>
    </section>

            <section title="OS VALORES DO CENTRO DE DOAÇÕES" class="q-py-xl" id="sectioncreation">
        <div style="transform: scaleY(-1);">
    <h1 id="organizations-title" class="text-h3 textColor-blue text-center q-mb-xl q-px-md">
OS VALORES DO CENTRO DE DOAÇÕES
    </h1>
        <div class="row justify-center q-py-xl">
    <img src="../assets/about/meetingabout.svg" alt="">
</div>
         <div class="row text-center justify-around">

           <div class="col-12 col-sm-5 col-md-3 items-center">
             <h3 class="text-h5 text-weight-bolder">ATENCIOSIDADE</h3>
           <q-icon name="far fa-eye text-light-blue-6" class="text-h1 q-pb-xl" />
          <p class="text-h6 text-weight-bold">
            O Centro trata todas as instituições
de forma atenciosa e analisa
cada uma das campanhas 
e organizações que pediram para serem divulgadas pessoalmente
para aprovar somente as instituições que levam o 
ato de ajudar a sério
          </p>
          </div>

  <div class="col-12 col-sm-5 col-md-3 items-center">
                 <h3 class="text-h5 text-weight-bolder">SIMPLICIDADE</h3>
           <q-icon name="far fa-handshake text-light-blue-6" class="text-h1 q-pb-xl" />
          <p class="text-h6 text-weight-bold">
            O Centro acredita que é de extrema
importância manter os conteúdos o mais
acessíveis e simples quanto possível para garantir
a acessibilidade a todos os tipos de usuários
          </p>
          </div>

            <div class="col-12 col-sm-5 col-md-3 items-center">
                           <h3 class="text-h5 text-weight-bolder">PROFISSIONALISMO</h3>
           <q-icon name="fas fa-id-card text-light-blue-6" class="text-h1 q-pb-xl" />
          <p class="text-h6 text-weight-bold">
 O Centro tem uma alta demanda
 por qualidade e transparência, por
 isso leva tem comprometimento 
com os usuários e com as organizações e resolve as questões
da forma mais direta e efetiva possível
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
