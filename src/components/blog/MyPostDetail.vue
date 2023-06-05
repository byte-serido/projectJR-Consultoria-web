<template>
  <div class="post-container">
    <p class="title">{{ post.title }}</p>
    <div class="container">
      <div class="post">
        <div class="img-post"></div>
        <div class="content">
          <p v-for="(description, index) in post.description" :key="index">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="side-container">
        <div class="header">
          <p>{{ post.category }}</p>
          <span>{{ post.date }}</span>
        </div>
        <div class="profile">
          <img
            class="img-profile"
            src="../../assets/blog/profile.svg"
            alt="Imagem de perfil"
          />
          <div class="person">
            <p>{{ post.name }}</p>
            <span>{{ post.role }}</span>
          </div>
        </div>
        <p>Outras postagens</p>
        <div class="card" v-for="i in quantPosts" :key="i">
          <div class="img-side-post"></div>
          <div class="post-section">
            <div class="header-section">
              <p>{{ post.category }}</p>
              <p class="dot"></p>
              <span>{{ post.date }}</span>
            </div>
            <h2 class="side-post-title">{{ post.title }}</h2>
            <div class="side-post-footer">
              <router-link class="link" to="#">Leia mais</router-link>
              <img src="../../assets/blog/arrow.svg" alt="Seta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {},
  },
  data() {
    return {
      quantPosts: 2,
    };
  },
};
</script>
<style scoped>
.post-container {
  background: #fff;
  padding-top: 62px;
}
.dot {
  height: 5px;
  width: 5px;
  background-color: #4a5468;
  border-radius: 50%;
  display: inline-block;
}
.title {
  font-family: "Inter";
  font-weight: 700;
  font-size: 2.31rem;
  line-height: 140%;
  text-align: center;
  color: #22749a;
  margin-bottom: 41px;
}

.container {
  display: flex;
  justify-content: center;
}

.img-post {
  background: url("../../assets/blog/postImage.svg");
  width: 843px;
  max-width: 100%;
  height: 383px;
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  margin-bottom: 41px;
}

.post {
  width: 943.5px;
  max-width: 65%;
  padding-right: 34.5px;
  padding-left: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  border-right: 1px solid #cbd2e0;
}

.content {
  font-family: "Inter";
  font-weight: 400;
  font-size: 1.558rem;
  line-height: 140%;
  text-align: justify;
}

.content p {
  color: #4a5468;
}

.side-container {
  width: 496px;
  max-width: 35%;
  padding-left: 33.5px;
  padding-right: 35px;
}

.header {
  height: 68px;
  font-family: "Inter";
  font-size: 1.291rem;
  line-height: 140%;
  border-bottom: 1px solid #cbd2e0;
}

.header p {
  margin-bottom: 0;
  font-weight: 700;
  color: #4a5468;
}

.header span {
  color: #4a5468;
}

.profile {
  display: flex;
  align-items: center;
  height: 96px;
  gap: 10px;
  border-bottom: 1px solid #cbd2e0;
}

.img-profile {
  width: 60px;
  height: 60px;
  border-radius: 100%;
}

.person {
  display: flex;
  flex-direction: column;
}

.person p {
  font-size: 1.23rem;
  font-family: "Inter";
  margin-bottom: 0;
  color: #023f5c;
  font-weight: 600;
}

.person span {
  font-family: "Asap";
  font-weight: 400;
  font-size: 0.894rem;
  color: #4cb8e7;
}

.side-container > p {
  margin: 16px 0 22px 0;
  font-family: "Inter";
  font-weight: 800;
  font-size: 1.291rem;
  line-height: 140%;
  color: #22749a;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 415px;
  max-width: 100%;
  margin-bottom: 40px;
  background-color: #f7f9fc;
  border-radius: 10px;
}

.img-side-post {
  background: url("../../assets/blog/social-media.svg");
  width: 415px;
  max-width: 100%;
  height: 224px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
}

.post-section {
  width: 415px;
  max-width: 100%;
  background: #f7f9fc;
  padding: 30px 21px 21px 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.header-section {
  display: flex;
  gap: 5px;
  align-items: center;
  font: "Inter";
  font-size: 0.813rem;
  color: #4a5468;
}

.header-section > p {
  margin: 0;
  font-weight: 700;
}

.side-post-footer {
  display: flex;
  gap: 10px;
  align-items: center;
}

.side-post-footer > img {
  width: 10px;
  height: 10px;
}

.side-post-title {
  font-family: "Inter";
  margin: 0 0 10px 0;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 140%;
  color: #22749a;
}

.link {
  font-family: "Inter";
  font-weight: 400;
  font-size: 1.082rem;
  line-height: 140%;
  color: #1a688a;
}

@media (max-width: 1200px) {
  .title {
    font-size: 1.875rem;
  }

  .content {
    font-size: 1.25rem;
  }

  .header {
    font-size: 0.938rem;
  }

  .side-container > p {
    font-size: 1.125rem;
  }

  .side-post-title {
    font-size: 1.5rem;
  }

  .link {
    font-size: 0.938rem;
  }
}

@media (max-width: 990px) {
  .title {
    font-size: 1.625rem;
  }

  .content {
    font-size: 1rem;
  }

  .side-post-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.375rem;
  }

  .header-section {
    font-size: 0.625rem;
  }

  .link {
    font-size: 0.75rem;
  }

  .person p {
    font-size: 1rem;
  }

  .person span {
    font-size: 0.75rem;
  }

  .side-post-title {
    font-size: 0.875rem;
  }
}

@media (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 1.125rem;
  }
  .post {
    max-width: 90%;
    padding: 0;
    align-items: center;
    margin-bottom: 30px;
    border-right: 0;
    border-bottom: 1px solid #cbd2e0;
  }

  .card {
    display: none;
  }

  .side-container > p {
    display: none;
  }

  .side-container {
    width: 100%;
    max-width: 90%;
    padding: 0;
  }

  .profile {
    margin-bottom: 90px;
    border-bottom: 1px solid #cbd2e0;
  }
}
</style>