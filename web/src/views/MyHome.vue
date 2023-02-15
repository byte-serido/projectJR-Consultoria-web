<template scoped>
    <main>
        <MyHero id="hero"></MyHero>
        <MyAbout></MyAbout>
        <MyService></MyService>
        <MyDepoiment></MyDepoiment>
        <MyPostBlog></MyPostBlog>
    </main>
</template>

<script>

import MyHero from "../components/home/MyHero.vue"
import MyAbout from "@/components/home/MyAbout.vue";
import MyService from "../components/home/MyService.vue"
import MyDepoiment from "@/components/home/MyDepoiment.vue";
import MyPostBlog from "@/components/home/MyPostBlog.vue";
export default {
    components:{MyHero, MyAbout, MyService, MyPostBlog, MyDepoiment},
}
</script>

<style scoped>
    
</style>
