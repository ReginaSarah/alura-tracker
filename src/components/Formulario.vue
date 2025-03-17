<template>

    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="tarefa">
                <div class="column is-3">
                    <div class="select">
                        <select v-model="idProjeto">
                            <option value="">Selecione o projeto</option>
                            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                                {{ projeto.nome }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="adicionarTarefa" />
            </div>
        </div>
    </div>

</template>

<script>

import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { computed } from 'vue';

export default defineComponent({
    name: 'Formulario',
    components: {
        Temporizador
    },
    data() {
        return {
            tarefa: '',
        }
    },
    computed: {
    },
    setup() {
        const store = useStore(key);
        return {
            projetos: computed(() => store.state.projetos),
        }
    },
    methods: {

        adicionarTarefa(tempoEmSegundos) {
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