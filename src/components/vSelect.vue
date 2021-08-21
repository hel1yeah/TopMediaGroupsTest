<template>
  <div
    class="select"
    :class="{ 'select-active': selectActive }"
    @click="
      areOptionsVisible = !areOptionsVisible;
      lableActive();
    "
  >
    <img
      class="select__img"
      src="./../assets/images/map-marker.svg"
      alt="Name"
    />
    <span
      class="select__placeholder"
      :class="{ 'placeholder-active': isLableActive }"
      >Country</span
    >
    <span>{{ selected }}</span>
    <div class="select__options--wrapper" v-if="areOptionsVisible">
      <div class="select__options">
        <p
          class="select__option"
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vSelect",
  emits: ["onSelect"],

  data() {
    return {
      areOptionsVisible: false,
      selected: null,
      selectActive: false,
      isLableActive: false,
      options: [
        { name: "Ukraine", value: "+380" },
        { name: "Belarus", value: "+375" },
        { name: "Moldova", value: "+373" },
        { name: "Poland", value: "+48" },
        { name: "Turkey", value: "+90" },
        { name: "Israel", value: "+850" },
        { name: "North Korea", value: "+850" },
      ],
    };
  },
  methods: {
    selectOption(option) {
      this.selected = option.name;
      this.selectActive = true;
      this.areOptionsVisible != this.areOptionsVisible;
      this.$emit("onSelect", option);
    },
    lableActive() {
      this.isLableActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  z-index: 55;
  position: relative;
  cursor: pointer;
  width: 300px;
  height: 56px;
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px 0 50px;
  background: transparent;
  color: var(--color-quinary);
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    border: 1px solid var(--color-secondary);
  }
  &.select-active {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid var(--color-secondary);
  }
}
.select__img {
  position: absolute;
  top: 15px;
  left: 16px;
  width: 24px;
  height: 24px;
  z-index: 1;
}
.select__placeholder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  transition: 0.3s;
  &.placeholder-active {
    font-size: 11px;
    color: var(--color-secondary);
    transform: translateY(-20px);
  }
}
.select__options--wrapper {
  position: absolute;
  top: 60px;
  left: 0;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 160px;
  border-radius: 5px;
}
.select__options {
  z-index: 999;
  background-color: var(--color-primary);
  color: var(--color-option);
  overflow: auto;
  width: 100%;
  height: 160px;
  padding: 21px 23px 5px;
  // scrollbar customize firefox
  scrollbar-color: var(--color-option) var(--color-primary);
  scrollbar-width: thin;
  // scrollbar customize webkit
  &::-webkit-scrollbar {
    width: 3px;
    background-color: var(--color-primary);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-option);
    width: 5px;
    border-radius: 20px;
  }
}

.select__option {
  font-family: "Rubik-Light", sans-serif;
  font-size: 15px;
  margin: 0 0 12px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    padding: 0 0 0 9px;
    color: var(--color-dark);
  }
}
</style>
