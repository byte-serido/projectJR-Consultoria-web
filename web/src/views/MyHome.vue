<template scoped>
    <main>
        <MyHero id="hero"></MyHero>
        <Service/>
    </main>
</template>

<script>

import MyHero from "../components/home/MyHero.vue"
import Service from "../components/home/MyService.vue"

export default {
    components:{MyHero, Service},
}
</script>

<style scoped>
    
</style>