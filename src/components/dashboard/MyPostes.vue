<template>
  <Loading v-if="isLoading"></Loading>
  <div class="container-posts" v-else>
    <div class="title-row">
      <span>Postagens</span>
      <button @click="onRedirectCreatePost()">
        <p>Nova postagem</p>
        <fa :icon="['fa', 'add']" style="color: #ffffff" size="lg" />
      </button>
    </div>

    <div class="grid-posts">
      <div v-for="(post, index) in posts" :key="index">
        <Card
          :id="post.id"
          :title="post.title"
          :autor="post.autor"
          :imgURL="post.imgUrl"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/dashboard/components/posts/CardPost.vue";
import Loading from "@/components/MySpinnerLoading.vue";
import axios from "axios";
// import Loading from "@/components/dashboard/MySpinnerLoading.vue"
export default {
  components: { Card, Loading },
  data() {
    return {
      posts: {},
      isLoading: true,
    };
  },
  methods: {
    onRedirectCreatePost() {
      return this.$router.push({ name: "create-post" });
    },

    async getPosts() {
      await axios
        .get("https://pjr-api.onrender.com/post/getall")
        .then((resp) => {
          this.posts = resp.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.valid = true;
        });
    },
  },
  async mounted() {
    await this.getPosts();
  },
};
</script><style scoped>
p {
  margin: 0;
  padding: 0;
}
.container-posts {
  color: black;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  gap: 60px;
  height: 100%;
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

.title-row button:hover {
  background-color: #013249;
}

.title-row button p {
  font-size: 1rem;
  font-weight: 300;
}

.grid-posts {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  gap: 20px;
}

/* Responsive */
@media (max-width: 860px) {
  .container-posts {
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

  .grid-posts {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .container-posts {
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

  .grid-posts {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 28px;
    gap: 16px;
  }
}

@media (max-width: 440px) {
  .container-posts {
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

  .grid-posts {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 26px;
    gap: 16px;
  }
}
</style>