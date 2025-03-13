<template>

<header>
    <h1>
        <img src="../assets/logo.png" alt="Logo do Vue">
    </h1>
    <Botao :texto="textoBotao" :icone="iconeBotao" @onClick="alterarTema"/>
</header>
</template>

<script >

import  { defineComponent } from 'vue';
import Botao from './Botao.vue';

export default defineComponent({
    name: 'BarraLateral',
    components: {
      Botao
    },
    emits: [ 'aoTemaAlterado' ],
    data (){
      return {
        modoEscuro: false,
      };
    },
    computed: {
        textoBotao(){
          return this.modoEscuro ? "Desativar Modo Escuro" : 'Ativar Modo Escuro';
        },
        iconeBotao(){
          return this.modoEscuro ? 'fas fa-sun' : 'fas fa-moon';
        }
    },
    methods: {
        alterarTema(){
          this.modoEscuro = !this.modoEscuro;
            this.$emit('aoTemaAlterado', this.modoEscuro);
        }
    }
});

</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>