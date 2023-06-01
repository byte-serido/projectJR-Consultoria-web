<template>
  <div class="posts-container">
    <div class="posts">
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          <div
            class="img-post"
            :style="{ background: `url(${post.img})` }"
          ></div>
          <div class="header-section">
            <p>{{ post.category }}</p>
            <span>{{ post.date }}</span>
          </div>
          <div class="main-section">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
          <div class="footer-section">
            <img src="../../assets/blog/profile.svg" alt="Imagem de perfil" />
            <div class="profile">
              <p>{{ post.name }}</p>
              <span>{{ post.role }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="load-text">
    <p>Carregar mais postagens</p>
  </div>
</template>
<script>
export default {
  props: {
    posts: [],
  },

  mounted() {
    this.posts.map((e) => console.log(e.img));
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.card > a {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
}
.posts-container {
  display: flex;
  justify-content: center;
}
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(415px, 1fr));
  justify-items: center;
  max-width: 90%;
  width: 1296px;
}

.card {
  width: 415px;
  background: #f7f9fc;
  margin-bottom: 26px;
}

.card div {
  padding-left: 15px;
  padding-right: 8px;
}

.img-post {
  width: 415px;
  height: 224px;
}

.header-section {
  display: flex;
  gap: 10px;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  color: #4a5468;
}

.header-section > p {
  font-weight: bold;
  margin-bottom: 0;
}

.main-section h2 {
  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  color: #22749a;
  text-decoration: none;
  line-height: 140%;
}

.main-section p {
  height: 173px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #4a5468;
  line-height: 140%;
}

.footer-section {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
}

.profile p {
  font-family: "Inter";
  font-weight: 600;
  font-size: 18px;
  color: #023f5c;
  margin-bottom: 0;
}

.profile span {
  font-family: "Asap";
  font-weight: 400;
  font-size: 12px;
  color: #4cb8e7;
}

.load-text {
  display: flex;
  justify-content: center;
  color: #0a4b69;
  font-family: "Assistant";
  font-weight: 700;
  font-size: 14px;
  line-height: 171%;
}

@media (max-width: 1200px) {
  .header-section {
    font-size: 11px;
  }

  .main-section a {
    font-size: 26px;
  }

  .main-section p {
    font-size: 18px;
    margin-bottom: 8px;
  }
  .profile p {
    font-size: 16px;
  }

  .profile span {
    font-size: 12px;
  }

  .footer-section img {
    width: 51px;
    height: 51px;
  }
}

@media (max-width: 990px) {
  .main-section a {
    font-size: 24px;
  }

  .main-section p {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .profile p {
    font-size: 14px;
  }

  .profile span {
    font-size: 12px;
  }

  .footer-section img {
    width: 46px;
    height: 46px;
  }
}

@media (max-width: 768px) {
  .card {
    height: 559px;
    width: 415px;
    max-width: 90%;
  }

  .card > a {
    flex-direction: column;
  }
  .img-post {
    max-width: 100%;
    background-repeat: no-repeat;
    height: 224px;
    background-size: cover;
    border-radius: 10px 10px 0 0;
  }

  .post-section {
    width: 415px;
    height: 398px;
  }

  .footer-section {
    margin-bottom: 22px;
  }
}

@media (max-width: 600px) {
  .main-section a {
    font-size: 16px;
  }

  .main-section p {
    font-size: 12px;
    margin-bottom: 8px;
  }
  .profile p {
    font-size: 12px;
  }

  .profile span {
    font-size: 10px;
  }

  .footer-section img {
    width: 42px;
    height: 42px;
  }
}
</style>