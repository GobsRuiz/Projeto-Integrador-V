import { LocalStorage, Notify } from 'quasar'
import { api } from 'boot/axios'

const state = {
  token: '',
  produtos: [],
  produtoSelecionado: '',
  mensagens: [],
  mensagemSelecionado: ''
}

const mutations = {
  SET_TOKEN (state, token) {      
    state.token = token
  },
  SET_PRODUTOS (state, produtos) {
    state.produtos = produtos
  },
  SELECIONAR_PRODUTO (state, produtoId) {
    const index = state.produtos.findIndex((p) => p.id === produtoId)
    state.produtoSelecionado = state.produtos[index]
  },
  ADICIONAR_PRODUTO (state, produto) {
    state.produtos.push(produto)
  },
  ALTERAR_PRODUTO (state, produto) {
    const index = state.produtos.findIndex((p) => p.id === produto.id)
    state.produtos.set(index, produto)
  },
  REMOVER_PRODUTO (state, produtoId) {
    const index = state.produtos.findIndex((p) => p.id === produtoId)
    state.produtos.splice(index, 1)
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
  adicionarProduto ({ commit }, produto) {
    api.post('/produto', produto)
    .then((response) => {
      commit('ADICIONAR_PRODUTO', response.data)
      Notify.create({ color: 'positive', position: 'top', message: 'Produto Cadastrado!'})  
    })
  },
  obterProdutos ({ commit }) {
    api.get('/produto')
    .then((response) => {
      commit('SET_PRODUTOS', response.data)
    })
  },
  selecionarProduto ({ commit }, produtoId) {
    commit('SELECIONAR_PRODUTO', produtoId)
  },
  alterarProduto ({ commit }, produto) {
    api.put('/produto/'+ produto.id, produto)
    .then((response) => {
      commit('ALTERAR_PRODUTO', response.data)
    })
  },
  removerProduto({ commit }, produtoId) {
    api.delete('/produto/'+ produtoId)
    .then((response) => {
      commit('REMOVER_PRODUTO', produtoId)
    })
  },
  adicionarMensagem ({ commit }, mensagem) {
    api.post('/mensagem', mensagem)
    .then((response) => {
      commit('ADICIONAR_MENSAGEM', response.data)
      Notify.create({ color: 'positive', position: 'top', message: 'Mensagem Enviada!'})  
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
  }
}

const getters = {
  token: (state) => state.token,
  produtos: (state) => state.produtos,
  produtoSelecionado: (state) => state.produtoSelecionado,
  mensagens: (state) => state.mensagens,
  mensagemSelecionado: (state) => state.mensagemSelecionado
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
