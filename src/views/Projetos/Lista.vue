<template>
    <section class="">
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo Projeto</span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="remover(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">

import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { REMOVE_PROJETO } from "@/store/tipoMutations";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { notificacaoMixin } from "@/mixins/notificar";


export default defineComponent({
    name: "Lista",
    components: {
    },
    data() {
        return {
            nomeDoProjeto: "",
        };
    },
    mixins: [notificacaoMixin],
    methods: {
        remover(id: string) {
            (this.store as any).commit(REMOVE_PROJETO, id);
            this.notificar("Projeto removido com sucesso", "O projeto foi removido com sucesso", TipoNotificacao.SUCESSO);
        },
    },
    setup() {
        const store = useStore();

        return {
            store,
            projetos: computed(() => store.state.projetos),
        };
    },
});
</script>
