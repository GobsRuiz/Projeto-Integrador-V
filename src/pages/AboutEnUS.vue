<template>
  <q-page id="about" class="q-py-xl flex justify-center align-center">

            <div class="q-pa-md column">
        <q-btn id="divulgation-content-btn" to="/sobre" color="white q-px-xl q-py-md" rounded class="text-black" label="Portuguese version" size="22px" />
    </div>
        <section title="WHAT IS LAR SÃO VICENTE DE PAULO??" class="q-py-xl" id="sectioncreation">
        <div style="transform: scaleY(-1);">
    <h1 id="organizations-title" class="text-uppercase text-h3 textColor-blue text-center q-mb-xl q-px-md">
WHAT IS SÃO VICENTE DE PAULO Retirement home?
    </h1>
    <div class="row justify-center q-py-xl">
    <img src="../assets/about/faqabout.svg" alt="">
</div>
    <p class="text-center text-h5 text-weight-bolder">
São Vicente de Paulo retirement home is a charity institution located in the city of Taquaritinga and it's
 main objective is to provide the best possible assistance to the elderly who live there. With several partnerships
  across the city and the region, today the retirement home serves as abode to approximately 100 seniors who need special care,
   seniors who are cared for by our employees who are always willing to treat them with affection and respect.
    </p>
    </div>
    </section>

        <section title="How does our retirement home work?" class="q-py-xl" id="sectionstory">
    <h1 id="organizations-title" class="text-uppercase text-h3 textColor-blue text-center q-mb-xl q-px-md">
HOW does our retirement home work?
    </h1>
        <div class="row justify-center q-py-xl">
    <img src="../assets/about/readingabout.svg" alt="">
</div>
    <p class="text-center text-h5 text-weight-bolder">
We have over 100 seniors in our care and each contributes 70% of their retirement pension. The rest raised through donations and by the retirement home itself.
Thanks to God and our partners, who never cease to help, all the needs of the elderly are taken care of.</p>
        <p class="text-center text-h5 text-weight-bolder">
The retirement home, like every charity institution, needs donations, so we raise products to a better quality of life of our seniors,
so you can donate food, cleaning products or any other item to our elderly.
 You can donate personaly at our facilities, here the staff will provide you a tour of our facilities and, of course, we will thank you from the bottom of your heart for helping our elderly.
  The retirement home is located at São José street, Nº 1149 - Vila Di Santi </p>
    </section>


            <section title="What we provide?" class="q-py-xl" id="sectioncreation">
        <div style="transform: scaleY(-1);">
    <h1 id="organizations-title" class="text-uppercase text-h3 textColor-blue text-center q-mb-xl q-px-md">
What we provide?  </h1>
        <div class="row justify-center q-py-xl">
    <img src="../assets/about/meetingabout.svg" alt="">
</div>
         <div class="row text-center justify-around">

           <div class="col-12 col-sm-5 col-md-3 items-center">
             <h3 class="text-h5 text-weight-bolder">Special Care</h3>
           <q-icon name="far fa-eye text-light-blue-6" class="text-h1 q-pb-xl" />
          <p class="text-h6 text-weight-bold">
The elderly are cared for 24/7 to ensure their safety, health and overall for a better quality of life. </p>
          </div>

  <div class="col-12 col-sm-5 col-md-3 items-center">
                 <h3 class="text-h5 text-weight-bolder text-uppercase">physical activities</h3>
          <i class="text-light-blue-6 fas fa-walking q-pb-xl" style="font-size: 85px; text-align: center;"></i>
          <p class="text-h6 text-weight-bold">
We provide several activities for the elderly, to keep them healthy and provide them a better quality of life, and for their own entertainment.</p>
          </div>

            <div class="col-12 col-sm-5 col-md-3 items-center">
                           <h3 class="text-h5 text-weight-bolder">PROFESSIONALISM</h3>
           <q-icon name="fas fa-id-card text-light-blue-6" class="text-h1 q-pb-xl" />
          <p class="text-h6 text-weight-bold">
Here you can count with the best employees for the care of the elderly, our staff
 in addition to being capable and attentive, performs their duty with lots of love.
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
