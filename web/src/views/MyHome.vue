<template scoped>
    <main>
        <MyHero id="hero"></MyHero>
        <MyService></MyService>
    </main>

    <footer>
        
    </footer>

</template>

<script>
import MyHero from "../components/home/MyHero.vue"
import MyService from "../components/home/MyService.vue"
export default {
    components:{MyHero, MyService},
}
</script>

<style scoped>
    
</style>