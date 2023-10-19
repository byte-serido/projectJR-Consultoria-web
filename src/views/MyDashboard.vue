<template>
  <!-- Nav bar superior -->
  <header>
    <!-- Coloca todos em linha -->
    <div class="navbar">
      <!-- // Div que contem tudo do usuario e o menu -->
      <div class="container-profile">
        <button @click="isMenu = !isMenu">
          <fa :icon="['fa', 'bars']" style="color: #ffffff" size="lg" />
        </button>
        <div class="avatar"></div>
      </div>
      <router-link to="/">
        <img
          class="logo-home"
          src="@/assets/nav/logo-bar.svg"
          alt="Imagem de Logo"
        />
      </router-link>

            <!-- Button de saida -->
            <button @click="onLogout()">
                <fa :icon="['fa', 'right-from-bracket']" style=" color: #FFFFFF;" size="lg"/>
            </button>
        </div>
    </header>
    <main class="dashbord">
        <!-- Menu com animação se for ativado -->
        <transition name="slide" mode="out-in">
            <!-- Menu que irá aparecer quando for clicado -->
            <div class="menu" v-if="isMenu">
                <router-link class="item" to="" active-class="active" exact>
                    <span>Administradores</span>
                </router-link>
                <router-link @click="isMenu=!isMenu" class="item" to="/membros" active-class="active">
                    <span>Membros</span>
                </router-link>
                <router-link class="item" to="" active-class="active">
                    <span>Serviços</span>
                </router-link>
                <router-link class="item" to="" active-class="active">
                    <span>Depoimentos</span>
                </router-link>
                <router-link class="item" to="/posts" active-class="active">
                    <span>Posts</span>
                </router-link>
                <router-link @click="isMenu=!isMenu"  class="item" to="/usuarios" active-class="active">
                    <span>Usuários</span>
                </router-link>
            </div>
        </transition>
        <!-- Conteudo que ficara mudando dependendo da escolha no menu -->
        <div class="dashboard-content">
            <router-view/>
        </div>
    </main>
</template>
<script>
export default {
  data() {
    return {
      isMenu: false,
      username: "",
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      // altera o estado
      this.$store.dispatch("logout");
      // adiciona o sufixo /login a URL da rota
      this.$router.push("/login");
    },
  },
  created() {
    this.username = window.localStorage.getItem("username");
  },
};
</script>
<style scoped>
/* Nav Bar */
header {
  font-family: "Assistant", sans-serif;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 60px;
  background-color: #023f5c;
  border-bottom: 1px solid rgb(230, 227, 227);
}

.navbar .container-profile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.container-profile .avatar {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.container-profile span {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
}

.container-profile button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 400ms ease;
  border-radius: 4px;
}

.container-profile button:active {
  background-color: rgb(231, 226, 226);
}

.navbar button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.logo-home {
  height: 32px;
  width: 32px;
}

/* Dashboard */
.dashbord {
  min-height: 100%;
  width: 100%;
  background-color: #e9eef2;
  display: flex;
  flex-direction: row;
}
/* Menu */
.menu {
  background-color: #023f5c;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid rgb(230, 227, 227);
  min-height: 100%;
}

.menu .item {
  padding: 22px;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: all 400ms ease;
  border-bottom: 1px solid #e9eef2;
}

.menu .item:hover {
  background-color: #042839;
}

.menu .item span {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
}

.menu .item img {
  height: 18px;
  width: 18px;
}

/* Body */
.dashboard-content {
  padding: 60px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  width: 100%;
}

.dashboard-content article p {
  color: black;
}

/* Animação */
@keyframes slide-in {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-300px);
  }
}
.slide-enter-active {
  animation: slide-in 0.5s ease;
}
.slide-leave-active {
  animation: slide-out 0.5s ease;
}

/* Responsive */
@media (max-width: 860px) {
  .container-profile button {
    display: block;
    padding: 8px;
  }
  .menu {
    position: absolute;
    z-index: 9999999;
    height: 1950px;
  }

  .dashboard-content {
    padding: 40px 40px;
  }
}

@media (max-width: 640px) {
  .navbar {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    background-color: #023f5c;
    border-bottom: 1px solid rgb(230, 227, 227);
  }
  .menu {
    width: 200px;
  }
  .dashboard-content {
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: 440px) {
  .dashboard-content {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .navbar {
    padding: 16px 12px;
  }
  .navbar .container-profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .container-profile .avatar {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 26px;
    width: 26px;
  }

  .container-profile span {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
  }

  .logo-home {
    width: 26px;
    height: 26px;
  }
}
</style>
