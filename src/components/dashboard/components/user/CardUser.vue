<template>
  <div class="card" @click="goToDetailsPage()">
    <p>
      Nome: <span>{{ name }}</span>
    </p>
    <p>
      Email: <span>{{ email }}</span>
    </p>
    <p>
      Username: <span>{{ username }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetailsPage() {
      this.$router.push({
        name: 'detail-user',
        params: { user: this.id },
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  max-height: 400px;
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  padding: 12px;
}

.card p {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #023f5c;
  word-break: break-all;
}

.card span {
  font-weight: 700;
}

/* Responsive */
@media (max-width: 860px) {
  .card {
    width: calc(50% - 10px);
  }
}

@media (max-width: 581px) {
  .card {
    width: 100%;
  }
}
</style>
