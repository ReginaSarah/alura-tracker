<template>
  <section class="">
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjet" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>

  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import { ADICIONA_PROJETO, ATUALIZA_PROJETO } from "@/store/tipoMutations";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import useNotificador from "@/hooks/notificador";

export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const { notificar } = useNotificador();

    let nomeDoProjeto = ref("");

    if (props.id) {
      const projeto = (store as any).state.projetos.find((projeto: any) => projeto.id === props.id);
      nomeDoProjeto = projeto?.nome || "";
    }

    const salvar = () => {
      if (props.id) {
        (store as any).commit(ATUALIZA_PROJETO, { id: props.id, nome: nomeDoProjeto });
      } else {
        (store as any).commit(ADICIONA_PROJETO, nomeDoProjeto);
      }

      nomeDoProjeto = "";
      router.push("/projetos");

      notificar(TipoNotificacao.SUCESSO, "Projeto salvo com sucesso", "O projeto foi salvo com sucesso");
    };

    return {
      nomeDoProjeto,
      salvar,
    };
  },
});
</script>
