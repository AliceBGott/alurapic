<template>
 <div>
    <h1 class="centralizado" >{{titulo}}</h1>
    <p v-show="mensagem" class="centralizado">{{mensagem}}</p>

    <input type="search" class="filtro" v-on:input="filtro=$event.target.value" placeholder="filtre pelo titulo">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
       


        <meu-painel :titulo="foto.titulo" >
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animate="1.2"/>

          <router-link :to="{name: 'altera', params:{id : foto._id}}">
            <meu-botao tipo="button" rotulo="ALTERAR"/>
          </router-link>
          <meu-botao 
            tipo="button" 
            rotulo="REMOVER" 
            @botaoAtivado="remove(foto)" 
            confirmacao="false"
            estilo="perigo"/>
        </meu-painel>

         
      </li>
     
      
    </ul>
    
 </div>
 
</template>

<script>
import Painel from '../shared/painel/painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao  from '../shared/botao/Botao.vue';
import Transform from '../../directives/Transform';
import FotoService from '../../domain/foto/FotoService';

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
},
  data (){

    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: '',
      mensagem: '',
      
    }
  },

  computed: {
    fotosComFiltro(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto){
        this.$http
          .delete(`v1/fotos/${foto._id}`)
          .then(() => {
            let indice = this.fotos.indexOf(foto)
            this.fotos.splice(indice,1)
            this.mensagem = 'Foto removida com sucesso'
            }, 
            err => {
            this.mensagem = err.mensagem;
            
            });

    }
  },

  created(){

    this.service = new FotoService(this.$resource);


      this.service
      /*devolve uma promise que vai dar acesso ?? lista de fotos do servidor */
      .lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>
  .centralizado{
    text-align: center;
  }


  .lista-fotos{
    list-style: none;
  }

  .lista-fotos-item{
    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }

    
</style>
