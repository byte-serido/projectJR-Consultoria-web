<template>
  <div class="posts-container">
    <div class="posts">
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          <div
            class="img-post"
            :style="{ background: `url(${post.img})` }"
          ></div>
          <div class="post-section">
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

.card:nth-child(1) {
  display: flex;
  width: 81rem;
  max-width: 100%;
  height: 29.063rem;
  margin-top: 2.875rem;
  margin-bottom: 1.875rem;
}

.card:nth-child(1) > a {
  flex-direction: row;
}

.card:nth-child(1) > a > .img-post {
  width: 40.313rem;
  height: 29.063rem;
  max-width: 50%;
}

.card:nth-child(1) > a > .post-section {
  width: 41.313rem;
  max-width: 100%;
}

.card > a {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
}
.posts-container {
  display: flex;
  justify-content: center;
}
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 90%;
  width: 81rem;
}

.card {
  width: 25.938rem;
  background: #f7f9fc;
  margin-bottom: 1.625rem;
}

.img-post {
  width: 25.938rem;
  height: 14rem;
}

.post-section {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.438rem 0.5rem 0 1.438rem;
  background: #f7f9fc;
}

.header-section {
  display: flex;
  gap: 0.625rem;
  font-family: "Inter";
  font-size: 0.813rem;
  font-weight: 400;
  color: #4a5468;
}

.header-section > p {
  font-weight: bold;
  margin-bottom: 0;
}

.main-section {
  flex: 1;
}

.main-section h2 {
  font-family: "Inter";
  font-weight: 700;
  font-size: 1.75rem;
  color: #22749a;
  text-decoration: none;
  line-height: 140%;
}

.main-section p {
  flex: 1;
  font-family: "Inter";
  font-weight: 400;
  font-size: 1.25rem;
  color: #4a5468;
  line-height: 140%;
}

.footer-section {
  display: flex;
  align-items: center;
  margin-bottom: 1.375rem;
}

.profile p {
  font-family: "Inter";
  font-weight: 600;
  font-size: 1.125rem;
  color: #023f5c;
  margin-bottom: 0;
}

.profile span {
  font-family: "Asap";
  font-weight: 400;
  font-size: 0.75rem;
  color: #4cb8e7;
}

.load-text {
  display: flex;
  justify-content: center;
  color: #0a4b69;
  font-family: "Assistant";
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 171%;
}

@media (max-width: 1200px) {
  .header-section {
    font-size: 0.688rem;
  }

  .main-section a {
    font-size: 1.625rem;
  }

  .main-section p {
    font-size: 1.125rem;
  }
  .profile p {
    font-size: 1rem;
  }

  .profile span {
    font-size: 0.75rem;
  }

  .footer-section img {
    width: 3.188rem;
    height: 3.188rem;
  }
}

@media (max-width: 990px) {
  .card {
    display: flex;
    width: 81rem;
    max-width: 100%;
    height: 29.063rem;
    margin-top: 2.875rem;
    margin-bottom: 1.875rem;
  }

  .card > a {
    flex-direction: row;
  }

  .img-post {
    width: 40.313rem;
    height: 29.063rem;
    max-width: 50%;
  }

  .post-section {
    width: 41.313rem;
    max-width: 100%;
  }

  .main-section h2 {
    font-size: 1.25rem;
  }

  .main-section p {
    font-size: 1rem;
  }
  .profile p {
    font-size: 0.875rem;
  }

  .profile span {
    font-size: 0.75rem;
  }

  .footer-section img {
    width: 2.875rem;
    height: 2.875rem;
  }
}

@media (max-width: 768px) {
  .main-section h2 {
    font-size: 1.125rem;
  }

  .main-section p {
    font-size: 0.875rem;
  }
  .profile p {
    font-size: 0.75rem;
  }

  .profile span {
    font-size: 0.625rem;
  }
}

@media (max-width: 600px) {
  .card:nth-child(n) {
    height: 34.938rem;
    width: 25.938rem;
    max-width: 90%;
  }

  .card:nth-child(n) > a {
    flex-direction: column;
  }
  .card:nth-child(n) > a > .img-post {
    max-width: 100%;
    background-repeat: no-repeat;
    height: 14rem;
    background-size: cover;
    border-radius: 0.625rem 0.625rem 0 0;
  }

  .card:nth-child(n) > a > .post-section {
    width: 25.938rem;
  }

  .posts {
    justify-content: center;
  }

  .header-section {
    font-size: 0.5rem;
  }

  .main-section h2 {
    font-size: 0.875rem;
  }

  .main-section p {
    font-size: 0.625rem;
  }
  .profile p {
    font-size: 0.75rem;
  }

  .profile span {
    font-size: 0.625rem;
  }

  .footer-section img {
    width: 2.625rem;
    height: 2.625rem;
  }
}

@media (max-width: 280px) {
  .card:nth-child(n) > a > .img-post {
    display: none;
  }
  .main-section h2 {
    font-size: 0.75rem;
  }
}
</style>