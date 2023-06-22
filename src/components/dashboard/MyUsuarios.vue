<template>
  <Loading v-if="!finishedLoading" />
  <div class="container-usuarios" v-else>
    <div class="title-row">
      <span>Usuários</span>
      <button @click="redirectToCreateUser()">
        <p>Novo usuário</p>
        <fa :icon="['fa', 'add']" style="color: #ffffff" size="lg" />
      </button>
    </div>

    <div class="grid-usuarios" v-if="usuarios.length > 0">
      <CardUser
        v-for="usuario of usuarios"
        :key="usuario.id"
        :id="usuario.id"
        :name="usuario.name"
        :email="usuario.email"
        :username="usuario.username"
      />
    </div>
    <div class="aviso-nenhum-usuario" v-else>
      <p>Nenhum usuário cadastrado</p>
    </div>
  </div>
</template>

<script>
import CardUser from '@/components/dashboard/components/user/CardUser.vue';
import Loading from '@/components/MySpinnerLoading.vue';

export default {
  components: { CardUser, Loading },
  computed: {
    usuarios() {
      return this.$store.getters.getUsers;
    },
  },
  data() {
    return {
      finishedLoading: false,
    };
  },
  methods: {
    redirectToCreateUser() {
      return this.$router.push({ name: 'create-user' });
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchUserList');
    if (!this.finishedLoading) this.finishedLoading = true;
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.container-usuarios {
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  gap: 60px;
  min-height: 100%;
}

.title-row {
  display: flex;
  gap: 40px;
  align-items: center;
}

.title-row span {
  color: #023f5c;
  font-size: 1.4rem;
  font-weight: 700;
}

.title-row button {
  font-family: 'Inter', sans-serif;
  padding: 10px;
  background-color: #023f5c;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  transition: all 400ms ease;
}

.title-row button:hover {
  background-color: #013249;
}

.title-row button p {
  font-size: 1rem;
  font-weight: 300;
}

.aviso-nenhum-usuario {
  font-size: 1rem;
  font-weight: 700;
  color: #023f5c;
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.aviso-nenhum-usuario p {
  text-align: center;
}

.grid-usuarios {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* Responsive */
@media (max-width: 860px) {
  .container-membros {
    gap: 40px;
  }

  .title-row {
    gap: 30px;
  }
  .title-row span {
    font-size: 1.2rem;
  }
  .title-row button {
    padding: 6px;
    gap: 16px;
  }

  .title-row button p {
    font-size: 1rem;
    font-weight: 300;
  }

  .grid-membros {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .container-usuarios {
    gap: 36px;
  }

  .title-row {
    gap: 28px;
  }
  .title-row span {
    font-size: 1.1rem;
  }
  .title-row button {
    padding: 6px;
    gap: 16px;
  }

  .title-row button p {
    font-size: 1rem;
    font-weight: 300;
  }

  .grid-usuarios {
    gap: 16px;
  }
}

@media (max-width: 440px) {
  .container-usuarios {
    gap: 30px;
  }

  .title-row {
    gap: 26px;
  }
  .title-row span {
    font-size: 1rem;
  }
  .title-row button {
    padding: 6px;
    gap: 16px;
  }

  .title-row button p {
    font-size: 1rem;
    font-weight: 300;
  }

  .grid-membros {
    gap: 16px;
  }
}
</style>
