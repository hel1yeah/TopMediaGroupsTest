<template>
  <section class="form">
    <div class="form-bg"></div>
    <div class="container"></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  width: 100vw;
  height: 100vh;
  position: relative;
  .form-bg {
    position: absolute;
    filter: blur(15px);
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    background: {
      image: url("./assets/images/bg.jpg");
      position: top top;
      size: cover;
      repeat: no-repeat;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
  }
}
</style>
