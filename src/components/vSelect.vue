<template>
  <div class="select">
    <p><Select></Select></p>
  </div>
</template>

<script>
export default {
  name: "vSelect",
  data() {
    return {
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
};
</script>

<style lang="scss" scoped></style>
