<template>

    <div class="box" >
        
    </div>

</template>

<script>

import { defineComponent } from 'vue';
import Tarefa from './Tarefa.vue';

export default defineComponent({
    name: 'ListaTarefas',
    components: {
        Tarefa
    },
    props: {
        lista: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {
        }
    },
    methods: {

        
    
    },
});

</script>

<style scoped></style>