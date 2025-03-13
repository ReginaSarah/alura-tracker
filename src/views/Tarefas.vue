<template>
    <div>
        <Formulario @aoAdicionarTarefa="adicionarTarefa"/>
        <Tarefa v-for="(item, index) in lista" :key="index" :tarefa="item" />
        <Box v-if="lista.length == 0">
            Você não está muito produtivo hoje, hein? :(
        </Box>
    </div>
</template>

<script>

import Box from '@/components/Box.vue';
import Formulario from '@/components/Formulario.vue';
import Tarefa from '@/components/Tarefa.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListaTarefas',
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data(){
        return {
            lista: [],
        }
    },
    methods: {
        adicionarTarefa(objeto){
            console.log(objeto)
            this.lista.push(objeto);
        }
    },
});

</script>
