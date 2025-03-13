<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Box',
});

</script>

<style scoped>
.box {
     background: #FAF0CA;
     margin: 15px;
 }
</style>