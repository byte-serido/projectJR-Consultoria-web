<template>
  <div class="posts-container">
    <div class="posts">
      <div class="card" v-for="post in posts" :key="post.id">
        <div class="img-post"></div>
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
    posts: [],
  },
};
</script>
<style scoped>
.posts-container {
  display: flex;
  justify-content: center;
}
.posts {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  width: 1296px;
}

.card {
  width: 415px;
  background: #f7f9fc;
  margin-bottom: 26px;
  max-width: 90%;
}

.card div {
  padding-left: 15px;
  padding-right: 8px;
}

.img-post {
  width: 415px;
  height: 224px;
  background: url("../../assets/blog/post1.svg");
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
  text-decoration: none;
}

.main-section p {
  height: 173px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #4a5468;
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
</style>