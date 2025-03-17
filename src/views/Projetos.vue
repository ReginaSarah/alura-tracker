<template>
    <div class="column is-three-quarter m-5">
        <h1 class="title">Projetos</h1>
        <form >
            <div class="field">
                <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
                <input type="text"
                class="input"
                placeholder="Digite o nome do projeto"
                v-model="nomeProjeto"
                id="nomeDoProjeto"
                >
            </div>
            <div class="field">
                <Botao texto="Salvar" icone="fas fa-save" @onClick="salvar" />
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        NOME
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(projeto, index) in projetos" :key="index">
                    <td>
                        {{ projeto.id }}
                    </td>
                    <td>
                        {{ projeto.nome }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import Botao from '@/components/Botao.vue';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Projetos',
    components: {
        Botao
    },
    data(){
        return {
            nomeProjeto: "",
            projetos: [],
        }
    },
    methods: {
        salvar(){
            
            const projeto = {
                nome: this.nomeProjeto,
                id: new Date().toISOString(),
            };
            this.projetos.push(projeto);
            this.nomeProjeto = "";
        }
    }
});

</script>

<style scoped>
.conteudo {
    padding: 1rem;
}
</style>
