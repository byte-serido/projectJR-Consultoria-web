<template>
  <section class="navbar-container">
    <div class="container navbar">
      <router-link to="/">
        <img src="../assets/nav/logo-bar.svg" alt="Logo da ByteSeridó Jr" />
      </router-link>
      <div class="menu-bar">
        <router-link to="/" active-class="active" exact>
          <q-btn class="menu-button" label="Início"> </q-btn>
        </router-link>
        <router-link to="/about" active-class="active">
          <q-btn class="menu-button" label="Quem somos"> </q-btn>
        </router-link>
        <q-btn-dropdown class="button-services" label="Services" auto-close>
          <q-list style="min-width: 200">
            <div
              class="list-itens"
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
              <div class="list-item">
                <router-link class="item" to="" active-class="active">{{
                  item.title
                }}</router-link>
              </div>
            </div>
          </q-list>
        </q-btn-dropdown>
        <router-link to="/blog" active-class="active">
          <q-btn class="menu-button" label="Blog"> </q-btn>
        </router-link>
      </div>
      <router-link to="/contact" src="MyContact.vue" active-class="active">
        <transition name="fade" mode="out-in">
          <button class="nav-button">Agende um Diagnóstico</button>
        </transition>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Comunicação" },
        { title: "Organização" },
        { title: "Proatividade" },
        { title: "Reuniões" },
      ],
    };
  },
};
</script>
<style scoped>
.navbar-container {
  padding: 25px 80px;
  background-color: #023f5c;
  font-family: "Assistant", sans-serif;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-bar {
  display: flex;
  gap: 50px;
  align-items: center;
}
li {
  list-style: none;
}
.menu-button {
  text-transform: none;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 400;
  font-family: "Assistant", sans-serif;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  transition: all 400ms ease;
  letter-spacing: -0.01rem;
  line-height: 0rem;
  padding: 20px;
  min-height: 0;
}
.menu-button::before {
  box-shadow: none;
}
.menu-button:hover {
  background-color: #023f5c;
  color: #41a8d3;
}

.button-services {
  text-transform: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 400;
  font-family: "Assistant", sans-serif;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  transition: all 400ms ease;
  letter-spacing: -0.01rem;
  line-height: 0rem;
  min-height: 20px;
}

.button-services::before {
  box-shadow: none;
}
.button-services:hover {
  background-color: #023f5c;
  color: #41a8d3;
}
.nav-button {
  font-family: "Assistant", sans-serif;
  color: #ffffff;
  background-color: #41a8d3;
  border: 1px solid #41a8d3;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.01rem;
  border-radius: 6px;
  position: relative;
  transition: all 400ms ease;
  cursor: pointer;
}

.nav-button:hover {
  border: 1px solid white;
  background-color: transparent;
}

a {
  text-decoration: none;
}

.list-itens {
  padding: 20px;
  color: #41a8d3;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  transition: all 400ms ease;
  letter-spacing: -0.01rem;
}
.list-itens:hover {
  color: #41a8d3;
  background-color: #bce3f3;
}

.item {
  color: #41a8d3;
}
/* @media */
@media (max-width: 1080px) {
  .menu-bar {
    display: none;
  }
  .navbar {
    justify-content: center;
  }
  .nav-button {
    display: none;
  }
}
</style>