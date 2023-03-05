<!-- Square.vue -->
<template>
  <button class="square" @click="onClick">{{ value }}</button>
</template>

<script>
export default {
  name: "SquarePage",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.square {
  font-size: 40px;
  width: 100%;
  height: 100%;
}
</style>
