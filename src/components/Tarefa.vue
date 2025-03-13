<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.nome }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.tempo" />
            </div>
        </div>
    </Box>
</template>

<script>

import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import Box from './Box.vue';

export default defineComponent({
    name: 'Tarefa',
    components: {
        Cronometro,
        Box
    },
    props: {
        tarefa: {
            type: Object,
            required: true,
            
        }
    },
});

</script>

<style scoped>
 
</style>