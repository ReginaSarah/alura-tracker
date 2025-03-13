<template>
  <main >
    <div class="columns is-gapless is-multiline">
      <div class="column is-one-quarter">
        <BarraLateral @aoTemaAlterado="trocarTema"/>
      </div>
      <div class="column is-three-quarter conteudo" >
        <Tarefas />
      </div>
    </div>

  </main>
  
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'
import Tarefas from './views/Tarefas.vue';

export default {
  name: 'App',
  components: {
    BarraLateral,
    Tarefas,
  },
  methods: {
    trocarTema(modoEscuro){
      if(modoEscuro){
        document.querySelector('main').classList.toggle('modo-escuro');
      } 
      else {
        document.querySelector('main').classList.remove('modo-escuro');
      }
    }
  }
}
</script>

<style>

main {
  --bg-primario: white;
  --texto-primario: black;
}

main.modo-escuro {
  --bg-primario: #363636;
  --texto-primario: white;
}

.conteudo {
  background-color: var(--bg-primario);
}

</style>
