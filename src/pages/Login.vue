<template>
  <q-page class="bg-light-blue row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Login</h5>
      </div>
      <div class="row">
        <div class="q-pa-md">
          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-section>
              <div class="q-gutter-md q-pb-md">
                <q-input outlined v-model="usuario" label="Login" />        
              </div>
              <div class="q-gutter-md q-pb-md">
                <q-input outlined v-model="senha" label="Senha" type="password" />
              </div>
              <div class="q-gutter-md q-pb-md">
                <q-btn color="primary" label="Login" @click="efetuarLogin()" />
              </div> 
              <div class="q-gutter-md q-pb-md" v-if="token">
                <q-btn color="primary" label="Logout" @click="efetuarLogout()" />
              </div> 
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      usuario: '',
      senha: ''
    }
  },
  methods: {
    ...mapActions('mainstore', ['login','logout','carregarToken']),    
    async efetuarLogin () {
      await this.login({ username: this.usuario, password: this.senha })
      await this.carregarToken()
      if (this.token) {
        this.$router.push('/produto')
      }
    },
    efetuarLogout () {
      this.logout()
    }
  },
  computed: {
    ...mapGetters('mainstore', ['token'])
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>
