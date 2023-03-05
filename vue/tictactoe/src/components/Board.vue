<!-- Board.vue -->
<template>
  <div class="board">
    <Square v-for="(square, index) in squares" :key="index" :value="square" @click="onSquareClick(index)" />
  </div>
</template>

<script>
import Square from "./Square.vue";

export default {
  name: "BoardPage",
  components: {
    Square,
  },
  props: {
    squares: {
      type: Array,
      required: true,
    },
    onSquareClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  width: 300px;
  height: 300px;
}
</style>
