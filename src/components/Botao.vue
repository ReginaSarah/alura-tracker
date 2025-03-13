<template>
    <button class="button" @click="click" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>

</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Botao',
    props: {
        icone: {
            type: String,
            default: "",
        },
        texto: {
            type: String,
            default: "",
        },
        desabilitado: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        click(){
            this.$emit('onClick');
        }
    }

});

</script>