<template>
  <div class="blog-container">
    <div class="card">
      <img
        class="img-post"
        src="../../assets/blog/postImage.svg"
        alt="Imagem do post"
      />
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
  height: 465px;
  margin-top: 46px;
  margin-bottom: 30px;
}

.img-post {
  width: 673px;
  height: 465px;
}

.post-section {
  width: 661px;
  height: 465px;
  padding: 23px 0 0 23px;
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

.main-section a {
  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  color: #22749a;
  line-height: 40px;
  text-decoration: none;
}

.main-section p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #4a5468;
}

.footer-section {
  display: flex;
  align-items: center;
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
</style>