<template>
  <section class="page-form">
    <div class="page-form-bg"></div>
    <div class="container">
      <img class="logo" src="./assets/images/logo.svg" alt="BestRest logo" />
      <h1 class="title">
        <span class="title__highlight">Sign Up</span> and find the best place to
        rest while traveling
      </h1>
      <form class="form">
        <input type="text" class="form-input" />
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-form {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
    z-index: -1;
  }
}
.page-form-bg {
  position: absolute;
  filter: blur(15px);
  z-index: -2;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background: {
    image: url("./assets/images/bg.jpg");
    position: center center;
    size: cover;
    repeat: no-repeat;
  }
}
.logo {
  display: block;
  margin: 0 auto;
  padding: 170px 0 0;
}
.title {
  margin: 32px 0 0;
  text-align: center;
}
.title__highlight {
  color: var(--color-secondary);
}
.form {
}

.form-input {
  width: 300px;
  height: 56px;
  background: transparent;
  border: 1px solid var(--color-primary);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}
</style>
