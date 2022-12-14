// alurapic/src/routes.js

import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

// adicionando a propriedade título

export const routes = [

    { path: '/', name:'home',component: Home, titulo: 'Home', menu:true },
    { path: '/cadastro', name:'cadastro',component: Cadastro, titulo: 'Cadastro', menu:true },
    { path: '/cadastro/:id', name:'altera',component: Cadastro, titulo: 'Cadastro', menu:false },
    { path: '*', component: Home, menu: false }

];