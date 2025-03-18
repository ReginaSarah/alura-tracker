import IProjeto from "@/interfaces/IProjeto"
import { createStore, Store, useStore as vuexUseStore } from "vuex"
import { InjectionKey } from "vue"
import { ADICIONA_PROJETO, ATUALIZA_PROJETO, NOTIFICAR, REMOVE_PROJETO } from "./tipoMutations";
import INotificacao, { TipoNotificacao } from "@/interfaces/INotificacao";


export default interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [
           
        ],
        notificacoes: [
        ],
    },
    mutations: {
        ADICIONA_PROJETO(state: Estado, nome: string) {
            state.projetos.push({
                id: new Date().toISOString(),
                nome,
            })

        },
        ATUALIZA_PROJETO(state: Estado, projeto: IProjeto) {
            const index = state.projetos.findIndex(p => p.id === projeto.id);
            state.projetos[index] = projeto;
        },
        REMOVE_PROJETO(state: Estado, id: string) {
            const index = state.projetos.findIndex(p => p.id === id);
            state.projetos.splice(index, 1);
        },
        NOTIFICAR(state: Estado, notificacao: INotificacao) {
            notificacao.id = new Date().getTime();
            state.notificacoes.push(notificacao);
            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(n => n.id !== notificacao.id);
            }
                , 3000);
        },
        REMOVER_NOTIFICACAO(state: Estado, id: number) {
            const index = state.notificacoes.findIndex(n => n.id === id);
            state.notificacoes.splice(index, 1);
        },
    },
});

export function useStore(): Store<Estado> {
    return vuexUseStore(key);
}