<template >
    <section>
        <MyIntroAbout></MyIntroAbout>
        <MyDescription></MyDescription>
        <MyCards></MyCards>
    </section>
</template>

    <!-- AQUI VAMOS ENTREGAR INFORMÇÃO SOBRE A PROJECT JR. COMO A DESCRIÇÃO DA PROJECT E A MISSÃO VISÃO E VALORES -->

<script>

    // AQUI FOI O MAPEAMENTO DO MENU ABOUT DO SITE

import MyIntroAbout from '@/components/about/MyIntroAbout.vue'
import MyDescription from '@/components/about/MyDescription.vue';
import MyCards from '@/components/about/MyCards.vue';
export default {
    components: {MyIntroAbout, MyDescription, MyCards }
}
</script>
<style scoped>
    
</style>
