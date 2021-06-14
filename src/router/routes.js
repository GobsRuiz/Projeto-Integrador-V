
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
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
    path: '/about',
    component: () => import('layouts/EnglishLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AboutEnUS.vue') }
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
    path: '/doacoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Donations.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/mensagem',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Mensagem.vue') }
    ],
    meta: { autenticar: true }    
  },
  {
    path: '/mensagemalteracao',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MensagemAlteracao.vue') }
    ],
    meta: { autenticar: true }
  },
  {
    path: '/carrossel',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Carrossel.vue') }
    ],
    meta: { autenticar: true }    
  },
  {
    path: '/carrosselcadastro',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CarrosselCadastro.vue') }
    ],
    meta: { autenticar: true }
  },  
  {
    path: '/carrosselalteracao',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CarrosselAlteracao.vue') }
    ],
    meta: { autenticar: true }
  },
  {
    path: '/item',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Item.vue') }
    ],
    meta: { autenticar: true }    
  },
  {
    path: '/itemcadastro',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ItemCadastro.vue') }
    ],
    meta: { autenticar: true }
  },  
  {
    path: '/itemalteracao',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ItemAlteracao.vue') }
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
