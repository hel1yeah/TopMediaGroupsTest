<template>
  <button class="form-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "vButton",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.form-button {
  background-color: var(--color-secondary);
  border-radius: 5px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 165px;
  height: 56px;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    color: var(--color-secondary);
    background-color: transparent;
    border: 1px solid var(--color-secondary);
  }
}
</style>
