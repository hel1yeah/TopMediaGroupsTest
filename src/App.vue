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
        <label class="form__lable">
          <img
            class="form__lable-img"
            src="./assets/images/user-name.svg"
            alt="Name"
          />
          <input
            type="text"
            class="form-input"
            :class="{ 'form-input-active': isActiveNameInput }"
            v-model="isActiveNameInput"
          />
          <span
            class="form-input__placeholder"
            :class="{ 'form-input__placeholder-active': isActiveNameInput }"
            >First Name</span
          >
        </label>
        <label class="form__lable">
          <img
            class="form__lable-img"
            src="./assets/images/user-second.svg"
            alt="Second Name"
          />
          <input
            type="text"
            class="form-input"
            :class="{ 'form-input-active': isActiveSecondNameInput }"
            v-model="isActiveSecondNameInput"
          />
          <span
            class="form-input__placeholder"
            :class="{
              'form-input__placeholder-active': isActiveSecondNameInput,
            }"
            >Second Name</span
          >
        </label>
        <label class="form__lable">
          <img
            class="form__lable-img"
            src="./assets/images/map-marker.svg"
            alt="Country"
          />
          <input
            type="text"
            class="form-input"
            :class="{ 'form-input-active': isActiveCountryInput }"
            v-model="isActiveCountryInput"
          />
          <span
            class="form-input__placeholder"
            :class="{ 'form-input__placeholder-active': isActiveCountryInput }"
            >Country</span
          >
        </label>
        <label class="form__lable">
          <img
            class="form__lable-img"
            src="./assets/images/phone.svg"
            alt="Phone"
          />
          <input
            type="text"
            class="form-input"
            :class="{ 'form-input-active': isActivePhoneInput }"
            v-model="isActivePhoneInput"
          />
          <span
            class="form-input__placeholder"
            :class="{ 'form-input__placeholder-active': isActivePhoneInput }"
            >Phone</span
          >
        </label>
        <label class="form__lable">
          <img
            class="form__lable-img"
            src="./assets/images/padlock.svg"
            alt="Password"
          />
          <input
            type="text"
            class="form-input"
            :class="{ 'form-input-active': isActivePasswordInput }"
            v-model="isActivePasswordInput"
          />
          <span
            class="form-input__placeholder"
            :class="{ 'form-input__placeholder-active': isActivePasswordInput }"
            >Password</span
          >
        </label>
        <label class="form__lable">
          <img
            class="form__lable-img"
            src="./assets/images/padlock-confirm.svg"
            alt="Confirm Password"
          />
          <input
            type="text"
            class="form-input"
            :class="{ 'form-input-active': isActiveConfirmPasswordInput }"
            v-model="isActiveConfirmPasswordInput"
          />
          <span
            class="form-input__placeholder"
            :class="{
              'form-input__placeholder-active': isActiveConfirmPasswordInput,
            }"
            >Confirm password</span
          >
        </label>
        <label class="form__lable">
          <img
            class="form__lable-img"
            src="./assets/images/email.svg"
            alt="Email"
          />
          <input
            type="text"
            class="form-input"
            :class="{ 'form-input-active': isActiveEmailInput }"
            v-model="isActiveEmailInput"
          />
          <span
            class="form-input__placeholder"
            :class="{ 'form-input__placeholder-active': isActiveEmailInput }"
            >Email</span
          >
        </label>

        <v-checkbox></v-checkbox>

        <v-button> Sing Up </v-button>
      </form>
    </div>
  </section>
</template>

<script>
import vButton from "./components/vButton.vue";
import vCheckbox from "./components/vCheckbox.vue";

export default {
  components: {
    vCheckbox,
    vButton,
  },
  data() {
    return {
      isActiveNameInput: "",
      isActiveSecondNameInput: "",
      isActiveCountryInput: "",
      isActivePhoneInput: "",
      isActivePasswordInput: "",
      isActiveConfirmPasswordInput: "",
      isActiveEmailInput: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.page-form {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;

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
  max-width: 630px;
  margin: 55px auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.form__lable {
  position: relative;
  width: 300px;
  height: 56px;
  display: block;
  margin: 0 0 30px 0;
}

.form__lable--checkbox {
  height: 22px;
}

.form__lable-img {
  position: absolute;
  top: 15px;
  left: 16px;
  width: 24px;
  height: 24px;
  z-index: 1;
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
  &:focus {
    outline: transparent;
  }
}
.form-input:focus + .form-input__placeholder,
.form-input__placeholder.form-input__placeholder-active {
  font-size: 11px;
  color: var(--color-secondary);
  transform: translateY(-20px);
}
.form-input:focus,
.form-input.form-input-active {
  background: rgba(0, 0, 0, 0.4);
}
.form-input__placeholder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  transition: 0.3s;
}
</style>
