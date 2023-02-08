<template scoped>
    <main>
        <MyHero id="hero"></MyHero>
        <MyAbout></MyAbout>
        <MyService></MyService>
        <MyBlog></MyBlog>
        <MyDepoiment></MyDepoiment>
    </main>
</template>

<script>

import MyHero from "../components/home/MyHero.vue"
import MyAbout from "@/components/home/MyAbout.vue";
import MyService from "../components/home/MyService.vue"
import MyDepoiment from "@/components/home/MyDepoiment.vue";
import MyBlog from "@/components/home/MyBlog.vue";
export default {
    components:{MyHero, MyAbout, MyService, MyBlog, MyDepoiment},
}
</script>

<style scoped>
    
</style>
