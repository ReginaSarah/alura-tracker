<template>
    <div class="notificacoes">
        <article class="message is-success" :class="contexto[notificacao.tipo]" v-for="notificacao in notificacoes" :key="notificacao.id">
            <div class="message-header">
                {{ notificacao.titulo }}
            </div>
            <div class="message-body">
                {{ notificacao.texto }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">

import { TipoNotificacao } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: "Notificacoes",
    components: {
    },
    data() {
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: "is-success",
                [TipoNotificacao.FALHA]: "is-danger",
                [TipoNotificacao.ATENCAO]: "is-warning",
            }
        };
    },
    methods: {
    },
    setup() {
        const store = useStore();
        return {
            store,
            notificacoes: computed(() => store.state.notificacoes),
        };
    },
});

</script>

<style scoped>

.notificacoes {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 1000;
}

</style>