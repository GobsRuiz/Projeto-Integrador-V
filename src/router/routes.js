
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/organizações',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Organizations.vue') }
    ]
  },
  {
    path: '/campanhas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Campaigns.vue') }
    ]
  },
  {
    path: '/sobre',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/About.vue') }
    ]
  },
  {
    path: '/en-us',
    component: () => import('layouts/EnglishLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomeEnUS.vue') }
    ]
  },
  {
    path: '/contato',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Contact.vue') }
    ]
  },
  {
    path: '/perfilorg',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PerfilOrg.vue') }
    ]
  },
  {
    path: '/campanha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Campanha.vue') }
    ]
  },
  {
    path: '/produto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Produto.vue') }
    ],
    meta: { autenticar: true }    
  },
  {
    path: '/produtocadastro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProdutoCadastro.vue') }
    ],
    meta: { autenticar: true }
  },  
  {
    path: '/produtoalteracao',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProdutoAlteracao.vue') }
    ],
    meta: { autenticar: true }
  },   
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  ,
  {
    path: '/mensagem',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Mensagem.vue') }
    ],
    meta: { autenticar: true }    
  },
  {
    path: '/mensagemalteracao',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MensagemAlteracao.vue') }
    ],
    meta: { autenticar: true }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
