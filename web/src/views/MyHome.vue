<template scoped>
    <main>
        <MyHero id="hero"></MyHero>
        <MyAbout></MyAbout>
        <MyService></MyService>
    </main>
</template>

<script>

import MyHero from "../components/home/MyHero.vue"
import MyAbout from "@/components/home/MyAbout.vue";
import MyService from "../components/home/MyService.vue"
export default {
    components:{MyHero, MyAbout, MyService},
}
</script>

<style scoped>
    
</style>