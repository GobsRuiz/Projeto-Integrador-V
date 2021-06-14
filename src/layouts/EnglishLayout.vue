<template>
  <q-layout>
    <!-- Header -->
    <q-header elevated>
      <!-- Social networking -->
      <q-toolbar id="toolbar1" class="justify-center bg-light-blue-6 gt-xs">
        <q-btn to="/sobre" icon-right="facebook" label="Follow us on" flat rounded />
        <q-btn to="/sobre" icon-right="fab fa-instagram" label="And also follow our instagram" flat rounded />
        <q-btn to="/sobre" icon-right="mail" label="Or send us an e-mail" flat rounded />
      </q-toolbar>

      <!-- Logo and menu -->
      <q-toolbar id="toolbar2" class="q-py-lg text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="desktop-hide"
        />

        <q-toolbar-title id="toolbar2-logo">
          <img src="../assets/logo.svg" alt="">
        </q-toolbar-title>

        <div class="mobile-hide">
          <q-btn to="/" label="Home" flat rounded class="text-h5"></q-btn>
          <q-btn to="/campanhas" label="Donations" flat rounded class="text-h5"></q-btn>
          <q-btn to="/contato" label="Contact Us" flat rounded class="text-h5"></q-btn>
          <q-btn to="/sobre" label="About Us" flat rounded class="text-h5"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      class="desktop-hide flex items-center"
      id="drawer"
    >
      <q-list class="q-pt-sm">
        <!-- Menu -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-h5"
        />
      </q-list>

      <!-- Social networking -->
      <q-toolbar id="drawer-socialNetwork" class="column bg-light-blue-6 q-pa-md">
        <q-btn to="/sobre" icon-right="facebook" label="Follow us on facebook" flat rounded class="text-white" />
        <q-btn to="/sobre" icon-right="instagram" label="And also follow our instagram" flat rounded class="text-white" />
        <q-btn to="/sobre" icon-right="mail" label="Or send us an e-mail" flat rounded class="text-white" />
      </q-toolbar>
    </q-drawer>



    <!-- Main -->
    <q-page-container>
      <router-view />
    </q-page-container>



    <!-- Footer -->
    <q-footer id="footer">
      <!-- Logo -->
      <div id="footer-logo" class="text-center q-pb-sm q-pt-md">
        <img src="../assets/logo.svg" alt="">
      </div>

      <!-- Content -->
      <div id="footer-content" class="flex items-center justify-between bg-primary q-pa-md">
        <!-- Links || menu -->
        <nav id="footer-content-menu" class="flex column">
          <q-btn to="/" label="Home" flat rounded class="text-h6"></q-btn>
          <q-btn to="/sobre" label="Donations" flat rounded class="text-h6"></q-btn>
          <q-btn to="/sobre" label="Contact Us" flat rounded class="text-h6"></q-btn>
          <q-btn to="/sobre" label="About Us" flat rounded class="text-h6"></q-btn>
        </nav>  
        
        <!-- Social networks -->
        <div id="footer-content-socialNetworks" class="row justify-center">
          <div class="column items-center">
            <q-btn to="/sobre" label="Follow us on facebook" flat rounded class="text-h6" />
            <q-icon name="facebook" class="text-h4" />
          </div>
          <div class="column items-center">
            <q-btn to="/sobre" label="And also follow our instagram" flat rounded class="text-h6"/>
            <q-icon name="fab fa-instagram" class="text-h4" />
          </div>
          <div class="column items-center">
            <q-btn to="/sobre" label="Or send us an e-mail" flat rounded class="text-h6" />
            <q-icon name="email" class="text-h4" />
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div id="footer-copyright" class="q-py-lg q-px-md">
        <p class="text-black text-center text-h4 q-ma-none">
          Lar São Vicente de Paulo - 2021 - All rights reserved ©
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Donations',
    icon: 'code',
    link: '/#/organizações'
  },
  {
    title: 'Contact Us',
    icon: 'chat',
    link: '/#/campanhas'
  },
  {
    title: 'About Us',
    icon: 'code',
    link: '/#/sobre'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style>
/* Toolbar2 */
#toolbar2{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

/* Logo */
#toolbar2-logo img{
  width: 300px;
}



/* Drawer */
.q-drawer__content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Social network */
#drawer-socialNetwork{
  display: none;
}





/* Footer */
/* Logo */
#footer-logo img{
  width: 300px;
}

/* Content */
#footer-content{
  width: 100%;
}

/* Logo */
/* Copyright */
#footer-logo,
#footer-copyright{
  background-image: url("../assets/header/background-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;
}





/* Responsive */
/* 1000 */
@media (max-width: 1000px) {
  /* Footer */
  #footer-content{
    flex-direction: column;
  }

  /* Menu */
  #footer-content-menu{
    justify-content: center;
    flex-direction: row;
    
    border-bottom: 2px solid rgb(30, 30, 30);
  }
}

/* 600px */
@media (max-width: 600px) {
  /* Drawer */
  /* Social network */
  #drawer-socialNetwork{
    display: block;
  }



  /* Footet */
  /* Copyright */
  #footer-copyright p{
    font-size: 20px;
    font-weight: 500;
  }
}

/* 450 */
@media (max-width: 450px) {
  /* Header */
  /* toolbar 2 */
  /* logo */
  /* Logo */
  #toolbar2-logo img{
    width: 180px;
  }



  /* Footer */
  /* Logo */
  #footer-logo img{
    width: 200px;
  }
}
</style>
