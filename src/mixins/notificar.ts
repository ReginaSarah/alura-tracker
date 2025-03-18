import { TipoNotificacao } from "@/interfaces/INotificacao";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipoMutations";

export const notificacaoMixin = {
    methods: {
        notificar(titulo: string, texto: string, tipo: TipoNotificacao) : void {
            (store as any).commit(NOTIFICAR, {
              titulo,
              texto,
              tipo,
            });
          },
    },
};