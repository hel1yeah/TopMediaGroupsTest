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
        <label class="form-lable">
          <input type="text" class="form-input" />
          <span class="form-input-placeholder">First Name</span>
        </label>
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
  font-family: "Rubik-Light", sans-serif;
  font-size: 19px;
}
.form-lable {
  position: relative;
  width: 300px;
  height: 56px;
  display: block;
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 16px;
    width: 24px;
    height: 24px;
    background: url("./assets/images/user-name.svg");
  }
}
.form-input-placeholder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  transition: 0.3s;
}
.form-input {
  width: 100%;
  height: 100%;
  padding: 0 5px 0 50px;
  background: transparent;
  position: relative;
  color: var(--color-quinary);
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  outline: transparent;

  &:focus + .form-input-placeholder {
    font-size: 11px;
    color: var(--color-secondary);
    top: 8px;
    transform: translateY(0px);
  }
}
</style>
