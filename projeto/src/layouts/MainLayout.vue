<template>
  <q-layout>
    <!-- Header -->
    <q-header elevated>
      <!-- Social networking -->
      <q-toolbar id="toolbar1" class="justify-center">
        <q-btn to="/sobre" icon-right="facebook" label="Nos siga no facebook" flat rounded />
        <q-btn to="/sobre" icon-right="instagram" label="E no instagram" flat rounded />
        <q-btn to="/sobre" icon-right="mail" label="Ou nos envie um e-mail" flat rounded />
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
          <q-btn to="/" label="Início" flat rounded class="text-h5"></q-btn>
          <q-btn to="/sobre" label="Organizações" flat rounded class="text-h5"></q-btn>
          <q-btn to="/sobre" label="Campanhas" flat rounded class="text-h5"></q-btn>
          <q-btn to="/sobre" label="Contato" flat rounded class="text-h5"></q-btn>
          <q-btn to="/sobre" label="Sobre" flat rounded class="text-h5"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      class="desktop-hide"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

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
        <div class="column">
          <q-btn to="/" label="Início" flat rounded class="text-h6"></q-btn>
          <q-btn to="/sobre" label="Organizações" flat rounded class="text-h6"></q-btn>
          <q-btn to="/sobre" label="Campanhas" flat rounded class="text-h6"></q-btn>
          <q-btn to="/sobre" label="Contato" flat rounded class="text-h6"></q-btn>
          <q-btn to="/sobre" label="Sobre" flat rounded class="text-h6"></q-btn>
        </div>  
        
        <!-- Social networks -->
        <div class="row">
          <div class="column items-center">
            <q-btn to="/sobre" label="Nos siga no facebook" flat rounded class="text-h6" />
            <q-icon name="facebook" class="text-h4" />
          </div>
          <div class="column items-center">
            <q-btn to="/sobre" label="E no instagram" flat rounded class="text-h6"/>
            <q-icon name="instagram" class="text-h4" />
          </div>
          <div class="column items-center">
            <q-btn to="/sobre" label="Ou nos envie um e-mail" flat rounded class="text-h6" />
            <q-icon name="email" class="text-h4" />
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div id="footer-copyright" class="q-py-lg">
        <p class="text-black text-center text-h4" style="margin: 0;">
          Centro de doações - 2021 - Todos os direitos reservados ©
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
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
/* Toolbar1 */
#toolbar1{
  background-color: #00A5F7;
}





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
</style>
