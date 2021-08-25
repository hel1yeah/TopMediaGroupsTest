<template>
  <section class="page-form">
    <div class="page-form-bg"></div>
    <div class="container">
      <div class="page-form__inner">
        <img class="logo" src="./assets/images/logo.svg" alt="BestRest logo" />
        <h1 class="title">
          <span class="title__highlight">Sign Up</span> and find the best place
          to rest while traveling
        </h1>
        <form class="form" @submit.prevent="onSubmit">
          <label class="form__lable">
            <img
              class="form__lable-img"
              src="./assets/images/user-name.svg"
              alt="Name"
            />
            <input
              type="text"
              class="form-input"
              :class="{ 'form-input-active': firstNameInput }"
              v-model.trim="firstNameInput"
              max="22"
            />
            <span
              class="form-input__placeholder"
              :class="{ 'form-input__placeholder-active': firstNameInput }"
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
              :class="{ 'form-input-active': secondNameInput }"
              v-model.trim="secondNameInput"
            />
            <span
              class="form-input__placeholder"
              :class="{
                'form-input__placeholder-active': secondNameInput,
              }"
              >Second Name</span
            >
          </label>
          <!-- v-select  -->
          <v-select @onSelect="selectOption"> </v-select>

          <label class="form__lable">
            <img
              class="form__lable-img"
              src="./assets/images/phone.svg"
              alt="Phone"
            />
            <input
              type="number"
              class="form-input number-input"
              :class="{ 'form-input-active': phoneInput }"
              v-model.number="phoneInput"
            />
            <span
              class="form-input__placeholder"
              :class="{ 'form-input__placeholder-active': phoneInput }"
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
              :class="{ 'form-input-active': passwordInput }"
              v-model.trim="passwordInput"
            />
            <span
              class="form-input__placeholder"
              :class="{ 'form-input__placeholder-active': passwordInput }"
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
              :class="{ 'form-input-active': confirmPasswordInput }"
              v-model.trim="confirmPasswordInput"
            />
            <span
              class="form-input__placeholder"
              :class="{
                'form-input__placeholder-active': confirmPasswordInput,
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
              :class="{ 'form-input-active': emailInput }"
              v-model.trim="emailInput"
            />
            <span
              class="form-input__placeholder"
              :class="{ 'form-input__placeholder-active': emailInput }"
              >Email</span
            >
          </label>
          <!-- v-checkbox  -->
          <v-checkbox @onAgree="selectAgree"></v-checkbox>
          <!-- v-button  -->
          <v-button> Sing Up </v-button>
        </form>
      </div>
    </div>
    <span class="log-in">
      If you have an account, <a class="log-in__link" href="#">Log In</a>
    </span>
  </section>
</template>

<script>
import vSelect from './components/vSelect.vue';
import vCheckbox from './components/vCheckbox.vue';
import vButton from './components/vButton.vue';

// import axios from 'axios';

export default {
  components: {
    vSelect,
    vCheckbox,
    vButton,
  },
  data() {
    return {
      firstNameInput: '',
      secondNameInput: '',
      countryInput: '',
      phoneInput: '',
      passwordInput: '',
      confirmPasswordInput: '',
      emailInput: '',
      isAgree: '',
    };
  },
  methods: {
    selectOption(option) {
      this.countryInput = option.name;
      this.phoneInput = option.value;
    },
    selectAgree(isAgree) {
      this.isAgree = isAgree;
    },
    onSubmit() {
      let user = {
        firstName: this.firstNameInput,
        secondName: this.secondNameInput,
        country: this.countryInput,
        phone: this.phoneInput,
        password: this.passwordInput,
        confirmPassword: this.confirmPasswordInput,
        email: this.emailInput,
        agree: this.isAgree,
      };
      console.log(user);
      // this.sendUser(user);
      // this.getUsers();
    },
    // sendUser(user) {
    //   const URL = 'https://anmgeodpxvrfszcufzij.supabase.co/rest/v1';
    //   const bearer =
    //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODUwNzUzNCwiZXhwIjoxOTQ0MDgzNTM0fQ.g47vU8N9LWJQOoV5mao0cUGeTvG5gAk515YLa51mmtI';
    //   const config = {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     },
    //   };
    //   return new Promise(() => {
    //     axios
    //       .post(URL, user, config, {
    //         access_token: bearer,
    //         token_type: 'bearer',
    //       })
    //       .then((res) => {
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   });
    // },
    // getUsers() {
    //   console.log('getUsers');
    //   const URL = 'https://anmgeodpxvrfszcufzij.supabase.co/rest/v1';

    //   return new Promise(() => {
    //     axios
    //       .get(URL)
    //       .then((res) => {
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   });
    // },
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
    content: '';
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
    image: url('./assets/images/bg.jpg');
    position: center center;
    size: cover;
    repeat: no-repeat;
  }
}
.page-form__inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.logo {
  display: block;
  margin: 0 auto;
}
.title {
  margin: 32px 0 0;
  text-align: center;
}
.title__highlight {
  color: var(--color-secondary);
}
.form {
  font-family: 'Rubik-Light', sans-serif;
  font-size: 19px;
  max-width: 630px;
  margin: 55px auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
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
  padding: 7px 5px 0 50px;
  background: transparent;
  position: relative;
  color: var(--color-quinary);
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  &:hover {
    border: 1px solid var(--color-secondary);
  }
}
.form-input:focus {
  outline: transparent;
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

.number-input[type='number']::-webkit-outer-spin-button,
.number-input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

// delete arrow Chrome
.number-input[type='number'] {
  -moz-appearance: textfield;
}
// delete arrow mazila
.number-input[type='number']:hover,
.number-input[type='number']:focus {
  -moz-appearance: number-input;
}
// delete arrow other brouser
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.log-in {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Rubik-Light', sans-serif;
  font-size: 15px;
}
.log-in__link {
  color: var(--color-secondary);
  text-decoration: none;
  position: relative;
  outline: transparent;
  transition: 0.3s;
  &::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 0;
    width: 100%;
    border: 0.5px solid var(--color-secondary);
  }
  &:hover::before {
    transition: 0.3s;
    border: 0.5px solid var(--color-quinary);
  }
  &:focus::before {
    border: 0.5px solid var(--color-primary);
  }
}

@media screen and (max-width: 660px) {
  .form {
    flex-direction: column;
  }
}
</style>
