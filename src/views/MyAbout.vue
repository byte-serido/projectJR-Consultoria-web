<template >
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
        <MyIntroAbout></MyIntroAbout>
        <MyDescription></MyDescription>
        <MyCards></MyCards>
        <MyEquip></MyEquip>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/MyFooter.vue"
import MyIntroAbout from '@/components/about/MyIntroAbout.vue'
import MyDescription from '@/components/about/MyDescription.vue';
import MyCards from '@/components/about/MyCards.vue';
import MyEquip from '@/components/about/MyEquip.vue'
export default {
    components: {MyIntroAbout, MyDescription, MyCards, NavBar, Footer, MyEquip}
}
</script>
<style scoped>
    
</style>
