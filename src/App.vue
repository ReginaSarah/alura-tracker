<template>
  <main>
    <div class="columns is-gapless is-multiline">
      <div class="column is-one-quarter">
        <BarraLateral />
      </div>
      <div class="column is-three-quarter">
        <Formulario />
      </div>
    </div>

  </main>
  
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
  }
}
</script>

<style>

</style>
