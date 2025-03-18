<template>
  <div class="box">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para iniciar uma nova tarefa">
        <input class="input" type="text" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao" />

      </div>
      <div class="column is-2">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoFinalizarTarefa="salvarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Temporizador from "../../components/Temporizador.vue";
import { useStore } from "vuex";
import { key } from "@/store";
import IProjeto from "@/interfaces/IProjeto";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipoMutations";
import { notificacaoMixin } from "@/mixins/notificar";

export default defineComponent({
  name: "Formulario",
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador,
  },
  data() {
    return {
      descricao: '',
      idProjeto: '',
    }
  },
  setup() {
    const store = useStore(key);
    const projetos = computed(() => store.state.projetos);
    return {
      store,
      projetos,
    }
  },
  mixins: [notificacaoMixin],
  methods: {
    salvarTarefa(tempoEmSegundos: number): void {

      const projeto = (this.projetos as IProjeto[]).find((proj: IProjeto) => proj.id === this.idProjeto) as IProjeto;
      if (projeto) {
        this.$emit('aoSalvarTarefa', {
          duracaoEmSegundos: tempoEmSegundos, 
          descricao: this.descricao,
          projeto: projeto,
        });
        this.descricao = '';
      } else {
        this.notificar('Projeto não encontrado', 'O projeto selecionado não foi encontrado', TipoNotificacao.FALHA);
      }

    }

  }
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}

.box {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>