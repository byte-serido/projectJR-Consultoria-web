<template>
  <section>
    <div class="container">
      <h2>
        Conheça nosso serviço de
        <span>
          {{ service }}
        </span>
      </h2>
      <p>{{ description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    service: {
      required: true,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
section {
  background-color: #023f5c;
  padding: 46px 44px;
}

h2,
p {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 46px;
  align-items: stretch;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #41a8d3;
  font-family: 'Assistant';
}

h2 span {
  display: block;
  color: #fff;
}

p {
  font-size: 1.125rem;
  font-family: 'Asap';
  max-width: 600px;
  color: #fff;
}

@media screen and (min-width: 640px) {
  .whats-supplied {
    padding: 70px 66px;
  }

  .whats-supplied h2 {
    font-size: 3.5rem;
  }
}
</style>
