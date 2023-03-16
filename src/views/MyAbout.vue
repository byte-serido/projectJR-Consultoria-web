<template >
    <section>
        <MyIntroAbout></MyIntroAbout>
        <MyDescription></MyDescription>
        <MyCards></MyCards>
    </section>
</template>

<script>
import MyIntroAbout from '@/components/about/MyIntroAbout.vue'
import MyDescription from '@/components/about/MyDescription.vue';
import MyCards from '@/components/about/MyCards.vue';
export default {
    components: {MyIntroAbout, MyDescription, MyCards }
}
</script>
<style scoped>
    
</style>
