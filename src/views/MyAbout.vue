<template >
    <section>
        <MyDescription></MyDescription>
        <MyCards></MyCards>
    </section>
</template>

<script>

import MyDescription from '@/components/about/MyDescription.vue';
import MyCards from '@/components/about/MyCards.vue';
export default {
    components: { MyDescription, MyCards }
}
</script>
<style scoped>
    
</style>
