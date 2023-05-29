<template>
  <div class="blog-container">
    <div class="card">
      <div class="img-post"></div>
      <div class="post-section">
        <div class="header-section">
          <p>{{ post.category }}</p>
          <span>{{ post.date }}</span>
        </div>
        <div class="main-section">
          <router-link to="#">{{ post.title }}</router-link>
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
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {},
  },
};
</script>
<style scoped>
.blog-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  width: 1296px;
  max-width: 90%;
  height: 465px;
  margin-top: 46px;
  margin-bottom: 30px;
}

.img-post {
  width: 645px;
  height: 465px;
  max-width: 50%;
  background: url("../../assets/blog/postImage.svg");
}

.post-section {
  display: flex;
  flex-direction: column;
  width: 623px;
  max-width: 100%;
  padding: 23px 8px 0 23px;
  background: #f7f9fc;
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

.main-section {
  flex: 1;
}

.main-section a {
  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  color: #22749a;
  line-height: 140%;
  text-decoration: none;
}

.main-section p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #4a5468;
}

.footer-section {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}

.profile {
  display: flex;
  flex-direction: column;
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

.footer-section img {
  width: 51px;
  height: 51px;
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
    flex-direction: column;
    height: 559px;
    width: 415px;
    max-width: 90%;
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