import { createStore } from 'vuex';



export const key = Symbol();

export const store = createStore({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                titulo: "Projeto 1",
            },
            {
                id: new Date().toISOString(),
                titulo: "Projeto 2",
            },
            {
                id: new Date().toISOString(),
                titulo: "Projeto 3",
            },
        ]
    }
});