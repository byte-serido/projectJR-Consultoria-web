<template >
    <section>
        <MyIntroAbout></MyIntroAbout>
        <MyCards></MyCards>
    </section>
</template>

<script>
import MyIntroAbout from '@/components/about/MyIntroAbout.vue';
import MyCards from '@/components/about/MyCards.vue';
export default {
    components: {
        MyIntroAbout, MyCards
    }    
}
</script>
<style scoped>
    
</style>
