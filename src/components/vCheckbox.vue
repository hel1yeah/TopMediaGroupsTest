<template>
  <label class="form__lable form__lable--checkbox">
    <input
      type="checkbox"
      v-model="isAgree"
      class="form-checkbox"
      @change="onAgree"
    />
    <span class="form__checkbox"></span>
    <span class="form__descr"
      >I agree to the
      <a class="form-link" href="#">Terms & Conditions</a>
    </span>
  </label>
</template>

<script>
export default {
  name: 'vCheckbox',
  emits: ['onAgree'],
  data() {
    return {
      isAgree: '',
    };
  },
  methods: {
    onAgree() {
      this.$emit('onAgree', this.isAgree);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-checkbox {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
.form__checkbox {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 3px;
  left: 0;
  border-radius: 3px;
  background-color: transparent;
  border: 1px solid var(--color-secondary);
  z-index: 1;
  transition: 0.3s;
}
.form__descr {
  padding: 0 0 0 25px;
}

// checked

.form-checkbox:checked + .form__checkbox {
  background-color: var(--color-secondary);
  background: url('./../assets/images/checkbox.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}

// focus

.form-checkbox:focus + .form__checkbox {
  background-color: #67d9b7;
}

// disabled

.form-checkbox:disabled + .form__checkbox {
  background-color: var(--color-secondary);
  border: 3px solid var(--color-quinary);
}

// checked disabled

.form-checkbox:checked:disabled + .form__checkbox {
  background-color: var(--color-secondary);
}

.form__descr {
  font-family: 'Rubik-Light ', sans-serif;
  font-size: 15px;
}
.form-link {
  color: var(--color-secondary);
  text-decoration: none;
  position: relative;
  outline: transparent;
  transition: 3s;
  &::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 0;
    width: 100%;
    border: 0.5px solid var(--color-secondary);
  }
}

.form-link:focus::before {
  border: 0.5px solid var(--color-primary);
}
</style>
