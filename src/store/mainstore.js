import { LocalStorage, Notify } from 'quasar'
import { api } from 'boot/axios'

const state = {
  token: '',
  mensagens: [],
  mensagemSelecionado: '',
  carrossels: [],
  carrosselSelecionado: '',
  items: [],
  itemSelecionado: '',
}

const mutations = {
  SET_TOKEN (state, token) {      
    state.token = token
  },
 SET_MENSAGENS (state, mensagens) {
    state.mensagens = mensagens
  },
  SELECIONAR_MENSAGEM (state, mensagemId) {
    const index = state.mensagens.findIndex((m) => m.id === mensagemId)
    state.mensagemSelecionado = state.mensagens[index]
  },
  ADICIONAR_MENSAGEM (state, mensagem) {
    state.mensagens.push(mensagem)
  },
  ALTERAR_MENSAGEM (state, mensagem) {
    const index = state.mensagens.findIndex((m) => m.id === mensagem.id)
    state.mensagens.set(index, mensagem)
  },
  REMOVER_MENSAGEM (state, mensagemId) {
    const index = state.mensagens.findIndex((m) => m.id === mensagemId)
    state.mensagens.splice(index, 1)
  },
  SET_CARROSSELS (state, carrossels) {
    state.carrossels = carrossels
  },
  SELECIONAR_CARROSSEL (state, carrosselId) {
    const index = state.carrossels.findIndex((c) => c.id === carrosselId)
    state.carrosselSelecionado = state.carrossels[index]
  },
  ADICIONAR_CARROSSEL (state, carrossel) {
    state.carrossels.push(carrossel)
  },
  ALTERAR_CARROSSEL (state, carrossel) {
    const index = state.carrossels.findIndex((c) => c.id === carrossel.id)
    state.carrossels.set(index, carrossel)
  },
  REMOVER_MENSAGEM (state, carrosselId) {
    const index = state.carrossels.findIndex((c) => c.id === carrosselId)
    state.carrossels.splice(index, 1)
  },
  SET_ITEMS (state, items) {
    state.items = items
  },
  SELECIONAR_ITEM (state, itemId) {
    const index = state.items.findIndex((i) => i.id === itemId)
    state.itemSelecionado = state.items[index]
  },
  ADICIONAR_ITEM (state, item) {
    state.items.push(item)
  },
  ALTERAR_ITEM (state, item) {
    const index = state.items.findIndex((i) => i.id === item.id)
    state.items.set(index, item)
  },
  REMOVER_ITEM (state, itemId) {
    const index = state.items.findIndex((i) => i.id === itemId)
    state.items.splice(index, 1)
}
}

const actions = { 
  async login ({ commit }, usuario) {    
    let response = await api.post('/login', usuario, { headers: { 'Content-Type' : 'application/json' } })
    if (response) {
      await LocalStorage.set('token', response.data.token)
      await commit('SET_TOKEN', response.data.token)
      api.interceptors.request.use((config) => {
        if (response.data.token) {
          config.headers['Authorization'] = `Bearer ${ response.data.token }`
          config.headers['Content-Type'] = 'application/json'
        }
        return config
      })
      api.interceptors.response.use((response) => {
        return response
      })        
      Notify.create({ color: 'positive', message: response.data.token })
    }
  },
  async logout ({ commit }) {    
    await LocalStorage.remove('token')
    await commit('SET_TOKEN', null)
  },
  async carregarToken ({ commit }) {
    let token = await LocalStorage.getItem('token')
    await commit('SET_TOKEN', token)
    api.interceptors.request.use((config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${ token }`
        config.headers['Content-Type'] = 'application/json'
      }
      return config
    })
    api.interceptors.response.use((response) => {
      return response
    })    
  },
  adicionarMensagem ({ commit }, mensagem) {
    api.post('/mensagem', mensagem)
    .then((response) => {
      commit('ADICIONAR_MENSAGEM', response.data)
      Notify.create({ color: 'positive', position: 'top', message: 'Mensagem enviada com sucesso!'})  
    })
  },
  obterMensagens ({ commit }) {
    api.get('/mensagem')
    .then((response) => {
      commit('SET_MENSAGENS', response.data)
    })
  },
  selecionarMensagem ({ commit }, mensagemId) {
    commit('SELECIONAR_MENSAGEM', mensagemId)
  },
  alterarMensagem ({ commit }, mensagem) {
    api.put('/mensagem/'+ mensagem.id, mensagem)
    .then((response) => {
      commit('ALTERAR_MENSAGEM', response.data)
    })
  },
  removerMensagem({ commit }, mensagemId) {
    api.delete('/mensagem/'+ mensagemId)
    .then((response) => {
      commit('REMOVER_MENSAGEM', mensagemId)
    })
  },
  adicionarCarrossel ({ commit }, carrossel) {
    api.post('/carrossel', carrossel)
    .then((response) => {
      commit('ADICIONAR_CARROSSEL', response.data)
      Notify.create({ color: 'positive', position: 'top', message: 'Imagem de carrossel cadastrada com sucesso!'})  
    })
  },
  obterCarrossels ({ commit }) {
    api.get('/carrossel')
    .then((response) => {
      commit('SET_CARROSSELS', response.data)
    })
  },
  selecionarCarrossel ({ commit }, carrosselId) {
    commit('SELECIONAR_CARROSSEL', carrosselId)
  },
  alterarCarrossel ({ commit }, carrossel) {
    api.put('/carrossel/'+ carrossel.id, carrossel)
    .then((response) => {
      commit('ALTERAR_CARROSSEL', response.data)
    })
  },
  removerCarrossel({ commit }, carrosselId) {
    api.delete('/carrossel/'+ carrosselId)
    .then((response) => {
      commit('REMOVER_CARROSSEL', carrosselId)
    })
  },
  adicionarItem ({ commit }, item) {
    api.post('/item', item)
    .then((response) => {
      commit('ADICIONAR_ITEM', response.data)
      Notify.create({ color: 'positive', position: 'top', message: 'Item cadastrado com sucesso!'})  
    })
  },
  obterItems ({ commit }) {
    api.get('/item')
    .then((response) => {
      commit('SET_ITEMS', response.data)
    })
  },
  selecionarItem ({ commit }, itemId) {
    commit('SELECIONAR_ITEM', itemId)
  },
  alterarItem ({ commit }, item) {
    api.put('/item/'+ item.id, item)
    .then((response) => {
      commit('ALTERAR_ITEM', response.data)
    })
  },
  removerItem({ commit }, itemId) {
    api.delete('/item/'+ itemId)
    .then((response) => {
      commit('REMOVER_ITEM', itemId)
    })
  }
}

const getters = {
  token: (state) => state.token,
  mensagens: (state) => state.mensagens,
  mensagemSelecionado: (state) => state.mensagemSelecionado,
  carrossels: (state) => state.carrossels,
  carrosselSelecionado: (state) => state.carrosselSelecionado,
  items: (state) => state.items,
  itemSelecionado: (state) => state.itemSelecionado
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
