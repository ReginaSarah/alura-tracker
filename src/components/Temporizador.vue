<template>
    <div class="is-flex is-align-itens-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos"  />

        <Botao texto="Iniciar" icone="fas fa-play" @onClick="iniciar" :desabilitado="cronometroAtivo" />

        <Botao texto="Parar" icone="fas fa-stop" @onClick="finalizar" :desabilitado="!cronometroAtivo" />
    </div>


</template>

<script>

import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import Botao from './Botao.vue';

export default defineComponent({
    name: 'Temporizador',
    components: {
        Cronometro,
        Botao
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: null,
            cronometroAtivo: false,
        }
    },
    emits:["aoTemporizadorFinalizado"],
    methods: {

        iniciar(){
            console.log('Iniciando a tarefa');       
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000);     
            this.cronometroAtivo = true;
        },
        finalizar(){
            console.log('Finalizando a tarefa');
            
            clearInterval(this.cronometro);
            this.cronometroAtivo = false;
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
            
            
        }

    },
});

</script>

<style scoped></style>