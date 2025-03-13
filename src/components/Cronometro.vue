<template>
    <section >
        <strong class="display">
            {{ tempoDecorrido }}
        </strong>
    </section>


</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Cronometro',
    data() {
        return {
        }
    },
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },
    computed: {
        tempoDecorrido() {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8);
        }
    },
    methods: {

    },
});

</script>

<style scoped>

.display {
    color: var(--texto-primario);
}


</style>