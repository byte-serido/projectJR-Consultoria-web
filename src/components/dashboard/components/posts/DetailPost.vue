<template>
  <SpinnerLoading v-if="isLoading"></SpinnerLoading>
  <div class="container-details" v-else>
    <div class="data-details">
      <h1>Detalhes</h1>
      <div class="card-detail">
        <div>
          <img
            class="avatar"
            :src="urlImg === null ? post.imgUrl : urlImg"
            alt="Imagemm Avatar"
          />
          <input type="file" @change="onFileSelected" />
        </div>
        <div class="card-item">
          <h2>Título:</h2>
          <input
            type="text"
            v-model="post.title"
            onkeypress="return isNaN(event.key) || event.key === ' '"
          />
        </div>
        <div class="card-item">
          <h2>Autor:</h2>
          <input
            type="text"
            onkeypress="return isNaN(event.key) || event.key === ' '"
            v-model="post.autor"
          />
        </div>
        <div class="card-item">
          <h2>Descrição:</h2>
          <input v-model="post.description" />
        </div>
      </div>
    </div>

    <div class="settings-details">
      <h1>Configurações</h1>
      <template v-if="!isAlter">
        <SpinnerLoading></SpinnerLoading>
      </template>
      <button @click="updatePost()" v-else><p>Salvar Alterações</p></button>
      <template v-if="!isDeleted">
        <SpinnerLoading></SpinnerLoading>
      </template>
      <button @click="deletePost()" class="remove" v-else>
        <p>Deletar Postagem</p>
      </button>
    </div>
  </div>
</template>
<script>
import SpinnerLoading from "@/components/MySpinnerLoading.vue";

// import axios from 'axios';
// mascara
import { storage } from "@/firebase";
import router from "@/router";
import axios from "axios";
import { deleteObject, getDownloadURL, uploadBytes } from "firebase/storage";
import { ref } from "vue";
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  components: {
    SpinnerLoading,
  },
  data() {
    return {
      post: {},
      isLoading: true,

      imageFile: null,
      urlImg: null,

      //Validação para loading
      isAlter: true,
      isDeleted: true,
    };
  },

  methods: {
    async getPostAction(idPost) {
      await axios
        .get(`https://pjr-api.onrender.com/post/getone${idPost}`)
        .then((resp) => {
          this.post = resp.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.valid = true;
        });
    },

    //Função que seta a imagem na tela antes de salvar
    onFileSelected(event) {
      const file = event.target.files[0];
      this.imageFile = file;
      this.urlImg = URL.createObjectURL(file);
    },

    async updatePost() {
      //loading
      this.isAlter = !this.isAlter;
      const post = {
        id: this.post.id,
        title: this.post.title,
        autor: this.post.autor,
        description: this.post.description,
        imgUrl: await this.updateImagePost(),
      };
      await axios
        .put("https://pjr-api.onrender.com/post/update", post)
        .then((resp) => {
          if (resp.status !== 201) {
            alert(
              "Postagem não alterada, verifique os dados e tente novamente !!"
            );
          } else {
            alert("Postagem alterada com sucesso!!");
            router.push("/posts");
          }
        })
        .catch((error) => {
          return console.log(error);
        });
      this.isAlter = !this.isAlter;
    },
    async updateImagePost() {
      try {
        if (this.imageFile === null) {
          // Se nenhuma nova imagem for selecionada, retorne a URL existente ou uma string vazia
          return this.post.imgUrl;
        } else {
          // Exclua a imagem atual
          if (this.post.imgUrl !== "") {
            const currentImageRef = ref(storage, this.post.imgUrl);
            await deleteObject(currentImageRef);
          }
          // Faça o upload da nova imagem
          const storageRef = ref(storage, `post/${this.imageFile.name}`);
          await uploadBytes(storageRef, this.imageFile);

          // Obtenha a nova URL da imagem
          const url = await getDownloadURL(storageRef);

          return url;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //Fução de delecão
    async deletePost() {
      this.isDeleted = !this.isDeleted;
      await axios
        .delete("https://pjr-api.onrender.com/post/delete", {
          data: { id: this.post.id },
        })
        .then((resp) => {
          if (resp.status !== 201) {
            return alert(
              "Erro ao deletar postagem, verifique os dados e tente novamente !!"
            );
          } else {
            alert("Postagem deletada com sucesso!!");
            router.push("/posts");
          }
        })
        .catch((error) => {
          return console.log(error);
        });
      this.isDeleted = !this.isDeleted;
    },
  },

  async mounted() {
    const objetoJson = JSON.parse(decodeURIComponent(this.$route.params.post));
    this.getPostAction(objetoJson);
  },
};
</script>

<style scoped>
.container-details {
  padding-bottom: 40px;
  color: black;
  display: flex;
  flex-direction: row;
  font-family: "Inter", sans-serif;
  gap: 60px;
  width: 100%;
}

.card-detail .avatar {
  height: 400px;
  width: 540px;
  border-radius: 4px;
}

h1 {
  color: #023f5c;
  font-size: 2rem;
  font-weight: 700;
}

h2 {
  margin: 0;
  padding: 0;
  color: #023f5c;
  font-weight: 600;
  font-size: 1.6rem;
}

p {
  margin: 0;
  padding: 0;
}

.data-details {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.settings-details {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;
  height: 25%;
}

button {
  max-width: 150px;
  font-family: "Inter", sans-serif;
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

button:hover {
  background-color: #013249;
}

button p {
  font-size: 1rem;
  font-weight: 300;
}

.remove {
  background-color: rgb(189, 3, 3);
}

.remove:hover {
  background-color: rgb(139, 3, 3);
}

.card-detail {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.card-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-item p {
  font-weight: 500;
}

/* inputs */

/* Retirando setas dos inputs */
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.card-item input {
  width: 100%;
  padding: 10px 6px;
  border: #8db5c7 solid 1px;
  border-radius: 4px;
}

.card-item input:focus {
  border: 2px solid #41a8d3;
  outline: none;
}

textarea {
  width: 100%;
  padding: 10px 6px;
  border: #8db5c7 solid 1px;
  border-radius: 4px;
}

textarea:focus {
  border: 2px solid #41a8d3;
  outline: none;
}

@media (max-width: 1188px) {
  .container-details {
    padding-bottom: 40px;
    color: black;
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    gap: 60px;
    width: 100%;
  }
}

@media (max-width: 610px) {
  .card-detail .avatar {
    width: 100%;
    height: 300px;
    border-radius: 4px;
  }
}
</style>