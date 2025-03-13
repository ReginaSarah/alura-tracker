<template>

    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?"
                    v-model="tarefa">
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="adicionarTarefa"/>
            </div>
        </div>
    </div>

</template>

<script>

import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'Formulario',
    components: {
        Temporizador
    },
    data(){
        return {
            tarefa: '',
        }
    },
    computed: {
    },
    methods: {

        adicionarTarefa(tempoEmSegundos){
            const objeto = {
                nome: this.tarefa == '' ? 'Tarefa sem nome' : this.tarefa,
                tempo: tempoEmSegundos,
            }
            this.$emit('aoAdicionarTarefa', objeto);
            this.tarefa = '';
        }
    
    },
    emits: ['aoAdicionarTarefa'],
});

</script>

<style>

.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

</style>