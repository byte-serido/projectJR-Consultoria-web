<template scoped>
    <main>
        <MyHero id="hero"></MyHero>
        <MyAbout></MyAbout>
        <MyService></MyService>
        <MyDepoiment></MyDepoiment>
        <MyContact></MyContact>
    </main>
</template>

<script>

import MyHero from "../components/home/MyHero.vue"
import MyAbout from "@/components/home/MyAbout.vue";
import MyService from "../components/home/MyService.vue"
import MyDepoiment from "@/components/home/MyDepoiment.vue";
import MyContact from "@/components/home/MyContact.vue"
export default {
    components:{MyHero, MyAbout, MyService, MyDepoiment, MyContact},
}
</script>

<style scoped>
    
</style>