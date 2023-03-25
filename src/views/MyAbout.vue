<template >
    <header>
      <NavBar></NavBar>
    </header>
    <main>
        <MyIntroAbout></MyIntroAbout>
        <MyDescription></MyDescription>
        <MyCards></MyCards>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/MyFooter.vue"
import MyIntroAbout from '@/components/about/MyIntroAbout.vue'
import MyDescription from '@/components/about/MyDescription.vue';
import MyCards from '@/components/about/MyCards.vue';
export default {
    components: {MyIntroAbout, MyDescription, MyCards, NavBar, Footer}
}
</script>
<style scoped>
    
</style>
